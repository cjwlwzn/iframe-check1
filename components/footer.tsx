"use client";

import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card mt-16 border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <p className="text-muted-foreground text-lg">{t('footer')}</p>
          <div className="text-sm text-muted-foreground/60 pt-4 border-t border-border/50">
            <p>© {currentYear} iframecheck.online {t('copyright')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}