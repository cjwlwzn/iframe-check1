"use client";

import { useTranslation } from "react-i18next";
import { CodeSnippet } from "@/components/code-snippet";

export function InfoSections() {
  const { t } = useTranslation();

  return (
    <div className="space-y-16 mt-12">
      <section className="prose prose-gray dark:prose-invert max-w-none">
        <h2 className="text-3xl font-bold mb-6">How to Use</h2>
        <p className="text-lg leading-relaxed mb-6">
          Welcome to the ultimate iframe checker tool, your go-to solution for quickly testing and previewing any website within an iframe. Using this tool is simple and efficient:
        </p>
        <ol className="list-decimal list-inside space-y-4 ml-4">
          <li className="text-lg"><span className="font-semibold">Input the URL:</span> Enter the website URL you want to test in the provided input box.</li>
          <li className="text-lg"><span className="font-semibold">Click "Check Website":</span> Hit the "Check Website" button to begin.</li>
          <li className="text-lg"><span className="font-semibold">View the Results:</span> Instantly, the content of the URL will appear in an embedded iframe below.</li>
        </ol>
        <p className="text-lg leading-relaxed mt-6">
          This tool is designed for developers, marketers, and anyone curious about iframe compatibility. Whether you're performing an iframe test for your own website or analyzing someone else's, this is the fastest and easiest way to get results online.
        </p>
      </section>

      <section className="prose prose-gray dark:prose-invert max-w-none">
        <h2 className="text-3xl font-bold mb-6">What is an iframe?</h2>
        <p className="text-lg leading-relaxed mb-6">
          An iframe (short for inline frame) is an HTML element that allows you to embed another HTML page within your web page. Think of it as a "window" to another website or a segment of content hosted externally. This powerful tool is widely used for:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4 text-lg">
          <li>Embedding videos (e.g., YouTube)</li>
          <li>Displaying external web pages</li>
          <li>Integrating maps and other widgets</li>
        </ul>
        <p className="text-lg leading-relaxed mt-6">
          Iframes are incredibly versatile and essential for modern web development. However, not all websites are designed to allow embedding, which is why our iframe check tool is invaluable for understanding iframe behavior and limitations.
        </p>
      </section>

      <section className="prose prose-gray dark:prose-invert max-w-none">
        <h2 className="text-3xl font-bold mb-6">How to Use iframes in HTML</h2>
        <p className="text-lg leading-relaxed mb-6">
          Incorporating iframes into your HTML is straightforward. Here's a basic example:
        </p>
        <div className="mb-6">
          <CodeSnippet
            language="HTML"
            code={`<iframe src="https://example.com" width="600" height="400"></iframe>`}
          />
        </div>
        <p className="text-lg leading-relaxed mb-4">
          The <code className="bg-muted px-1.5 py-0.5 rounded">src</code> attribute specifies the URL to be displayed in the iframe. You can also customize the width and height for optimal viewing. Additionally, developers can use advanced attributes like:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4 text-lg">
          <li><code className="bg-muted px-1.5 py-0.5 rounded">sandbox</code>: Restricts actions within the iframe for enhanced security.</li>
          <li><code className="bg-muted px-1.5 py-0.5 rounded">allow</code>: Specifies permissions (e.g., allowing full-screen mode or scripts).</li>
          <li><code className="bg-muted px-1.5 py-0.5 rounded">frameborder</code>: Controls the visibility of the iframe's border.</li>
        </ul>
      </section>

      <section className="prose prose-gray dark:prose-invert max-w-none">
        <h2 className="text-3xl font-bold mb-6">Why Some Websites Block iframes</h2>
        <p className="text-lg leading-relaxed mb-6">
          While iframes are a useful tool, some websites actively block their content from being displayed in iframes. This is often done for security or branding reasons. Key methods include:
        </p>
        <ul className="space-y-4 ml-4">
          <li className="text-lg">
            <span className="font-semibold">X-Frame-Options Header:</span> A security header that prevents iframe embedding. Common values include DENY or SAMEORIGIN, ensuring the site is only displayed within trusted contexts.
          </li>
          <li className="text-lg">
            <span className="font-semibold">Content-Security-Policy (CSP):</span> Specifies rules about embedding content, further enhancing security against attacks like clickjacking.
          </li>
          <li className="text-lg">
            <span className="font-semibold">Server Restrictions:</span> Some websites use server-level configurations to block iframe loading altogether.
          </li>
        </ul>
      </section>

      <section className="prose prose-gray dark:prose-invert max-w-none">
        <h2 className="text-3xl font-bold mb-6">About IFrame Checker</h2>
        <p className="text-lg leading-relaxed mb-6">
          The IFrame Checker Tool is an innovative, online solution designed to simplify iframe testing for websites. Here's why you'll love it:
        </p>
        
        <h3 className="text-2xl font-semibold mb-4">Key Features</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 text-lg mb-6">
          <li>Quick and Easy Testing: Just input a URL and get results in seconds.</li>
          <li>Instant Insights: See whether the target website supports iframe embedding or not.</li>
          <li>Real-Time Previews: View how the URL appears within an iframe directly on our platform.</li>
          <li>Completely Free: Perform unlimited iframe checks without any cost.</li>
        </ul>

        <h3 className="text-2xl font-semibold mb-4">Who Can Benefit?</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 text-lg mb-6">
          <li>Developers: Test iframe compatibility during website development.</li>
          <li>Marketers: Analyze competitors' websites or test campaign landing pages.</li>
          <li>Educators & Learners: Understand iframe functionality and real-world use cases.</li>
        </ul>

        <div className="bg-card rounded-lg p-6 mt-8">
          <h3 className="text-2xl font-semibold mb-4">Optimize Your Workflow with the IFrame Checker Tool</h3>
          <p className="text-lg leading-relaxed">
            Whether you're building, testing, or learning about websites, the IFrame Checker Tool is your perfect companion. Perform seamless iframe tests, ensure compatibility, and gain valuable insights into web functionality with just a few clicks.
          </p>
        </div>
      </section>
    </div>
  );
}