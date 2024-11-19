"use client";

import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { AlertCircle } from 'lucide-react';
import Image from 'next/image';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { LanguageButton } from '@/components/language-button';
import { UrlInput } from '@/components/url-input';
import { IframeCodeExamples } from '@/components/iframe-code-examples';
import { InfoSections } from '@/components/info-sections';
import { Footer } from '@/components/footer';

export default function Home() {
  const { t, i18n } = useTranslation();
  const [url, setUrl] = useState('');
  const [inputUrl, setInputUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [iframeStatus, setIframeStatus] = useState<string>('');
  const [blockReason, setBlockReason] = useState<string | null>(null);

  const handleCheck = () => {
    if (!inputUrl) {
      setError(t('invalidUrl'));
      return;
    }

    setLoading(true);
    setError(null);
    setBlockReason(null);
    setIframeStatus(t('loading'));
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
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
                  <nav className="flex justify-between items-center mb-8">
            <a 
              href={`/${i18n.language}`}
              className="flex items-center gap-3 text-primary hover:text-primary/90"
            >
              <Image
                src="/logo.png"
                alt="IFrame Checker Logo"
                width={48}
                height={48}
                className="w-12 h-12"
              />
              <span className="font-semibold text-2xl">iframecheck.online</span>
            </a>
            <LanguageButton currentLang={i18n.language} />
          </nav>
          
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
              <div className="max-w-[1000px] mx-auto bg-background rounded border border-border relative">
                <iframe
                  ref={iframeRef}
                  src={url}
                  className="w-full h-[500px]"
                  sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
                  onLoad={handleIframeLoad}
                  onError={handleIframeError}
                />
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