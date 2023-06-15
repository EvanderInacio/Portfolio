import { useState } from 'react'
import Link from 'next/link'
import { List, X } from 'phosphor-react'
import { HeaderContainer, MobileIcon, NavMenu, Icons } from './styles'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import Image from 'next/image'

export function Header() {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <HeaderContainer style={{ position: 'fixed' }}>
      <div className="mobile-content">
        <a href={'/'}>
          <Image className='logo' width={40} height={30} src="/icon.svg" alt="logo" />
        </a>
        <MobileIcon onClick={handleOpen}>
          {open ? (
            <X size={24} weight="bold" />
          ) : (
            <List size={24} weight="bold" />
          )}
        </MobileIcon>
      </div>

      <NavMenu onClick={handleOpen} open={open}>
        <ul>
          <li>
            <Link href={'/'}>
              <a>
                <span>Início</span>
              </a>
            </Link>
          </li>

          <li>
            <Link href={'/about'}>
              <a>
                <span>Sobre</span>
              </a>
            </Link>
          </li>
          
          <li>
            <Link href={'/experience'}>
              <a>
                <span>Experiência</span>
              </a>
            </Link>
          </li>

          <li>
            <Link href={'/education'}>
              <a>
                <span>Educação</span>
              </a>
            </Link>
          </li>

          <li>
            <Link href={'/projects'}>
              <a>
                <span>Projetos</span>
              </a>
            </Link>
          </li>

          <li>
            <Link href={'/contact'}>
              <a>
                <span>Contato</span>
              </a>
            </Link>
          </li>
        </ul>

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
            <a
              target="_blank"
              aria-label="Link para entrar em contato via whatsapp"
            >
              <FaWhatsapp />
            </a>
          </Link>
        </Icons>
      </NavMenu>
    </HeaderContainer>
  )
}
