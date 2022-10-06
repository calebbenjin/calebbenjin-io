import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import { ReactElement } from 'react';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>,
        ],
      };
    } finally {
      sheet.seal();
    }
  }

  render(): ReactElement {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@300;400;500;700;800;900&display=swap" rel="stylesheet"></link>
        {/* <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;900&display=swap" rel="stylesheet" /> */}
        <link href="/static/favicons/favicon.ico" rel="shortcut icon" />
        <link href="/static/favicons/site.webmanifest" rel="manifest" />
        <link
          href="/static/favicons/apple-touch-icon.png"
          rel="apple-touch-icon"
          sizes="180x180"
        />
        <link
          href="/static/favicons/favicon-32x32.png"
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
        <link
          href="/static/favicons/favicon-16x16.png"
          rel="icon"
          sizes="16x16"
          type="image/png"
        />
        <link
          color="#4a9885"
          href="/static/favicons/safari-pinned-tab.svg"
          rel="mask-icon"
        />
        <meta content="#ffffff" name="theme-color" />
        <meta content="#ffffff" name="msapplication-TileColor" />
        <meta
          content="/static/favicons/browserconfig.xml"
          name="msapplication-config"
        />
        <meta content="14d2e73487fa6c71" name="yandex-verification" />
        <meta
          content="eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw"
          name="google-site-verification"
        />

          <link rel="shortcut icon" href="/public/favicon.ico" />
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="I write code, think about great designs, founder of FrontendProf, Content Creator, Technical Writer. I am passionate about solving business problems through human-centered design." />

          {/*<!-- Google / Search Engine Tags -->*/}
          <meta itemProp="name" content="Caleb Benjamin Portfolio" />
          <meta itemProp="description" content="I write code, think about great designs, founder of FrontendProf, Content Creator, Technical Writer. I am passionate about solving business problems through human-centered design." />
          <meta
            itemProp="image"
            content="https://res.cloudinary.com/calebbenjin/image/upload/v1665089575/Screenshot_128_jhoeym.png"
          />

          {/*<!-- Facebook Meta Tags -->*/}
          <meta property="og:title" content="Caleb Benjamin Portfolio" />
          <meta property="og:description" content="I write code, think about great designs, founder of FrontendProf, Content Creator, Technical Writer. I am passionate about solving business problems through human-centered design." />
          <meta
            property="og:image"
            content="https://res.cloudinary.com/calebbenjin/image/upload/v1665089575/Screenshot_128_jhoeym.png"
          />
          <meta property="og:url" content="https://calebbenjin.vercel.app/" />
          <meta property="og:type" content="website" />

          {/*<!-- Twitter Meta Tags -->*/}
          <meta name="twitter:title" content="Caleb Benjamin Portfolio" />
          <meta name="twitter:description" content="I write code, think about great designs, founder of FrontendProf, Content Creator, Technical Writer. I am passionate about solving business problems through human-centered design." />
          <meta
            name="twitter:image"
            content="https://res.cloudinary.com/calebbenjin/image/upload/v1665089575/Screenshot_128_jhoeym.png"
          />
          <meta name="twitter:card" content="summary_large_image" />

          <meta
            property="og:image"
            content="https://res.cloudinary.com/calebbenjin/image/upload/v1665089575/Screenshot_128_jhoeym.png"
          ></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
  }
}