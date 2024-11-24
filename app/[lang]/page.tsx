"use client";

import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { LanguageButton } from '@/components/language-button';
import { UrlInput } from '@/components/url-input';
import { IframeCodeExamples } from '@/components/iframe-code-examples';
import { InfoSections } from '@/components/info-sections';
import { Footer } from '@/components/footer';
import Image from 'next/image';

export default function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const { t } = useTranslation();
  const [url, setUrl] = useState('');
  const [inputUrl, setInputUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [iframeStatus, setIframeStatus] = useState<string>('');
  const [blockReason, setBlockReason] = useState<string | null>(null);
  const [key, setKey] = useState(0);

  const handleCheck = () => {
    if (!inputUrl) {
      setError(t('invalidUrl'));
      return;
    }

    // Reset states
    setLoading(true);
    setError(null);
    setBlockReason(null);
    setIframeStatus(t('loading'));
    
    // Force iframe reload by updating key
    setKey(prev => prev + 1);
    
    // Update URL
    setUrl(inputUrl);
  };

  const handleIframeLoad = () => {
    setLoading(false);
    setError(null);
    setBlockReason(null);
    setIframeStatus(t('loadSuccess'));
  };

  const handleIframeError = () => {
    setLoading(false);
    setError(t('loadError'));
    setBlockReason(t('networkError'));
    setIframeStatus(t('failed'));
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-muted">
      <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm z-50 border-b border-border">
        <div className="container mx-auto px-4">
          <nav className="h-16 flex justify-between items-center">
            <a 
              href={`/${lang}`}
              className="flex items-center gap-2 text-primary hover:text-primary/90"
            >
              <Image
                src="/logo.png"
                alt="IFrame Checker Logo"
                width={32}
                height={32}
                className="w-8 h-8"
                priority
              />
              <span className="text-xl font-semibold leading-none">iframecheck.online</span>
            </a>
            <LanguageButton currentLang={lang} />
          </nav>
        </div>
      </header>

      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold text-primary">{t('title')}</h1>
              <p className="text-xl text-muted-foreground">{t('description')}</p>
            </div>

            <UrlInput
              value={inputUrl}
              onChange={setInputUrl}
              onSubmit={handleCheck}
              loading={loading}
            />

            {(error || blockReason) && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription className="space-y-2">
                  <div>{error}</div>
                  {blockReason && (
                    <div className="text-sm opacity-90">{blockReason}</div>
                  )}
                </AlertDescription>
              </Alert>
            )}

            <div className="bg-card rounded-lg shadow-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">{t('iframeResult')}</h2>
                {iframeStatus && (
                  <span className={`text-sm ${error ? 'text-destructive' : 'text-muted-foreground'}`}>
                    {iframeStatus}
                  </span>
                )}
              </div>
              <div className="max-w-[1000px] mx-auto bg-background rounded border border-border relative min-h-[500px]">
                {url ? (
                  <iframe
                    key={key}
                    ref={iframeRef}
                    src={url}
                    className="w-full h-[500px]"
                    sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
                    onLoad={handleIframeLoad}
                    onError={handleIframeError}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                    {t('enterUrlToTest')}
                  </div>
                )}
                {loading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-background/50">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                  </div>
                )}
              </div>
            </div>

            <IframeCodeExamples url={url} />
            <InfoSections />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}