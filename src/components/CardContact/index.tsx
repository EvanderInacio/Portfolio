import Link from 'next/link'
import Image from 'next/image'
import { ButtonAlt, Section } from '../../styles/styles'
import { CardContactContainer, CardContactContent } from './styles'
import { TelegramLogo } from 'phosphor-react'

export function CardContact() {
  return (
    <Section>
      <CardContactContainer>
        <div className='ellipse'> 
        <Image
          width={330}
          height={410} 
          src="/vectors/circles.svg"
          alt="circles"
        />
        </div>
        <CardContactContent>
          <div className="description">
            <h2>Vamos conversar!</h2>
            <p>
              Se você tiver dúvidas ou apenas gostaria de dizer olá, entre em
              contato comigo. Farei o possível para entrar em contato com você!
            </p>
          </div>

          <div className="contact">
            <Image 
              width={480} 
              height={500} 
              src="/contact.svg" 
              alt="imagem de contato" 
            />
          </div>
        </CardContactContent>

        <Link href={'/contact'}>
          <ButtonAlt>
            Entre em contato{' '}
            <TelegramLogo
              style={{
                marginBottom: '-0.1rem',
                marginLeft: '0.2rem'
              }}
              size={16}
              weight="bold"
            />
          </ButtonAlt>
        </Link>
      </CardContactContainer>
    </Section>
  )
}
