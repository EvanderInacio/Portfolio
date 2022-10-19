/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import router, { useRouter } from 'next/router'
import projects from './projects'
import { ProjectsContainer, ProjectsContent } from './styled'
import { Title } from '../../styles/styles';

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
  const router = useRouter()
  const id = router.query.id as string

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
    
    </>
  )
}

// export const getStaticProps: GetStaticProps = () => {
  
//   const project = projects.map(project => ({
//     id: project.id,
//     link: project.url,
//     thumbnail: project.img,
//     title: project.title,
//     description: project.description,
//   }))

//   return {
//     props: {
//       project
//     },
//     revalidate: 86400
//   }
// }



// export function Projects() {
//   return (
//     <div>
//       {
//         projects.map((project) => {
//           return (
//             <div key={project.id}>
//               <h3>{project.title}</h3>
//               <p>{project.description}</p>
//                <div>
//                 {
//                   project.tags.map((tag) => {
//                     return (
//                       <span key={tag.name}>
//                         {tag.name} <img src={tag.icon} alt={tag.name} />
//                       </span>
//                     )
//                   })
//                 }
//                </div>
//             </div>
//           )
//         })
//       }
//     </div>
//   )
// }
