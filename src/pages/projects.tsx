import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import projects from '../data/projects'
import { Header } from '../components/Header'
import { Links } from '../components/Links'
import { Footer } from '../components/Footer'
import { ScrollTop } from '../components/ScrollTop'
import * as S from '../styles/projects'
import * as T from '../styles/styles'
import { HiOutlineDesktopComputer } from 'react-icons/hi'
import { FaSearch } from 'react-icons/fa'
import { ArrowRight } from 'phosphor-react'

interface ProjectsProps {
  target: HTMLInputElement
}

export default function Projects() {
  const [query, setQuery] = useState('')

  const handleChange = (e: ProjectsProps) => {
    setQuery(e.target.value)
  }

  const projectFilter = projects.filter(project =>
    project.title.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <>
      <Head>
        <title>Projects | Evander Inácio </title>
        <meta
          name="description"
          content="Adoro codificar usando ferramentas como React, NextJS, Tailwind, Styled Components e muito mais! Aqui estão alguns dos meus projetos favoritos."
        />
        <meta property="og:title" content="Projects | Evander Inácio" />
        <meta
          property="og:description"
          content="Adoro codificar usando ferramentas como React, NextJS, Tailwind, Styled Components e muito mais! Aqui estão alguns dos meus projetos favoritos."
        />
      </Head>

      <Header />
      <Links />
      <ScrollTop />
      <T.Section>
        <T.Title>
          <p>../projects</p>
          Projetos
          <span>
            <HiOutlineDesktopComputer /> Projects
          </span>
        </T.Title>
        <T.Description>
          Aqui você poderá ver alguns dos trabalhos que eu desenvolvi. Navegue à
          vontade e explore os projetos para ver como foram criados, as
          tecnologias utilizadas e as funcionalidades implementadas.
        </T.Description>

        <S.ProjectsContainer>
          <S.ProjectsContent>
            <div className="search">
              <p>Pesquise pelo nome do projeto</p>
              
              <div className="input">
              <input
                type="text"
                placeholder="Pesquisar..."
                value={query}
                onChange={handleChange}
              />
              <FaSearch />
              </div>
            </div>

            {!projectFilter.length && (
              <h3 className="not-found">Projeto não encontrado 🙁</h3>
            )}

            {projectFilter.map(project => {
              return (
                <>
                  <div className="border" key={project.id} />
                  <S.ProjectsItem>
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
                        <a>
                          <T.ButtonAlternatives>
                            Ver projeto
                            <ArrowRight
                              style={{
                                marginBottom: '-0.1rem'
                              }}
                              weight="bold"
                              size={16}
                            />
                          </T.ButtonAlternatives>
                        </a>
                      </Link>
                    </div>
                  </S.ProjectsItem>
                </>
              )
            })}
          </S.ProjectsContent>
        </S.ProjectsContainer>
      </T.Section>
      <Footer />
    </>
  )
}
