/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React from 'react'
import { Header } from '../../components/Header'
import projects from '../../components/Projects/projects'

import { ProjectContainer, Banner } from '../../styles/project'

interface Project {
  icon: string 
  imgUrl: string
  id: string
  title: string
  description: string
  type: string
  url: string
  tags: [string, string]
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
          <img className='bannerUrl' src={project.imgUrl} alt={project.title} />
          <div className='bannerContent'>
            <img src={project.icon} alt={project.title} />
            <div>
              <h1>{project.title}</h1>
              <p>{project.type}</p>
            </div>
          </div>
        </Banner>
        
        <div>
          <p>{project.description}</p>
           <div>
            {
              
              project.tags && project.tags.map((tag: any) => {
                return (
                  <>
                    <span>{tag.name}</span>
                    <img style={{width: '2rem'}} src={tag.icon} alt={tag.name} />
                  </>
                )
              })
            }
           </div>
        </div>
        
      </ProjectContainer>
    </>
  )
}
