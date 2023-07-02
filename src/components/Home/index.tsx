/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import Typewriter from 'typewriter-effect'
import { ButtonPrimary, Container } from '../../styles/styles'
import { Content, ImgHome, HomeText } from './styles'
import { FiArrowRight } from 'react-icons/fi'

export function HomeHero() {
  return (
    <Container>
      <Content>
        <HomeText>
          <p>👋🏻 Olá, o meu nome é</p>
          <h1>
            Evander Inácio
            <span>
              <img
                className="animation"
                src="/vectors/triangle.svg"
                alt="Imagem de um triangulo"
              />
            </span>
          </h1>
          <h2>
            <Typewriter
              options={{
                strings: ['Desenvolvedor Front-End'],
                autoStart: true,
                loop: true,
                skipAddStyles: true
              }}
            />
          </h2>

          <div className='button'>
            <ButtonPrimary>
              <Link href={'#projects'}>
                <a>
                  <b>Conheça meu portfólio </b>
                  <FiArrowRight style={{ marginBottom: '-0.3rem' }} size={20} />
                </a>
              </Link>
            </ButtonPrimary>
          </div>
        </HomeText>
        <ImgHome>
          <img className="code" src="/vectors/dino.svg" alt="dinossauro" />
          <img className="home-img" src="/home.png" alt="Imagem da Home" />
        </ImgHome>
      </Content>
    </Container>
  )
}
