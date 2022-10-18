import React from 'react'
import projects from '../../components/Projects/projects'

interface Project {
  id: string
  title: string
  description: string
  url: string
  thumbnail: string
}

interface ProjectProps {
  project: Project
}

export const getServerSideProps = async (context: any) => {
  const { id } = context.params;

  const project = projects.map((project) => ({
    id: project.id,
    link: project.url,
    thumbnail: project.img,
    title: project.title,
    description: project.description,
  }));

  const idProject = project.find((project) => project.link === id);

  return {
    props: {
      project: idProject || null,
    },
  };
};


export default function Projeto({project}: ProjectProps) {

  console.log(projects)
  return (
    <div>
     <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <a href={project.url}>Link</a>
    </div>
    </div>
  )
}


