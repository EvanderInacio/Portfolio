import Link from 'next/link'
import work from '../../data/works'
import { Container, Title } from '../../styles/styles'
import { WorkContainer, WorkContent } from './styles'
import { AiOutlineRightCircle } from 'react-icons/ai'
import { BiBarChartSquare } from 'react-icons/bi'

export function Work() {
  return (
    <Container id="work">
      <Title>
        Trabalho
        <span>
          <BiBarChartSquare /> Work
        </span>
      </Title>

      <WorkContainer>
        {work.map(work => {
          return (
            <WorkContent key={work.id} imgUrl={work.img}>
              <div className="workItem">
                <div className="overlay" />
                <div className="text">
                  <h1>#{work.title}</h1>
                  <h2>{work.subTitle}</h2>
                </div>
              </div>
              <button type="button">
                <Link href={`/work/${work.url}`}>
                  <a>
                    Ver mais <AiOutlineRightCircle />
                  </a>
                </Link>
              </button>
            </WorkContent>
          )
        })}
      </WorkContainer>
    </Container>
  )
}
