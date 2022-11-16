import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import GoogleTagManager, { GoogleTagManagerId } from '@/components/GoogleTagManager';
import { googleTagManagerId } from '@/libs/gtm';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class' defaultTheme='light'>
      <GoogleTagManager googleTagManagerId={googleTagManagerId as GoogleTagManagerId} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
