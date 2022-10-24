import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { FooterContainer } from './styles'

export function Footer() {
  return (
    <FooterContainer>
      <h4> &copy; 2022 {' '} Evander Inácio</h4>
      <div className='links'>
        <Link href={""}><a><FiGithub /></a></Link>
        <Link href={""}><a><FiLinkedin /></a></Link>
        <Link href={""}><a><FaWhatsapp /></a></Link>
      </div>
    </FooterContainer>
  )
}