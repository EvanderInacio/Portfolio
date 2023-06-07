import Link from 'next/link'
import { Icons } from './styles'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

export function Links({ teste }: any) {
  return (
    <>
      <Icons>
        <Link href={'https://github.com/EvanderInacio'}>
          <a target="_blank" aria-label="Link para o Github">
            <FiGithub />
          </a>
        </Link>
        <Link href={'https://www.linkedin.com/in/evander-inacio/'}>
          <a target="_blank" aria-label="Link para o Linkedin">
            <FiLinkedin />
          </a>
        </Link>
        <Link href={'https://api.whatsapp.com/send?phone=5511995085916'}>
          <a target="_blank" aria-label="Link para entrar em contato via whatsapp">
            <FaWhatsapp />
          </a>
        </Link>
        <div className="barra"></div>
      </Icons>
    </>
  )
}
