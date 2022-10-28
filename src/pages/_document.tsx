import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <meta charSet="utf-8" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap"
            rel="stylesheet"
          />

          <meta name="author" content="Evander Inácio" />
          <meta
            name="description"
            content="Meu nome é Evander Inácio sou um Desenvolvedor Front-end. Confira meus projetos construídos."
          />

          <meta httpEquiv="content-language" content="pt-br" />
          <link rel="canonical" href="https://evander.vercel.app" />
          <meta
            name="keywords"
            content="sites, web, desenvolvimento, programador, programação, developer, frontend, front-end, website, portfolio, evander inacio, evander"
          />
          <meta name="theme-color" content="#00d9ff" />
          <meta name="copyright" content="evander 2022" />
          <meta
            property="og:title"
            content="Evander Inácio - Desenvolvedor Front-End"
          />
          <meta
            property="og:description"
            content="Portfolio - Front-End Web Developer"
          />

          <meta property="og:image" content="/ogimage.png" />
          <meta property="og:image:secure_url" content="/ogimage.png" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://evander.vercel.app" />
          <meta name="twitter:image" content="/ogimage.png" />
          <meta name="twitter:image:src" content="/ogimage.png" />
          <meta property="og:site_name" content="Evander Inácio - Portfolio" />
          <meta name="rating" content="general" />
          <meta property="og:locale" content="pt_BR" />

          <link rel="icon" href='/icon.svg'/>
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
