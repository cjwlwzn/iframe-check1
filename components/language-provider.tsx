"use client";

import { useEffect } from 'react';
import i18next from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { getOptions } from '@/app/i18n/settings';

// Initialize i18next only once
if (!i18next.isInitialized) {
  i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
      ...getOptions(),
      resources: {
        en: { translation: require('@/app/i18n/locales/en.json') },
        fr: { translation: require('@/app/i18n/locales/fr.json') },
        de: { translation: require('@/app/i18n/locales/de.json') },
        ko: { translation: require('@/app/i18n/locales/ko.json') },
        ja: { translation: require('@/app/i18n/locales/ja.json') },
        zh: { translation: require('@/app/i18n/locales/zh.json') },
      },
      detection: {
        order: ['path', 'navigator'],
      },
    });
}

export function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Get language from URL path
    const lang = window.location.pathname.split('/')[1];
    if (lang && i18n.languages.includes(lang)) {
      i18n.changeLanguage(lang);
    }
  }, [i18n]);

  return children;
}