// pages/_document.js

import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Meta tags for SEO */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="A modern, responsive landing page for SidLabs" />
        <meta name="keywords" content="SidLabs, technology, landing page, modern design" />
        <meta name="author" content="Your Name" />

        {/* Google Fonts (Inter) */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
