"use client";

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useTranslation } from "react-i18next";

interface UrlInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  loading: boolean;
}

export function UrlInput({ value, onChange, onSubmit, loading }: UrlInputProps) {
  const { t } = useTranslation();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let url = e.target.value;
    if (url && !url.startsWith('http://') && !url.startsWith('https://')) {
      url = `https://${url}`;
    }
    onChange(url);
  };

  return (
    <div className="flex gap-2">
      <Input
        type="url"
        placeholder={t('urlPlaceholder')}
        value={value}
        onChange={handleInputChange}
        onKeyDown={(e) => e.key === 'Enter' && onSubmit()}
        className="flex-1"
      />
      <Button 
        onClick={onSubmit}
        className="bg-primary hover:bg-primary/90"
        disabled={loading}
      >
        {loading ? t('checking') : t('checkButton')}
      </Button>
    </div>
  );
}