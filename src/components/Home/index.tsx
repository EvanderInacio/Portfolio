/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { PaperPlaneRight } from 'phosphor-react'
import React from 'react'

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
            <Link href={'#projects'}>
              <a>
                <b>Conheça meu portfólio </b>
                <PaperPlaneRight
                  style={{ marginBottom: '-0.3rem' }}
                  size={22}
                  weight="bold"
                />
              </a>
            </Link>
          </ButtonPrimary>
        </HomeText>
        <ImgHome>
          <img src="/projects/portfolio/home.webp" alt="Home" />
        </ImgHome>
      </Content>
    </Container>
  )
}
