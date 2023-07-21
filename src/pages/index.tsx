import Head from 'next/head'
import { About } from '../components/CardAbout'
import { Header } from '../components/Header'
import { HomeHero } from '../components/Home'
import { Links } from '../components/Links'
import { Projects } from '../components/Projects'
import { Skills } from '../components/Skills'
import { ScrollTop } from '../components/ScrollTop'
import { Footer } from '../components/Footer'
import { Experience } from '../components/Experience'
import { CardContact } from '../components/CardContact'
import { Section } from '../styles/styles'
import { Work } from '../components/Work'

export default function Home() {
  return (
    <>
      <Head>
        <title>Evander Inácio - Desenvolvedor Front-End</title>
      </Head>

      <Header />
      <Section>
        <Links />
        <ScrollTop />
        <HomeHero />
        <About />
        <Skills />
        <Experience />
        <Work />
        <Projects />
        <CardContact />
      </Section>
      <Footer />
    </>
  )
}
