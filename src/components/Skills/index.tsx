/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import cardSkills from '../../data/skills'
import { Container, Title } from '../../styles/styles'
import { SkillsContainer, SkillsContent, Vector } from './styles'
import { BsCodeSquare } from 'react-icons/bs'

interface Skills {
  title: string,
  color?: string,
  img?: string,
  id: number,
}

export function Skills() {
  return (
    <Container>
      <Vector>
        <img className='js' src="/vectors/js.svg" alt="" />
        <img className='html' src="/vectors/html.svg" alt="" />
      </Vector>
      <Title>
        Habilidades
        <span><BsCodeSquare /> Skills</span>
      </Title>
      <SkillsContainer>
      {cardSkills.map(skill => {
        return (
          <SkillsContent color={skill.color} key={skill.id}>
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <Image
              width={60}
              height={60} 
              src={skill.img} 
              alt={skill.title}
              />
              <h4>{skill.title}</h4>
            <span className='border'></span>
          </SkillsContent>
        )
      })}
    </SkillsContainer>
    </Container>
  )
}