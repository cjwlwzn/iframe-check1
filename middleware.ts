import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { match as matchLocale } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { languages as supportedLanguages } from '@/app/i18n/settings';

function getLocale(request: NextRequest): string {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const locales = supportedLanguages;
  const browserLanguages = new Negotiator({ headers: negotiatorHeaders }).languages();

  try {
    const locale = matchLocale(browserLanguages, locales, 'en');
    return locale;
  } catch (e) {
    return 'en';
  }
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Skip static files
  if (
    pathname.startsWith('/_next') ||
    pathname.includes('/api/') ||
    pathname.endsWith('.xml') ||
    pathname.endsWith('.txt') ||
    pathname.endsWith('.ico') ||
    pathname.endsWith('.svg')
  ) {
    return NextResponse.next();
  }

  // Check if the pathname starts with a locale
  const pathnameIsMissingLocale = supportedLanguages.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);
    const newUrl = new URL(
      `/${locale}${pathname === '/' ? '' : pathname}`,
      request.url
    );
    
    // Preserve search params
    newUrl.search = request.nextUrl.search;
    
    return NextResponse.redirect(newUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.svg|robots.txt).*)',
  ],
};