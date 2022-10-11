import { useState } from 'react'
import Link from 'next/link'

import { Briefcase, Files, House, List, Phone, PhoneOutgoing, User, X } from 'phosphor-react'
import { HeaderContainer, MobileIcon, NavMenu } from './styles'

export function Header() {
  const [click, setClick] = useState(false)

  const handleOpen = () => {
    setClick(!click)
  }

  return (
    <HeaderContainer>
      <div className="mobile-content">
        <a href={'/'}>
          <span style={{ color: '#5252e0' }}>E</span>vander
        </a>
        <MobileIcon onClick={handleOpen}>{click ? <X /> : <List />}</MobileIcon>
      </div>

      <NavMenu onClick={handleOpen} click={click}>
        <ul>
          <Link href={'/'}>
            <a>
              <House weight="bold" /> <span>Home</span>
            </a>
          </Link>
          <Link href={'#about'}>
            <a>
              <User weight="bold" /> <span>Sobre</span>
            </a>
          </Link>
          <Link href={'#skills'}>
            <a>
              <Files weight="bold" /> <span>Conhecimentos</span>
            </a>
          </Link>
          <Link href={'#projects'}>
            <a>
              <Briefcase weight="bold" /> <span>Projetos</span>
            </a>
          </Link>
          <Link href={'#contact'}>
            <a>
              <PhoneOutgoing weight="bold" /> <span>Contato</span>
            </a>
          </Link>
        </ul>
      </NavMenu>
    </HeaderContainer>
  )
}
