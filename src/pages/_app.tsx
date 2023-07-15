import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import NextNprogress from 'nextjs-progressbar'
import { GlobalStyles } from '../styles/global'
import { defaultTheme } from '../styles/themes/default'
import { Toaster } from '../components/Toaster'

function useNormalScrollRoutes() {
  const router = useRouter()

  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      document.documentElement.classList.add('normal-scroll')
    })
    router.events.on('routeChangeComplete', () => {
      document.documentElement.classList.remove('normal-scroll')
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

function MyApp({ Component, pageProps }: AppProps) {
  useNormalScrollRoutes()

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ThemeProvider theme={defaultTheme}>
        <NextNprogress
          color={defaultTheme.firstColor}
          startPosition={0.3}
          stopDelayMs={300}
          height={3}
          showOnShallow
        />

        <Toaster />
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
