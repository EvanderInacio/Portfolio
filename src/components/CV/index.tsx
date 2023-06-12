import { BsFileText } from "react-icons/bs";
import { ButtonSecondAlt, Container, Title } from "../../styles/styles";
import { CVContainer, CVContent, CVDescription, Curriculum } from "./styles"
import { FiDownload } from 'react-icons/fi'

export function CV() {
  return (
    <Container>
      <CVContainer>
        <Title>
          Currículo
          <span>
            <BsFileText /> Curriculum
          </span>
        </Title>

        <CVContent>
          <CVDescription>
              <div className="aspas">"</div>
              <p>
                Aqui você pode baixar meu currículo clicando no botão de download.
              </p>
              <div className="profile">
                <img src="https://github.com/EvanderInacio.png" alt="Imagem de perfil" />
                <div>
                  <h3>Evander Inacio</h3>
                  <span>Desenvolvedor Front end</span>
                </div>
              </div>
          </CVDescription>
          
          <Curriculum>
            <img src="/cv.png" alt="Homem mostrando um botão de download de currículo" />
            <a href="/pdf/Evander-CV.pdf" download>
              <ButtonSecondAlt>
                <b>Download CV</b> <FiDownload size={20}  />
              </ButtonSecondAlt>
            </a>
          </Curriculum>
        </CVContent>


        
      </CVContainer>
    </Container>
  )
}