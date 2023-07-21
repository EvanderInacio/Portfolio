import Image from 'next/image'
import { useTheme } from 'styled-components'
import experiences from '../../data/experiences'
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { Container, Title } from '../../styles/styles'
import { ExperienceContainer, ExperienceContent } from './styles'
import { Briefcase } from 'phosphor-react'

export function Experience() {
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
          {experiences &&
            experiences.map(experience => {
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
                  date={experience.date}
                  icon={
                    <Image
                      style={{ borderRadius: '50%' }}
                      width={120}
                      height={120}
                      src={experience.img}
                      alt={experience.title}
                    />
                  }
                  iconStyle={{
                    boxShadow: `0px 0px 0px 3px ${theme.firstColor}`,
                    background: theme.backgroundAlt
                  }}
                  key={experience.id}
                >
                  <ExperienceContainer>
                    <ExperienceContent>
                      <h1>{experience.title}</h1>
                      <h2>{experience.subTitle}</h2>
                      <span>{experience.office}</span>
                      <p>{experience.description}</p>
                      <ul>
                        <h3>Techs:</h3>
                        <div className="tag">
                          {experience.tags.map(tag => (
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
                    </ExperienceContent>
                  </ExperienceContainer>
                </VerticalTimelineElement>
              )
            })}
        </VerticalTimeline>
      </div>
    </Container>
  )
}
