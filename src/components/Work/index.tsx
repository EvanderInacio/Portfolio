import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component'

import 'react-vertical-timeline-component/style.min.css'
import { Container, Title } from '../../styles/styles'
import { Briefcase } from 'phosphor-react'
import works from './work'
import Image from 'next/image'
import { WorkContainer, WorkContent } from './styles'
import { BiBlock } from 'react-icons/bi'
import { useTheme } from 'styled-components'

export function Work() {
  const theme = useTheme()

  return (
    <Container id="experience">
      <Title>
        Experiência
        <span>
          <Briefcase /> Experience
        </span>
      </Title>

      <div>
        <VerticalTimeline lineColor={theme.firstColor}>
          {works &&
            works.map(work => {
              return (
                <VerticalTimelineElement
                  contentStyle={{
                    background: theme.border,
                    borderBottom: `7px solid ${theme.border}`,
                    boxShadow: `0px 5px 0px 0px ${theme.firstColor}`
                  }}
                  contentArrowStyle={{ borderRight: '10px solid  #0c0b0e' }}
                  icon={
                    <Image
                      style={{ borderRadius: '50%' }}
                      width={120}
                      height={120}
                      src={work.img}
                      alt={work.title}
                    />
                  }
                  iconStyle={{
                    boxShadow: `0px 0px 0px 3px ${theme.firstColor}`,
                    background: theme.border
                  }}
                  key={work.id}
                >
                  <WorkContainer>
                    <WorkContent>
                      <h1>{work.title}</h1>
                      <h2>{work.subTitle}</h2>
                      <p>{work.description}</p>
                      <ul>
                        <h3>Techs:</h3>
                        {work.tags.map(tag => (
                          <img key={tag.name} src={tag.icon} alt={tag.name} />
                        ))}
                      </ul>
                      <span>{work.date}</span>
                    </WorkContent>
                  </WorkContainer>
                </VerticalTimelineElement>
              )
            })}
        </VerticalTimeline>
      </div>
    </Container>
  )
}
