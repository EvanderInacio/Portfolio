/* eslint-disable @next/next/no-img-element */
import { WorkContainer, WorkContent } from './styles'
import works from './works'
import { BiBlock } from 'react-icons/bi'

export function Works() {
  return (
    <>
      {works.map(work => (
        <WorkContainer key={work.id}>
          <div className='img-content'>
            <img src={work.img} alt={work.title} />
          </div>

          <WorkContent>
            <h1>{work.title}</h1>
            <span>{work.subTitle}</span>
            <p>{work.description}</p>
            <ul>
              <h3>Ferramentas usadas</h3>
              {work.tags.map(tag => (
                <img key={tag.name} src={tag.icon} alt={tag.name} />
              ))}
            </ul>
            <button>{work.github} <span><BiBlock /></span></button>
          </WorkContent>
        </WorkContainer>
      ))}
    </>
  )
}