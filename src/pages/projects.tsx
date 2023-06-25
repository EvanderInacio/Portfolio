import { ArrowLeft, ArrowRight } from 'phosphor-react'
import {
  ProjectsContainer,
  ProjectsContent,
  ProjectsItem
} from '../styles/projects'
import projects from '../data/projects'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '../components/Header'
import { Links } from '../components/Links'
import { Description, Section, Title } from '../styles/styles'
import { Footer } from '../components/Footer'
import { HiOutlineDesktopComputer } from 'react-icons/hi'
import { ScrollTop } from '../components/ScrollTop'
import Head from 'next/head'

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects | Evander Inácio </title>
        <meta
          name="description"
          content="Adoro codificar usando ferramentas como React, NextJS, Tailwind, Styled Components e muito mais! Aqui estão alguns dos meus projetos favoritos."
        />
      </Head>

      <Header />
      <Links />
      <ScrollTop />
      <Section>
        <Title>
          <p>../projects</p>
          Projetos
          <span>
            <HiOutlineDesktopComputer /> Projects
          </span>
        </Title>
        <Description>
          Aqui você poderá ver alguns dos trabalhos que eu desenvolvi. Navegue à
          vontade e explore os projetos para ver como foram criados, as
          tecnologias utilizadas e as funcionalidades implementadas.
        </Description>

        <ProjectsContainer>
          <div className="laptop">
            <Image
              width={400}
              height={400}
              src="/vectors/laptop.svg"
              alt="laptop"
            />
          </div>
          <div className="pc">
            <Image
              width={400}
              height={400}
              src="/vectors/pc.svg"
              alt="monitor"
            />
          </div>

          <ProjectsContent>
            {projects.map(project => {
              return (
                <>
                  <div className="border" key={project.id} />
                  <ProjectsItem>
                    <div className="banner">
                      <Image
                        width={500}
                        height={300}
                        src={project.img}
                        alt={project.title}
                      />
                    </div>

                    <div>
                      <div className="title">
                        <Image
                          width={20}
                          height={20}
                          src={'/icon.svg'}
                          alt={project.title}
                        />
                        <h2>{project.title}</h2>
                      </div>
                      <div className="description">
                        <p>{project.description}</p>

                        <div className="tags">
                          {project.tags.map(tag => {
                            return <span key={tag.name}>{tag.name}</span>
                          })}
                        </div>
                      </div>
                      <Link href={`/project/${project.url}`}>
                        <button>
                          <a>
                            Ver projeto
                            <ArrowRight
                              style={{
                                marginBottom: '-0.1rem',
                                marginLeft: '0.5rem'
                              }}
                              weight="bold"
                              size={16}
                            />
                          </a>
                        </button>
                      </Link>
                    </div>
                  </ProjectsItem>
                </>
              )
            })}
          </ProjectsContent>
        </ProjectsContainer>
      </Section>
      <Footer />
    </>
  )
}
