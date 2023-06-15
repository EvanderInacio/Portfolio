
import { ArrowLeft } from 'phosphor-react'
import {
  ProjectsContainer,
  ProjectsTitle,
  ProjectsContent,
  ProjectsItem
} from '../styles/projects'
import projects from '../data/projects'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '../components/Header'
import { Links } from '../components/Links'
import { Section, Title } from '../styles/styles'
import { Footer } from '../components/Footer'
import { HiOutlineDesktopComputer } from 'react-icons/hi'


export default function Projects() {
  return (
    <>
      <Header />
      <Links />
      <Section>
      <Title>
        <p>../projects</p>
        Projetos
        <span>
          <HiOutlineDesktopComputer /> Projects
        </span>
      </Title>
        <ProjectsContainer>
          {/* <ProjectsTitle>
            <h3>../Projetos</h3>
            <h1>Meus Projetos</h1>
            <p>
              Aqui você poderá ver alguns dos trabalhos que eu desenvolvi. Navegue à
              vontade e explore os projetos para ver como foram criados, as
              tecnologias utilizadas e as funcionalidades implementadas.
            </p>
            <Link href={'/'}>
              <a>
                <button>
                  <ArrowLeft
                    style={{ marginBottom: '-0.1rem' }}
                    weight="bold"
                    size={16}
                  />
                  Voltar para home
                </button>
              </a>
            </Link>
          </ProjectsTitle> */}

          <ProjectsContent>
            {projects.map(project => {
              return (
                <ProjectsItem key={project.id}>
                  <Link href={`/project/${project.url}`} key={project.id}>
                    <a>
                      <Image
                        className="banner"
                        width={380}
                        height={210}
                        src={project.img}
                        alt={project.title}
                        unoptimized
                      />
                      <div className="description">
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <div className="tags">
                          {project.tags.map(tag => {
                            return (
                              <Image
                                width={35}
                                height={35}
                                key={tag.name}
                                src={tag.icon}
                                alt={tag.name}
                              />
                            )
                          })}
                        </div>
                      </div>
                    </a>
                  </Link>
                </ProjectsItem>
              )
            })}
          </ProjectsContent>
        </ProjectsContainer>
      </Section>
      <Footer />
    </>
  )
}
