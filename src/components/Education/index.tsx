import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

import { GraduationCap } from 'phosphor-react'
import { Title } from '../../styles/styles'
import {
  ContainerEducation,
  EducationContent,
  EducationList,
  EducationImage,
  List,
  ListImage,
  ListContent
} from './styles'
import educations from './educations'
import certificates from './certificates'

export function Education() {
  return (
    <ContainerEducation>
      <Title>
        Educação
        <span>
          <GraduationCap /> Educação
        </span>
      </Title>
      <EducationContent>
        <EducationList>
          {educations &&
            educations.map(education => {
              return (
                <List key={education.id}>
                  <ListImage>
                    <img src={education.logo} alt={education.subTitle} />
                    <span>Nível: {education.level}</span>
                    <p>
                      Status: <article>{education.status}</article>
                    </p>
                  </ListImage>

                  <ListContent>
                    <h2>{education.title}</h2>
                    <h3>
                      <a href={education.link} target="_blank">
                        {education.subTitle}
                      </a>
                    </h3>
                    <p>{education.description}</p>
                  </ListContent>
                </List>
              )
            })}
        </EducationList>

        <EducationImage>
          <img
            className="education-logo"
            src="/education/education.svg"
            alt=""
          />

          <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            interval={1500}
          >
            {certificates &&
              certificates.map(certificate => {
                return (
                  <img
                    className="carousel"
                    key={certificate.id}
                    src={certificate.image}
                    alt={certificate.name}
                  />
                )
              })}
          </Carousel>
        </EducationImage>
      </EducationContent>
    </ContainerEducation>
  )
}
