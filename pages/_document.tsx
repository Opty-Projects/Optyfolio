import { Html, Head, Main, NextScript } from 'next/document'

// Emotion's default cache handles SSR — no custom extraction needed.
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
