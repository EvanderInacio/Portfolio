/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import projects from './projects'
import { ProjectsContainer, ProjectsContent } from './styles'
import { Container, Title } from '../../styles/styles'
import { AllProjects } from './Github'
import { Briefcase } from 'phosphor-react'
import { HiOutlineDesktopComputer } from 'react-icons/hi'
import { Works } from './Works'

interface Projects {
  slug: string
  url: string
  title: string
  type: string
  img: string
}

export function Projects() {
  return (
    <Container id="projects">
      <Title>
        Projetos
        {/* <span><Briefcase /> Projects</span> */}
        <span><HiOutlineDesktopComputer /> Projects</span>
      </Title>
      <Works />
      <ProjectsContainer>
        {projects.map(project => {
          return (
            <Link href={`/project/${project.url}`} key={project.id}>
              <a>
                <ProjectsContent>
                  <img src={project.img} alt={project.title} />
                  <div className="title">
                    <h2>{project.title}</h2>
                    <span>{project.type}</span>
                  </div>
                </ProjectsContent>
              </a>
            </Link>
          )
        })}
      </ProjectsContainer>
      <AllProjects />
    </Container>
  )
}
