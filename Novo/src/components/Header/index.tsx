import Link from "next/link";
import { HeaderContainer, NavMenu } from './styles'

export function Header() {
  return (
    <HeaderContainer>
        <a href="#" >Evander</a>

        <NavMenu>
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