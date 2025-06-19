"use client";
import HeaderLinks from "@/components/header/HeaderLinks";
import { LangSwitcher } from "@/components/header/LangSwitcher";
import { siteConfig } from "@/config/site";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { CgClose } from "react-icons/cg";
import { ThemedButton } from "../ThemedButton";

const links = [
  { label: "Features", href: "#Features" },
  { label: "Pricing", href: "#Pricing" },
  { label: "Testimonials", href: "#Testimonials" },
  { label: "FAQ", href: "#FAQ" },
];

const Header = () => {
  const params = useParams();
  const lang = params.lang;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-background/95 backdrop-blur-sm ${
        isScrolled ? "py-2 shadow-md" : "py-4"
      } mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`}
    >
      <nav className="relative flex justify-between items-center">
        {/* Left section */}
        <div className="flex items-center md:gap-x-12 flex-1">
          {/* PERUBAHAN DI SINI: Ukuran teks dikecilkan dari 2xl menjadi xl */}
          <Link
            href="/"
            aria-label="Bisnovo"
            title="Bisnovo"
            className="font-bold text-xl" 
          >
            Bisnovo
          </Link>
        </div>

        {/* Center - Desktop Nav */}
        <ul className="hidden md:flex items-center justify-center gap-6 flex-1">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                href={`/${lang === "en" ? "" : lang}${link.href}`}
                aria-label={link.label}
                title={link.label}
                className="tracking-wide transition-colors duration-200 font-normal text-sm"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right - Desktop */}
        <div className="hidden md:flex items-center justify-end gap-x-6 flex-1">
          <HeaderLinks />
          <ThemedButton />
          <LangSwitcher />
        </div>

        {/* Mobile - Right side (Button + Menu Icon) */}
        <div className="md:hidden flex items-center gap-x-4">
          <ThemedButton />
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <MenuIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="absolute top-0 left-0 w-full z-50">
            <div className="p-5 bg-background border rounded shadow-sm">
              <div className="flex items-center justify-between mb-4">
                 {/* PERUBAHAN DI SINI: Ukuran teks dikecilkan dari xl menjadi lg */}
                <Link
                  href="/"
                  aria-label="Bisnovo"
                  title="Bisnovo"
                  className="font-bold text-lg tracking-wide"
                >
                  Bisnovo
                </Link>
                <button
                  aria-label="Close Menu"
                  title="Close Menu"
                  className="tracking-wide transition-colors duration-200 font-normal"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <CgClose className="w-6 h-6" />
                </button>
              </div>
              <nav>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={`/${lang === "en" ? "" : lang}${link.href}`}
                        aria-label={link.label}
                        title={link.label}
                        className="font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400 text-sm"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="pt-4 flex items-center justify-between gap-x-4">
                <HeaderLinks />
                <LangSwitcher />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
