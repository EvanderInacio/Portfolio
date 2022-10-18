/* eslint-disable react-hooks/rules-of-hooks */
import Link from 'next/link'
import { GetStaticPaths, GetStaticProps } from 'next';
import router, { useRouter } from 'next/router'
import projects from './projects'
import { ProjectsContent } from './styled'

interface Projects {
  slug: string
  url: string
  title: string
  img: string
  description: string
  tags?: [name: string, icon: string]
}

export function Projects() {
  const router = useRouter()
  const id = router.query.id as string

  return (
    <div>
      {projects.map(project => {
        return (
          <Link href={`/project/${project.url}`} key={project.title}>
            <a>
              <ProjectsContent img={project.img}>
                <h3>{project.title}</h3>
              </ProjectsContent>
            </a>
          </Link>
        )
      })}
    </div>
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
