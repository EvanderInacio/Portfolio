import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <meta charSet="utf-8" />
          <meta name="author" content="Evander Inácio" />
          <meta
            name="description"
            content="Desenvolvedor Front-end do Brasil. Especializado em criação de interfaces e funcionalidades para aplicativos da web usando React.js e Next.js."
          />
          <meta itemProp="name" content="Evander Inácio - Desenvolvedor Front-End" />
          <meta
            itemProp="description"
            content="Desenvolvedor Front-end do Brasil. Especializado em criação de interfaces e funcionalidades para aplicativos da web usando React.js e Next.js."
          />
          <meta 
            itemProp="image" 
            content="https://raw.githubusercontent.com/EvanderInacio/Portfolio/main/public/ogimage.png" 
          />
          <meta
            name="keywords"
            content="Evander, Evander Inacio, desenvolvedor, website, programador, front-end, personal website, developer, portfolio, sites, web, são paulo, sp, JavaScript, TypeScript, ReactJS, NextJS, software, aplicações, Freelancer, portfolio developer, e-commerce, Evander portfolio"
          />

          <meta name="theme-color" content="#00d9ff" />
          <meta name="copyright" content="Evander Inácio 2023" />
          <meta http-equiv="content-language" content="pt-br" />
          <meta name="robots" content="index, follow" />
          <meta http-equiv="cache-control" content="no-cache" />
          <meta http-equiv="pragma" content="no-cache" />
          <meta name="language" content="pt-BR" />
          <meta name="rating" content="general" />
          <link rel="canonical" href="https://www.evander.com.br/" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap"
            rel="stylesheet"
          />

          <meta property="og:url" content="https://www.evander.com.br/" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Evander Inácio" />
          <meta property="og:title" content="Evander Inácio - Desenvolvedor Front-End" />
          <meta
            property="og:description"
            content="Desenvolvedor Front-end do Brasil. Especializado em criação de interfaces e funcionalidades para aplicativos da web usando React.js e Next.js."
          />
          <meta 
            property="og:image" 
            content="https://raw.githubusercontent.com/EvanderInacio/Portfolio/main/public/ogimage.png" 
          />

          <meta name="twitter:title" content="Evander Inácio - Desenvolvedor Front-End" />
          <meta
            name="twitter:description"
            content="Desenvolvedor Front-end do Brasil. Especializado em criação de interfaces e funcionalidades para aplicativos da web usando React.js e Next.js."
          />
          <meta 
            name="twitter:image" 
            content="https://raw.githubusercontent.com/EvanderInacio/Portfolio/main/public/ogimage.png" 
          />

          <link rel="icon" href="/icon.svg" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
