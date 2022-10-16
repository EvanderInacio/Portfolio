import Head from 'next/head'
import { About } from '../components/About'
import { Header } from '../components/Header'
import { HomeHero } from '../components/Home'
import { Links } from '../components/Links'
import { Skills } from '../components/Skills'

import { Section } from '../styles/styles'

export default function Home() {
  return (
    <>
      <Head>
        <title>Evander Inácio | Desenvolvedor Front-End </title>

        <meta name="description" content=" personal website and portfolio" />
      </Head>

      <Header />
      <Section>
        <Links />
        <HomeHero />
        <About />
        <Skills />
      </Section>
    </>
  )
}
