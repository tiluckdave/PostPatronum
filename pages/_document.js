import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property="og:title" content="Post Patronum" key="title" />
        <meta property="og:description" content="LinkedIn post writer" key="description" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
