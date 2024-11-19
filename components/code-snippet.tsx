"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

interface CodeSnippetProps {
  language: string;
  code: string;
}

export function CodeSnippet({ language, code }: CodeSnippetProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-between bg-zinc-900 px-4 py-2 rounded-t-lg">
        <span className="text-sm font-medium text-zinc-200">{language}</span>
        <Button
          variant="ghost"
          size="sm"
          onClick={copyToClipboard}
          className="h-8 px-2 text-zinc-200 hover:text-white hover:bg-zinc-800"
        >
          {copied ? (
            <Check className="h-4 w-4" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </Button>
      </div>
      <pre className="bg-zinc-900 p-4 rounded-b-lg overflow-x-auto">
        <code className="text-sm text-zinc-200">{code}</code>
      </pre>
    </div>
  );
}