import Image from 'next/image'
import { BsCodeSquare } from 'react-icons/bs'
import { Container, Title } from '../../styles/styles'
import cardSkills from './skills'
import { SkillsContainer, SkillsContent, Vector } from './styles'

interface Skills {
  title: string,
  color?: string,
  img?: string,
  id: number,
}

export function Skills() {
  return (
    <Container id='skills'>
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