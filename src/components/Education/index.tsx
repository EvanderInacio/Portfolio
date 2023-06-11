/* eslint-disable @next/next/no-img-element */ 
import Image from 'next/image'
import Link from 'next/link'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

import educations from './educations'
import certificates from './certificates'
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

export function Education() {
  return (
    <ContainerEducation>
      <Title>
        Educação
        <span>
          <GraduationCap /> Education
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
                      Status: <span>{education.status}</span>
                    </p>
                  </ListImage>

                  <ListContent>
                    <h2>{education.title}</h2>
                    <h3>
                      <Link href={education.link} >
                        <a target="_blank">
                          {education.subTitle}
                        </a>
                      </Link>
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
            alt="menino no computador"
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
                  <Image
                    width={500}
                    height={300}
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
      <img 
        className='vector-circle' 
        src="/vectors/circle-spin.svg" 
        alt="circulo animado" 
      />
    </ContainerEducation>
  )
}
