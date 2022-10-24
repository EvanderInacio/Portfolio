// import { ProjectContainer } from "../../styles/project";

import { At, ChatCircleText, ChatText, ClipboardText, Envelope, TelegramLogo, User } from 'phosphor-react'
import { Title } from '../../styles/styles'
import { Container, Form } from './styles'

export function Contact() {
  return (
    <Container id="contact">
      <Title>Contato</Title>
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
            Nome <span><User size={15} weight="bold" /></span>
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
           Email <span><At size={15} weight="bold" /></span>
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
            Assunto <span><ChatText size={15} weight="bold" /></span>
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
            Mensagem <span><ChatCircleText size={15} weight="bold" /></span>
          </label>
        </div>

        <button type="submit">Enviar <TelegramLogo size={15} weight="bold" /> </button>
      </Form>
    </Container>
  )
}
