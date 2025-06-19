"use client";
import HeaderLinks from "@/components/header/HeaderLinks";
import { LangSwitcher } from "@/components/header/LangSwitcher";
import { siteConfig } from "@/config/site";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { CgClose } from "react-icons/cg";

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
          <Link
            href="https://wa.me/6285156779923"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            title="Chat on WhatsApp"
            className="text-green-500 hover:text-green-700 transition-colors duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.118.551 4.115 1.508 5.851L0 24l6.149-1.508C7.885 23.449 9.882 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm6.356 16.356c-.248.248-.595.347-.892.347-.3 0-.643-.223-2.059-.669-.519-.248-1.164-.446-1.164-.892 0-.297.099-.595.347-.843.248-.248.397-.496.645-.744.248-.248.595-.347.892-.347.297 0 .595.099.892.347.248.248.645.645.892 1.164.446.916.669 1.759.669 2.059 0 .297-.099.644-.347.892zm-4.738-4.738c-.198-.198-.446-.347-.669-.446-.223-.099-.446-.149-.694-.149-.248 0-.496.05-.694.149-.198.099-.446.248-.669.446-.223.198-.371.446-.446.669-.074.223-.099.496-.099.744 0 .248.025.521.099.744.074.223.223.471.446.669.198.198.446.347.669.446.223.099.446.149.694.149.248 0 .446-.05.669-.149.223-.099.471-.248.669-.446.198-.198.347-.446.446-.669.074-.223.099-.496.099-.744 0-.248-.025-.521-.099-.744-.074-.223-.223-.471-.446-.669z"/>
            </svg>
          </Link>
          <LangSwitcher />
        </div>

        {/* Mobile - Right side (Button + Menu Icon) */}
        <div className="md:hidden flex items-center gap-x-4">
          <Link
            href="https://wa.me/6285156779923"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            title="Chat on WhatsApp"
            className="text-green-500 hover:text-green-700 transition-colors duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.118.551 4.115 1.508 5.851L0 24l6.149-1.508C7.885 23.449 9.882 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm6.356 16.356c-.248.248-.595.347-.892.347-.3 0-.643-.223-2.059-.669-.519-.248-1.164-.446-1.164-.892 0-.297.099-.595.347-.843.248-.248.397-.496.645-.744.248-.248.595-.347.892-.347.297 0 .595.099.892.347.248.248.645.645.892 1.164.446.916.669 1.759.669 2.059 0 .297-.099.644-.347.892zm-4.738-4.738c-.198-.198-.446-.347-.669-.446-.223-.099-.446-.149-.694-.149-.248 0-.496.05-.694.149-.198.099-.446.248-.669.446-.223.198-.371.446-.446.669-.074.223-.099.496-.099.744 0 .248.025.521.099.744.074.223.223.471.446.669.198.198.446.347.669.446.223.099.446.149.694.149.248 0 .446-.05.669-.149.223-.099.471-.248.669-.446.198-.198.347-.446.446-.669.074-.223.099-.496.099-.744 0-.248-.025-.521-.099-.744-.074-.223-.223-.471-.446-.669z"/>
            </svg>
          </Link>
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
                <Link
                  href="https://wa.me/6285156779923"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat on WhatsApp"
                  title="Chat on WhatsApp"
                  className="text-green-500 hover:text-green-700 transition-colors duration-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.118.551 4.115 1.508 5.851L0 24l6.149-1.508C7.885 23.449 9.882 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm6.356 16.356c-.248.248-.595.347-.892.347-.3 0-.643-.223-2.059-.669-.519-.248-1.164-.446-1.164-.892 0-.297.099-.595.347-.843.248-.248.397-.496.645-.744.248-.248.595-.347.892-.347.297 0 .595.099.892.347.248.248.645.645.892 1.164.446.916.669 1.759.669 2.059 0 .297-.099.644-.347.892zm-4.738-4.738c-.198-.198-.446-.347-.669-.446-.223-.099-.446-.149-.694-.149-.248 0-.496.05-.694.149-.198.099-.446.248-.669.446-.223.198-.371.446-.446.669-.074.223-.099.496-.099.744 0 .248.025.521.099.744.074.223.223.471.446.669.198.198.446.347.669.446.223.099.446.149.694.149.248 0 .446-.05.669-.149.223-.099.471-.248.669-.446.198-.198.347-.446.446-.669.074-.223.099-.496.099-.744 0-.248-.025-.521-.099-.744-.074-.223-.223-.471-.446-.669z"/>
                  </svg>
                </Link>
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
