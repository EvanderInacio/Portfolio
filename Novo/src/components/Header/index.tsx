import { useState } from "react";
import Link from "next/link";

import { List, X } from 'phosphor-react'
import { HeaderContainer, MobileIcon, NavMenu } from './styles'

export function Header() {
  const [click, setClick] = useState(false)

  const handleOpen = () => {
    setClick(!click)
  }
  
  return (
    <HeaderContainer>
      <div className="mobile-content">
        <a href="#" >Evander</a>
        <MobileIcon onClick={handleOpen}>{click ? <X /> : <List />}</MobileIcon>
      </div>

        <NavMenu onClick={handleOpen} click={click}>
          <ul>
           <Link href={''}>Home</Link>
           <Link href={''}>Sobre</Link>
           <Link href={''}>Conhecimentos</Link>
           <Link href={''}>Projetos</Link>
           <Link href={''}>Contato</Link>
          </ul>
        </NavMenu>
    </HeaderContainer>
  )
}