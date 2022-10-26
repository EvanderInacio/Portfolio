import Link from 'next/link'
import { Icons } from './styles'
import { FiGithub, FiLinkedin, FiFacebook, FiTwitter } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

export function Links() {
  return (
    <>
      <Icons>
        <Link href={'https://github.com/EvanderInacio'}>
          <a target="_blank">
            <FiGithub />
          </a>
        </Link>
        <Link href={'https://www.linkedin.com/in/evander-inacio/'}>
          <a target="_blank">
            <FiLinkedin />
          </a>
        </Link>
        <Link href={'https://www.facebook.com/evandder.lopes/'}>
          <a target="_blank">
            <FiFacebook />
          </a>
        </Link>
        <Link href={'https://twitter.com/Evander_Inacio'}>
          <a target="_blank">
            <FiTwitter />
          </a>
        </Link>
        <Link href={'https://api.whatsapp.com/send?phone=5511995085916'}>
          <a target="_blank">
            <FaWhatsapp />
          </a>
        </Link>
        <div className="barra"></div>
      </Icons>
    </>
  )
}
