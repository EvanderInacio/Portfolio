import Head from 'next/head'
import { About } from '../components/About'
import { Header } from '../components/Header'
import { HomeHero } from '../components/Home'
import { Links } from '../components/Links'
import { Projects } from '../components/Projects'
import { Skills } from '../components/Skills'

import { Section } from '../styles/styles'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <meta name="author" content="Evander Inácio" />
        <meta
          name="description"
          content="Meu nome é Evander Inácio sou um Desenvolvedor Front-end. Confira meus projetos construídos."
        />

        <link rel="canonical" href="https://evander.vercel.app" />
        <meta
          name="keywords"
          content="sites, web, desenvolvimento, programador, developer, frontend, front-end, website, portfolio, evander inacio, evander"
        />
        <meta name="theme-color" content="#00d9ff;" />
        <meta name="copyright" content="evanderinacio 2022" />
        <meta
          property="og:title"
          content="Evander Inácio - Desenvolvedor Front-End"
        />
        <meta property="og:description" content="Portfolio - Front-end Web Developer" />

        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://evander.vercel.app" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />

        <title>Evander Inácio | Desenvolvedor Front-End </title>
      </Head>

      <Header />
      <Section>
        <Links />
        <HomeHero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </Section>
      <Footer />
    </>
  )
}
