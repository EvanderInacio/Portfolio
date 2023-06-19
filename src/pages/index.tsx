import Head from 'next/head'
import { About } from '../components/CardAbout'
import { Header } from '../components/Header'
import { HomeHero } from '../components/Home'
import { Links } from '../components/Links'
import { Projects } from '../components/Projects'
import { CV } from '../components/CV'
import { Skills } from '../components/Skills'
import { ScrollTop } from '../components/ScrollTop'
import { Section } from '../styles/styles'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'
import { Work } from '../components/Work'

export default function Home() {
  return (
    <>
      <Head>
        <title>Evander Inácio | Desenvolvedor Front-End </title>
      </Head>

      <Header />
      <Section>
        <Links />
        <ScrollTop />
        <HomeHero />
        <About />
        <Skills />
        <Work exp={''} />
        <Projects />
        <Contact />
      </Section>
      <Footer />
    </>
  )
}
