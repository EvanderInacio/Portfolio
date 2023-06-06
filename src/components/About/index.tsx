/* eslint-disable @next/next/no-img-element */
import { FiDownload } from 'react-icons/fi'
import { Container, Title } from '../../styles/styles'
import { ButtonPrimary } from '../../styles/styles'
import { AboutContainer } from './styles'
import { DownloadSimple } from 'phosphor-react'
import { BiUserPin } from 'react-icons/bi'

export function About() {
  return (
    <Container id="about">
      <Title>
        Sobre
        <span>
          <BiUserPin /> About
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
          <div className="aboutDescription">
            <p>
              Sou um desenvolvedor Front-End que vive em Mogi das Cruzes-SP, sou
              formado em Análise e desenvolvimento de sistemas.
            </p>
            <p>
              Meu interesse e primeiro contato com desenvolvimento web começou
              em 2022, com a criação de um site feito em Html, Css e JavaScript.
            </p>
            <p>
              Atualmente estou estudando e desenvolvendo projetos web, de modo a
              ampliar meus conhecimentos e assim aprimorar ainda mais as
              habilidades que possuo.
            </p>
          </div>
          <a href="/pdf/Evander-CV.pdf" download>
            <ButtonPrimary>
              <b>Download CV</b> <FiDownload size={20}  />
            </ButtonPrimary>
          </a>
        </div>
      </AboutContainer>
    </Container>
  )
}
