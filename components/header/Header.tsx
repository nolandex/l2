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
            className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.966-.273-.099-.471-.148-.669.15-.198.297-.768.966-.939 1.164-.171.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.074-.149-.669-1.611-.916-2.207-.242-.579-.487-.501-.669-.501-.173 0-.347-.025-.52-.074-.173-.049-.371-.198-.495-.347-.124-.149-.223-.347-.223-.496 0-.149.074-.273.223-.422.644-.669 1.164-1.164 1.414-1.414.267-.267.539-.471.806-.606.267-.149.595-.099.892.05.297.149 1.255.916 1.602 1.164.347.248.595.446.694.595.099.149.099.347.099.595 0 .248-.099.471-.347.669-.248.198-.496.397-.744.645-.248.248-.347.595-.347.892 0 .297.099.595.347.843.248.248.645.645 1.164.892.916.446 1.759.669 2.059.669.297 0 .496-.099.645-.297.149-.198.297-.595.446-.892.149-.297.347-.645.595-.892z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.118.551 4.115 1.508 5.851L0 24l6.149-1.508C7.885 23.449 9.882 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.021 0-3.896-.551-5.494-1.508l-.351-.199-3.648.892.892-3.648-.199-.351C2.551 15.896 2 14.021 2 12c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10z"/>
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
            className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.966-.273-.099-.471-.148-.669.15-.198.297-.768.966-.939 1.164-.171.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.074-.149-.669-1.611-.916-2.207-.242-.579-.487-.501-.669-.501-.173 0-.347-.025-.52-.074-.173-.049-.371-.198-.495-.347-.124-.149-.223-.347-.223-.496 0-.149.074-.273.223-.422.644-.669 1.164-1.164 1.414-1.414.267-.267.539-.471.806-.606.267-.149.595-.099.892.05.297.149 1.255.916 1.602 1.164.347.248.595.446.694.595.099.149.099.347.099.595 0 .248-.099.471-.347.669-.248.198-.496.397-.744.645-.248.248-.347.595-.347.892 0 .297.099.595.347.843.248.248.645.645 1.164.892.916.446 1.759.669 2.059.669.297 0 .496-.099.645-.297.149-.198.297-.595.446-.892.149-.297.347-.645.595-.892z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.118.551 4.115 1.508 5.851L0 24l6.149-1.508C7.885 23.449 9.882 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.021 0-3.896-.551-5.494-1.508l-.351-.199-3.648.892.892-3.648-.199-.351C2.551 15.896 2 14.021 2 12c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10z"/>
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
                  className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.966-.273-.099-.471-.148-.669.15-.198.297-.768.966-.939 1.164-.171.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.520-.074-.149-.669-1.611-.916-2.207-.242-.579-.487-.501-.669-.501-.173 0-.347-.025-.52-.074-.173-.049-.371-.198-.495-.347-.124-.149-.223-.347-.223-.496 0-.149.074-.273.223-.422.644-.669 1.164-1.164 1.414-1.414.267-.267.539-.471.806-.606.267-.149.595-.099.892.05.297.149 1.255.916 1.602 1.164.347.248.595.446.694.595.099.149.099.347.099.595 0 .248-.099.471-.347.669-.248.198-.496.397-.744.645-.248.248-.347.595-.347.892 0 .297.099.595.347.843.248.248.645.645 1.164.892.916.446 1.759.669 2.059.669.297 0 .496-.099.645-.297.149-.198.297-.595.446-.892.149-.297.347-.645.595-.892z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.118.551 4.115 1.508 5.851L0 24l6.149-1.508C7.885 23.449 9.882 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.021 0-3.896-.551-5.494-1.508l-.351-.199-3.648.892.892-3.648-.199-.351C2.551 15.896 2 14.021 2 12c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10z"/>
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
