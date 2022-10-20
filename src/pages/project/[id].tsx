/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import projects from '../../components/Projects/projects'

import {
  ProjectContainer,
  Banner,
  Description,
  PrintContainer,
  Print
} from '../../styles/project'

import { Title } from '../../styles/styles'

interface Project {
  icon: string
  imgUrl: string
  id: string
  title: string
  description: string
  type: string
  url: string
  tags: [string, string]
  print: [string, string]
}

interface ProjectProps {
  project: Project
}

export const getServerSideProps = async (context: any) => {
  const { id } = context.params

  const project = projects.map(project => ({
    id: project.id,
    link: project.url,
    imgUrl: project.img,
    icon: project.icon,
    title: project.title,
    type: project.type,
    description: project.description,
    tags: project.tags,
    print: project.print
  }))

  const idProject = project.find(project => project.link === id)

  return {
    props: {
      project: idProject || null
    }
  }
}

export default function Projeto({ project }: ProjectProps) {
  return (
    <>
      <Header />
      <ProjectContainer>
        <Banner>
          <img className="bannerUrl" src={project.imgUrl} alt={project.title} />
          <div className="bannerContent">
            <img src={project.icon} alt={project.title} />
            <div>
              <h1>{project.title}</h1>
              <p>{project.type}</p>
            </div>
          </div>
        </Banner>

        <Description>
          <div className="description">
            <Title>Descrição</Title>
            <p>{project.description}</p>
          </div>
          <div className="tags">
            <h4>Tecnologias</h4>
            {project.tags &&
              project.tags.map((tag: string | any) => {
                return (
                  <div className="tag-content" key={tag.id}>
                    <img src={tag.icon} alt={tag.name} />
                    <span>{tag.name}</span>
                  </div>
                )
              })}
          </div>
        </Description>

        <PrintContainer>
          <Title>Print</Title>
          <Print>
            <div className="print-content">
              {project.print &&
                project.print.map((print: string | any) => {
                  return (
                    <div key={print.id}>
                      <h4>{print.name}</h4>
                      <img src={print.img} alt={print.name} />
                    </div>
                  )
                })}
            </div>
          </Print>
        </PrintContainer>
      </ProjectContainer>

      <Footer />
    </>
  )
}
