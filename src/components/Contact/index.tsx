/* eslint-disable-next-line import/no-anonymous-default-export */
import Link from 'next/link'
import { Envelope, TelegramLogo } from 'phosphor-react'
import { Container, Title } from '../../styles/styles'
import { ContainerContact, ContactContent } from './styles'
import { BsWhatsapp } from 'react-icons/bs'
import { Form } from './Form'

export function Contact() {
  return (
    <Container id="contact">
      <ContainerContact>        
          <Title>
            Contato
            <span><Envelope /> Contact</span>
          </Title>

        <ContactContent>
          <div className="contact-content">
            <h4><BsWhatsapp size={22}  color="#00fffb" /> WhatsApp </h4>
            <Link href="https://api.whatsapp.com/send?phone=5511995085916">
              <a target="_blank">
                <span>+55 11 99508-5916</span>
              </a>
            </Link>
          </div>

          <div className="contact-content">
            <h4> <TelegramLogo size={22} color="#00fffb" /> Email </h4>
            <Link href="mailto:evander.20112@hotmail.com">
              <a target="_blank">
                <span>evander.20112@hotmail.com</span>
              </a>
            </Link>
          </div>
        </ContactContent>

        <Form />
      </ContainerContact>
    </Container>
  )
}
