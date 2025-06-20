import { SiteConfig } from "@/types/siteConfig";
import { BsInstagram, BsTiktok, BsFacebook, BsWhatsapp } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const OPEN_SOURCE_URL = 'https://github.com/weijunext/landing-page-boilerplate';

const baseSiteConfig = {
  name: "Bisnovo",
  description:
    "A free, open-source, and powerful landing page boilerplate, ideal for various projects, enabling you to create a landing page in under an hour.",
  url: "https://bisnovo.my.id", // Diperbarui dari bisnovo.com
  ogImage: "https://bisnovo.my.id/og.png", // Diperbarui dari bisnovo.com
  metadataBase: '/',
  keywords: ["bisnis online", "jasa pembuatan website", "landing page", "bisnovo"],
  authors: [
    {
      name: "Bisnovo",
      url: "https://www.instagram.com/bisnovo",
    },
  ],
  creator: '@bisnovo',
  openSourceURL: 'https://github.com/weijunext/landing-page-boilerplate',
  themeColors: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  nextThemeColor: 'dark',
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/logo.png",
  },
  headerLinks: [
    { name: 'whatsapp', href: "https://api.whatsapp.com/send/?phone=6285156779923", icon: BsWhatsapp },
    { name: 'email', href: "mailto:bisnovohq@gmail.com", icon: MdEmail }, // Diperbarui dari kontak@bisnovo.com
    { name: 'instagram', href: "https://www.instagram.com/bisnovo", icon: BsInstagram },
  ],
  footerLinks: [
    { name: 'instagram', href: "https://www.instagram.com/bisnovo", icon: BsInstagram },
    { name: 'tiktok', href: "https://www.tiktok.com/@bisnovo", icon: BsTiktok },
    { name: 'facebook', href: "https://www.facebook.com/share/1H87XB9aw7/", icon: BsFacebook },
    { name: 'whatsapp', href: "https://api.whatsapp.com/send/?phone=6285156779923", icon: BsWhatsapp },
    { name: 'email', href: "mailto:bisnovohq@gmail.com", icon: MdEmail }, // Diperbarui dari kontak@bisnovo.com
  ],
  footerProducts: [],
};

export const siteConfig: SiteConfig = {
  ...baseSiteConfig,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseSiteConfig.url,
    title: baseSiteConfig.name,
    images: [`${baseSiteConfig.url}/og.png`],
    description: baseSiteConfig.description,
    siteName: baseSiteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    site: baseSiteConfig.url,
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    images: [`${baseSiteConfig.url}/og.png`],
    creator: baseSiteConfig.creator,
  },
};
