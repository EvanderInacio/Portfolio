/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import projects from './projects'
import { ProjectsContainer, ProjectsContent } from './styles'
import { Title } from '../../styles/styles';
import { AllProjects } from './Github';

interface Projects {
  slug: string
  url: string
  title: string
  type: string
  img: string
  description: string
  tags?: [name: string, icon: string]
}

export function Projects() {
  return (
    <>
    <Title>Projetos</Title>
      <ProjectsContainer>
      {projects.map(project => {
        return (
          <Link href={`/project/${project.url}`} key={project.id}>
            <a>
              <ProjectsContent >
                <img src={project.img} alt={project.title} />
                <div className='title'>
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
    </>
  )
}
