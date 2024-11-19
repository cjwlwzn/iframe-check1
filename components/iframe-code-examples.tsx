"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { CodeSnippet } from "./code-snippet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface IframeCodeExamplesProps {
  url: string;
}

export function IframeCodeExamples({ url }: IframeCodeExamplesProps) {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("html");

  const examples = {
    html: {
      title: "HTML",
      code: `<iframe
  src="${url || 'https://example.com'}"
  width="100%"
  height="500"
  style="border: none;"
  title="Embedded content"
></iframe>`
    },
    react: {
      title: "React",
      code: `import React from 'react';

function IframeComponent() {
  return (
    <iframe
      src="${url || 'https://example.com'}"
      style={{ width: '100%', height: 500, border: 'none' }}
      title="Embedded content"
    />
  );
}`
    },
    vue: {
      title: "Vue",
      code: `<template>
  <iframe
    :src="'${url || 'https://example.com'}'"
    style="width: 100%; height: 500px; border: none;"
    title="Embedded content"
  />
</template>`
    },
    nextjs: {
      title: "Next.js",
      code: `// components/IframeComponent.tsx
export default function IframeComponent() {
  return (
    <iframe
      src="${url || 'https://example.com'}"
      style={{ width: '100%', height: 500, border: 'none' }}
      title="Embedded content"
    />
  );
}`
    },
    angular: {
      title: "Angular",
      code: `<!-- iframe.component.html -->
<iframe
  [src]="sanitizer.bypassSecurityTrustResourceUrl('${url || 'https://example.com'}')"
  style="width: 100%; height: 500px; border: none;"
  title="Embedded content"
></iframe>

// iframe.component.ts
import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-iframe',
  templateUrl: './iframe.component.html',
})
export class IframeComponent {
  constructor(public sanitizer: DomSanitizer) {}`
    },
    svelte: {
      title: "Svelte",
      code: `<iframe
  src="{url}"
  style="width: 100%; height: 500px; border: none;"
  title="Embedded content"
/>

<script>
  export let url = '${url || 'https://example.com'}';
</script>`
    }
  };

  return (
    <div className="space-y-4 bg-card rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold mb-6">{t('codeExamples')}</h3>
      <Tabs defaultValue="html" className="w-full">
        <TabsList className="grid grid-cols-3 lg:grid-cols-6 w-full">
          {Object.entries(examples).map(([key, { title }]) => (
            <TabsTrigger key={key} value={key} className="text-sm">
              {title}
            </TabsTrigger>
          ))}
        </TabsList>
        {Object.entries(examples).map(([key, { title, code }]) => (
          <TabsContent key={key} value={key}>
            <CodeSnippet language={title} code={code} />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}