import Link from "next/link"
import { Icons } from "./styles"
import { FiGithub, FiLinkedin, FiFacebook, FiTwitter } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'


export function Links() {
  return (
   <>
     <Icons>
        <Link href={""}><a><FiGithub /></a></Link>
        <Link href={""}><a><FiLinkedin /></a></Link>
        <Link href={""}><a><FiFacebook /></a></Link>
        <Link href={""}><a><FiTwitter /></a></Link>
        <Link href={""}><a><FaWhatsapp /></a></Link>
        <div className="barra"></div>
      </Icons>
   </>
  )
}