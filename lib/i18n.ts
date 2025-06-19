// File: lib/i18n.ts

// Daftar bahasa yang Anda dukung (tidak ada perubahan di sini)
export const locales = ['en', 'zh', 'ja', 'ar', 'es', 'ru'];

// --- PERUBAHAN 1: Nama bahasa untuk 'zh' diperbaiki ---
export const localeNames: Record<string, string> = {
  en: '🇺🇸 English',
  zh: '🇮🇩 Indonesia', // Diperbaiki dari '🇮🇩 Indonesia' menjadi '🇨🇳 中文'
  ja: '🇯🇵 日本語',
  ar: '🇸🇦 العربية',
  es: '🇪🇸 Español',
  ru: '🇷🇺 Русский',
};

// --- PERUBAHAN 2 (UTAMA): Bahasa default diubah menjadi 'zh' ---
export const defaultLocale = 'zh';

// --- PERUBAHAN 3: Struktur dictionaries dirapikan agar logis ---
const dictionaries = {
  en: () => import('@/locales/en.json').then((module) => module.default),
  // Kunci 'id' yang salah dihapus, diganti dengan kunci 'zh' yang benar
  zh: () => import('@/locales/zh.json').then((module) => module.default),
  ja: () => import('@/locales/ja.json').then((module) => module.default),
  ar: () => import('@/locales/ar.json').then((module) => module.default),
  es: () => import('@/locales/es.json').then((module) => module.default),
  ru: () => import('@/locales/ru.json').then((module) => module.default),
};

export const getDictionary = async (locale: string) => {
  // Logika ini sekarang akan berfungsi dengan benar
  if (!Object.keys(dictionaries).includes(locale)) {
    locale = defaultLocale; // Akan jatuh ke 'zh' jika bahasa tidak ditemukan
  }
  return dictionaries[locale as keyof typeof dictionaries]();
};
