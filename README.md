# IFrame Checker

![IFrame Checker Logo](/public/logo.png)

A powerful, modern web application that allows users to instantly check if websites can be embedded in iframes. Built with Next.js 14, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Instant iframe Testing**: Check any website's iframe compatibility in real-time
- **Multi-language Support**: Available in English, Chinese, French, German, Korean, and Japanese
- **Code Examples**: Ready-to-use code snippets for various frameworks
- **Modern UI**: Beautiful, responsive design with dark mode support
- **Developer Friendly**: Comprehensive documentation and usage examples
- **SEO Optimized**: Built-in sitemap and robots.txt

## 🚀 Live Demo

Visit [iframecheck.online](https://iframecheck.online) to see the tool in action.

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Internationalization**: i18next
- **Theme**: next-themes
- **Code Quality**: ESLint

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/iframe-checker.git
cd iframe-checker
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🌍 Internationalization

The application supports multiple languages through i18next:

- English (en)
- Chinese (zh)
- French (fr)
- German (de)
- Korean (ko)
- Japanese (ja)

Language files are located in `app/i18n/locales/`.

## 🎨 Customization

### Theme

The application uses Tailwind CSS for styling. You can customize the theme in:
- `tailwind.config.ts`: Tailwind configuration
- `app/globals.css`: Global styles and CSS variables

### Components

UI components are built using shadcn/ui and can be found in the `components/` directory:
- `components/ui/`: Base UI components
- `components/`: Feature-specific components

## 📝 Usage Examples

### Basic iframe Implementation
```html
<iframe
  src="https://example.com"
  width="100%"
  height="500"
  style="border: none;"
  title="Embedded content"
></iframe>
```

### React Component
```tsx
function IframeComponent() {
  return (
    <iframe
      src="https://example.com"
      style={{ width: '100%', height: 500, border: 'none' }}
      title="Embedded content"
    />
  );
}
```

## 🔒 Security

The application implements several security features:
- Secure iframe sandbox attributes
- Content Security Policy headers
- X-Frame-Options handling
- HTTPS enforcement

## 📱 Responsive Design

The UI is fully responsive and optimized for:
- Desktop computers
- Tablets
- Mobile devices

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- Your Name - Initial work - [Your GitHub Profile](https://github.com/yourusername)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [i18next](https://www.i18next.com/)
- [Lucide Icons](https://lucide.dev/)