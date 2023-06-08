import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles }from '../styles/global';
import { defaultTheme } from '../styles/themes/default'
import { Toaster } from '../components/Toaster';

function useNormalScrollRoutes() {
  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      document.documentElement.classList.add('normal-scroll');
    });
    router.events.on('routeChangeComplete', () => {
      document.documentElement.classList.remove('normal-scroll');
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

function MyApp({ Component, pageProps }: AppProps) {
  useNormalScrollRoutes();

  return (
    <ThemeProvider theme={defaultTheme}>
        <Toaster />
        <GlobalStyles />
        <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp
