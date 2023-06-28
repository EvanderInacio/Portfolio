/* eslint-disable @next/next/no-img-element */ 
import Image from 'next/image'
import Link from 'next/link'
import educations from '../../data/educations'
import certificates from '../../data/certificates'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { Title } from '../../styles/styles'
import * as S from './styles'
import { GraduationCap } from 'phosphor-react'

export function Educations() {
  return (
    <S.ContainerEducation>
      <Title>
        Educação
        <span>
          <GraduationCap /> Education
        </span>
      </Title>
      <S.EducationContent>
        <S.EducationList>
          {educations &&
            educations.map(education => {
              return (
                <S.List key={education.id}>
                  <S.ListImage>
                    <img src={education.logo} alt={education.subTitle} />
                    <p>
                      Nível: <span>{education.level} </span>
                    </p>
                    <p>
                      Status: <span>{education.status}</span>
                    </p>
                  </S.ListImage>

                  <S.ListContent>
                    <h2>{education.title}</h2>
                    <h3>
                      <Link href={education.link} >
                        <a target="_blank">
                          {education.subTitle}
                        </a>
                      </Link>
                    </h3>
                    <p>{education.description}</p>
                  </S.ListContent>
                </S.List>
              )
            })}
        </S.EducationList>

        <S.EducationImage>
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
        </S.EducationImage>
      </S.EducationContent>
    </S.ContainerEducation>
  )
}
