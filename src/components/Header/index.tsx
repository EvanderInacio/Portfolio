import { useState } from 'react'
import Link from 'next/link'
import { List, X } from 'phosphor-react'
import { HeaderContainer, MobileIcon, NavMenu } from './styles'
import { Icons } from '../Links/styles'

export function Header() {
  const [click, setClick] = useState(false)

  const handleOpen = () => {
    setClick(!click)
  }

  return (
    <HeaderContainer style={{ position: 'fixed' }}>
      <div className="mobile-content">
        <a href={'/'}>
          <span>E</span>vander
        </a>
        <MobileIcon onClick={handleOpen}>
          {click ? (
            <X size={24} weight="bold" />
          ) : (
            <List size={24} weight="bold" />
          )}
        </MobileIcon>
      </div>

      <NavMenu onClick={handleOpen} click={click}>
        <ul>
          <Link href={'/'}>
            <a>
              <span>Início</span>
            </a>
          </Link>
          <Link href={'#about'}>
            <a>
              <span>Sobre</span>
            </a>
          </Link>
          <Link href={'#skills'}>
            <a>
              <span>Habilidades</span>
            </a>
          </Link>
          <Link href={'#projects'}>
            <a>
              <span>Projetos</span>
            </a>
          </Link>
          <Link href={'#contact'}>
            <a>
              <span>Contato</span>
            </a>
          </Link>
        </ul>
      </NavMenu>
    </HeaderContainer>
  )
}
