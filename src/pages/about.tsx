import { useTheme } from 'styled-components'
import Link from 'next/link'
import { BiUserPin } from 'react-icons/bi'
import { AiFillGithub } from 'react-icons/ai'
import { Header } from '../components/Header'
import {
  AboutContainer,
  AboutContent,
  AboutImage,
  AboutDescription
} from '../styles/about'
import { Container, Section, Title } from '../styles/styles'
import { Links } from '../components/Links'
import { RiWhatsappFill } from 'react-icons/ri'
import { BsLinkedin } from 'react-icons/bs'
import { GrMail } from 'react-icons/gr'
import { FaDiscord } from 'react-icons/fa'
import { Footer } from '../components/Footer'
import { ScrollTop } from '../components/ScrollTop'

export default function About() {
  const theme = useTheme()

  return (
    <>
      <Header />
      <Links />
      <ScrollTop />
      <Section>
        <AboutContainer>
          <Title>
            <p>../about</p>
            Sobre
            <span>
              <BiUserPin /> About
            </span>
          </Title>

          <AboutContent>
            <AboutImage>
              <img
                className="AboutImg"
                src="/Evander.webp"
                alt="Imagem de perfil Evander"
              />

              <div className="links">
                <ul role="list">
                  <Link href={'https://github.com/EvanderInacio'}>
                    <a target="_blank" aria-label="Link para o Github">
                      <AiFillGithub size={25} /> @EvanderInacio
                    </a>
                  </Link>
                  <Link href={'https://www.linkedin.com/in/evander-inacio/'}>
                    <a target="_blank" aria-label="Link para o Linkedin">
                      <BsLinkedin size={25} /> @evander-inacio
                    </a>
                  </Link>
                  <Link
                    href={'https://api.whatsapp.com/send?phone=5511995085916'}
                  >
                    <a target="_blank" aria-label="Link para o WhatsApp">
                      <RiWhatsappFill size={25} /> +55 (11) 99508-5916
                    </a>
                  </Link>
                  <Link href={'https://www.discordapp.com/users/Evander#8942'}>
                    <a
                      className="dc"
                      target="_blank"
                      aria-label="Link para o Discord"
                    >
                      <FaDiscord size={25} /> @Evander#8942
                    </a>
                  </Link>
                  <Link href={'mailto:evander.20112@hotmail.com'}>
                    <a
                      className="email"
                      target="_blank"
                      aria-label="Link para o email"
                    >
                      <GrMail size={25} /> @evander.20112@hotmail.com
                    </a>
                  </Link>
                </ul>
              </div>
            </AboutImage>
            <AboutDescription>
              <p>
                Eu sou Evander Inácio. Um desenvolvedor front-end React do
                Brasil que adora projetar e codificar. Eu uso React.js ou
                Next.js para construir as interfaces de aplicativos da web e as
                funcionalidades.
              </p>
              <p>
                Gosto de pensar que vivi uma vida cheia de histórias. Fui para a
                universidade inicialmente para fazer graduação em Analise e
                Desenvolvimento de Sistemas, depois que sair do emprego de
                repositor. Como ja gostava de computadores e sempre tive uma
                leve curiosidade de como era feito as páginas web. Então unir as
                duas coisas e fui para faculdade não com o plano de me torna um
                desenvolvedor, mas para me achar dentro da área de TI.
              </p>
              <p>
                Minha jornada de programação começou seriamente em 2021, no
                penúltimo semestre da faculdade, com minha primeira tentativa de
                aprender HTML e CSS. Desisti depois de alguns meses devido à
                falta de tempo livre...
              </p>
              <p>
                Em 2022 percebi que precisava de um objetivo, então foquei nas
                em HTML, CSS e Javascript para poder construir aplicações web e
                alimentar meu aprendizado com o sonho de me tornar um
                desenvolvedor web.
              </p>
              <p>
                Atualmente trabalho como desenvolvedor front-end freelancer
                utilizando ReactJS e Material UI, assim como integração com o
                back-end feito em NodeJS.
              </p>
              <p>
                Além disso, continuo a estudar e desenvolver projetos, de modo a
                ampliar meus conhecimentos em específico no front-end ReactJS,
                NextJS, JavaScript, TypeScript, HTML + CSS e Git.
              </p>
            </AboutDescription>
          </AboutContent>
        </AboutContainer>

        
      </Section>
      <Footer />
    </>
  )
}
