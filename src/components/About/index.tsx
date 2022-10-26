/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import { DownloadSimple, User } from 'phosphor-react'
import Evander from '../../assets/Evander.webp'
import { Container, Title } from '../../styles/styles'
import { ButtonPrimary } from '../../styles/styles'
import { AboutContainer } from './styles'

export function About() {
  return (
    <Container id="about">
      <Title>
        Sobre
        <span>
          <User /> About
        </span>
      </Title>
      <AboutContainer>
        <div className="AboutImg">
          <img
            className="AboutImg"
            src="/Evander.webp"
            alt="Imagem de perfil Evander"
          />
        </div>

        <div className="aboutContent">
          <p>
            Meu nome é Evander Inácio, tenho 25 anos e moro em Mogi das Cruzes -
            SP. Sou Desenvolvedor Front End, formado em Análise e
            desenvolvimento de sistemas. Atualmente estou estudando e
            desenvolvendo projetos web mais precisamente no Front-end, de modo a
            ampliar meus conhecimentos e assim aprimorar ainda mais as
            habilidades que possuo.
          </p>
          <ButtonPrimary>
            <b>Download CV</b> <DownloadSimple weight="bold" />
          </ButtonPrimary>
        </div>
      </AboutContainer>
    </Container>
  )
}
