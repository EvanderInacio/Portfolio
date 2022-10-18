import Head from 'next/head'
import { About } from '../components/About'
import { Header } from '../components/Header'
import { HomeHero } from '../components/Home'
import { Links } from '../components/Links'
import { Projects } from '../components/Projects'
import { Skills } from '../components/Skills'

import { Section } from '../styles/styles'
import Link from 'next/link'


interface Projects {
  slug: string
  url: string
  title: string
  img: string
  description: string
  tags?: [name: string, icon: string]
}


interface ProjectsProps {
  projects: Projects[]
}

export default function Home({ projects }: ProjectsProps)  {
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
        <Projects />

      
      </Section>
    </>
  )
}
