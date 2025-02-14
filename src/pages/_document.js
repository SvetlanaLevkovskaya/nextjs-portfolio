import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
      <Script id="theme-swircher" strategy="beforeInteractive">
        {`
          if (localStorage.theme === 'dark') {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
          `}
      </Script>
      <Main />
      <NextScript />
      </body>
    </Html>
  );
}
