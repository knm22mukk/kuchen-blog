import type { DocumentContext, DocumentInitialProps } from 'next/document';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }
  render(): JSX.Element {
    return (
      <Html lang='ja'>
        <Head>
          <meta name='application-name' content='Kuchen Blog' />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-status-bar-style' content='#2563eb' />
          <meta name='apple-mobile-web-app-title' content='Kuchen Blog' />
          <meta name='format-detection' content='telephone=no' />
          <meta name='mobile-web-app-capable' content='yes' />

          <link rel='shortcut icon' href='/icons/favicon.ico' />

          <link rel='manifest' href='/manifest.json' />
          <link rel='apple-touch-icon' href='/icons/icon-192x192.png' />
          <meta name='theme-color' content='#2563eb' />
        </Head>
        <body className='text-gray-700 dark:bg-gray-800 dark:text-white'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
