/* eslint-disable @next/next/no-img-element */
import { FiGithub } from 'react-icons/fi'
import { ButtonPrimary } from '../../../styles/styles'
import { AllContainer, AllContent, Cubo } from './styles'

export function AllProjects() {
  return (
    <>
      <AllContainer>
        <h4>Todos os projetos</h4>
        <AllContent>
          <ButtonPrimary>Repositório  <FiGithub /></ButtonPrimary>

          <Cubo>
            <div className="stage-cube-cont">
              <div className="cubespinner">
                <div className="face1">
                  <img src="/skills/html.svg" alt="Html" />
                </div>
                <div className="face2">
                  <img src="/skills/react.svg" alt="React JS" />
                </div>
                <div className="face3">
                  <img src="/skills/javascript.svg" alt="JavaScript" />
                </div>
                <div className="face4">
                  <img src="/skills/typescript.svg" alt="TypeScript" />
                </div>
                <div className="face5">
                  <img src="/skills/css.svg" alt="Css" />
                </div>
                <div className="face6">
                  <img src="/skills/next-js.svg" alt="Next JS" />
                </div>
              </div>
            </div>
          </Cubo>
        </AllContent>
      </AllContainer>
    </>
  )
}
