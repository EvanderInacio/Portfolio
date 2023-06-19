/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import { ButtonAlt, Container, Title } from '../../styles/styles'
import { AboutContainer } from './styles'
import { BiUserPin } from 'react-icons/bi'
import Link from 'next/link'
import { ArrowRight } from 'phosphor-react'

export function About() {
  return (
    <Container>
      <AboutContainer>
        <div className="AboutImg">
          <Image
            width={300}
            height={250}
            className="AboutImg"
            src="/Evander.webp"
            alt="Imagem de perfil Evander"
          />
        </div>

        <div className="aboutContent">
          <div className="aboutDescription">
            <p>
              Meu nome é Evander Inácio, sou um desenvolvedor front-end React do
              Brasil, apaixonado por projetar e codificar. Minha especialidade é
              a criação de interfaces e funcionalidades para aplicativos da web
              usando React.js e Next.js.
            </p>
          </div>

          <Link href={'/about'}>
            <a>
              <ButtonAlt>
                Ver mais
                <ArrowRight
                  style={{
                    marginBottom: '-0.1rem',
                    marginLeft: '0.2rem'
                  }}
                  weight="bold"
                  size={16}
                />
              </ButtonAlt>
            </a>
          </Link>
        </div>
      </AboutContainer>
    </Container>
  )
}
