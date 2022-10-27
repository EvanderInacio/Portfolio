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
