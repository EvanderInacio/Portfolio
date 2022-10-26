/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import { PaperPlaneRight } from 'phosphor-react'
import React from 'react'
import Home from '../../../public/projects/portfolio/home.webp'

import { ButtonPrimary, Container } from '../../styles/styles'
import { Content, ImgHome, HomeText } from './styles'

export function HomeHero() {
  return (
    <Container>
      <Content>
      <HomeText>
        <div className="cubo-animation"></div>
        <h3>Olá, eu sou</h3>
        <h1>Evander Inácio</h1>
        <h2>Desenvolvedor Front-End.</h2>

        <ButtonPrimary>
          <b>Conheça meu portfólio</b> <PaperPlaneRight weight="bold" />
        </ButtonPrimary>
      </HomeText>
      <ImgHome>
        <img src='/projects/portfolio/home.webp' alt="Home" />
      </ImgHome>
    </Content>
    </Container>
  )
}
