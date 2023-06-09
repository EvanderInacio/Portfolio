/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import Typewriter from 'typewriter-effect';

import { ButtonPrimary, Container } from '../../styles/styles'
import { Content, ImgHome, HomeText } from './styles'
import { FiArrowRight } from 'react-icons/fi';

export function HomeHero() {
  return (
    <Container>
      <Content>
        <HomeText>
          <div className="cubo-animation"></div>
          <h3>Olá, eu sou</h3>
          <h1>Evander Inácio</h1>
          <h2>
            <Typewriter
              options={{
                strings: ['Front-End Developer.' , 'Desenvolvedor Front-End.'],
                autoStart: true,
                loop: true,
                skipAddStyles: true,
              }} 
            />
          </h2>

          <ButtonPrimary>
            <Link href={'#projects'}>
              <a>
                <b>Conheça meu portfólio </b>
                <FiArrowRight
                  style={{ marginBottom: '-0.3rem' }}
                  size={20}
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
