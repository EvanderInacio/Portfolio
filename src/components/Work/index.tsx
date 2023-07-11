import Image from 'next/image'
import { useTheme } from 'styled-components'
import works from '../../data/work'
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { Container, Title } from '../../styles/styles'
import { WorkContainer, WorkContent } from './styles'
import { Briefcase } from 'phosphor-react'

export function Work() {
  const theme = useTheme()

  return (
    <Container>
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
                    background: theme.backgroundAlt,
                    borderBottom: `7px solid ${theme.backgroundAlt}`,
                    boxShadow: `0px 5px 0px 0px ${theme.firstColor}`
                  }}
                  contentArrowStyle={{
                    borderRight: `10px solid ${theme.backgroundAlt}`
                  }}
                  date={work.date}
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
                    background: theme.backgroundAlt
                  }}
                  key={work.id}
                >
                  <WorkContainer>
                    <WorkContent>
                      <h1>{work.title}</h1>
                      <h2>{work.subTitle}</h2>
                      <span>{work.office}</span>
                      <p>{work.description}</p>
                      <ul>
                        <h3>Techs:</h3>
                        <div className="tag">
                          {work.tags.map(tag => (
                            <Image
                              key={tag.name}
                              width={40}
                              height={40}
                              src={tag.icon}
                              alt={tag.name}
                            />
                          ))}
                        </div>
                      </ul>
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
