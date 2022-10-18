import { GetStaticProps } from 'next'
import router, { useRouter } from 'next/router'
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

// export const getStaticPaths = async () => {
//   const paths = projects.map((project) => ({
//     params: { id: project.id.toString()}
//   }))

//   return { paths, fallback: false }
// }


export default function Projeto({project}: ProjectProps) {
  return (
    <div>
      <h2>{project.description}</h2>
    </div>
  )
}


