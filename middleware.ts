// File: middleware.ts (Versi Final yang Benar)

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// 1. Definisikan bahasa yang didukung dan bahasa default.
const locales = ['en', 'zh', 'ja', 'ar', 'es', 'ru'];
const defaultLocale = 'zh';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 2. Cek apakah path sudah memiliki prefiks bahasa (misalnya /en/ atau /ja/).
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // Jika sudah ada prefiks bahasa, jangan lakukan apa-apa.
  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // 3. Jika TIDAK ADA prefiks bahasa, lakukan "rewrite".
  // Ini adalah bagian terpenting.
  // Pengguna mengunjungi -> /about
  // Next.js secara internal mengambil konten dari -> /zh/about
  // URL di browser pengguna tetap -> /about
  const newUrl = new URL(`/${defaultLocale}${pathname}`, request.url);
  return NextResponse.rewrite(newUrl);
}

// 4. Konfigurasi Matcher (biarkan seperti ini)
// Ini untuk memastikan middleware tidak berjalan pada file aset seperti gambar, dll.
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|.*\\..*).*)',
  ],
};
