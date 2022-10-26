// import { ProjectContainer } from "../../styles/project";

import Link from 'next/link'
import {
  At,
  ChatCircleText,
  ChatText,
  ClipboardText,
  Envelope,
  TelegramLogo,
  User
} from 'phosphor-react'
import { ButtonSecondary, Container, Title } from '../../styles/styles'
import { ContainerContact, ContactContent, Form } from './styles'

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
            <h4>WhatsApp</h4>
            <Link href="https://api.whatsapp.com/send?phone=5511995085916">
              <a target="_blank">
                <span>+55 11 99508-5916</span>
              </a>
            </Link>
          </div>

          <div className="contact-content">
            <h4>Email</h4>
            <Link href="mailto:evander.20112@hotmail.com">
              <a target="_blank">
                <span>evander.20112@hotmail.com</span>
              </a>
            </Link>
          </div>

          <div className="contact-content">
            <h4>Localização</h4>
            <span>Mogi das Cruzes - SP</span>
          </div>
        </ContactContent>
        <Form
          action="https://formsubmit.co/evander.20112@hotmail.com"
          method="POST"
        >
          <input type="hidden" name="_template" value="box" />
          <div className="input-group">
            <input
              placeholder=" "
              required
              type="text"
              name="name"
              className="input"
            />
            <label className="user-label">
              Nome{' '}
              <span>
                <User size={15} weight="bold" />
              </span>
            </label>
          </div>
          <div className="input-group">
            <input
              placeholder=" "
              required
              type="email"
              name="email"
              className="input"
            />
            <label className="user-label">
              Email{' '}
              <span>
                <At size={15} weight="bold" />
              </span>
            </label>
          </div>
          <div className="input-group">
            <input
              placeholder=" "
              required
              type="text"
              name="subject"
              className="input"
            />
            <label className="user-label">
              Assunto{' '}
              <span>
                <ChatText size={15} weight="bold" />
              </span>
            </label>
          </div>
          <div className="input-group">
            <textarea
              placeholder=" "
              required
              name="description"
              className="input"
              id=""
            ></textarea>
            <label className="user-label">
              Mensagem{' '}
              <span>
                <ChatCircleText size={15} weight="bold" />
              </span>
            </label>
          </div>

          <ButtonSecondary type="submit">
            Enviar <TelegramLogo size={15} weight="bold" />{' '}
          </ButtonSecondary>
        </Form>
      </ContainerContact>
    </Container>
  )
}
