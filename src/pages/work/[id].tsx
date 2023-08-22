import { GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import works from '../../data/works'
import { Work } from '../../types/Work'

import * as S from '../../styles/work'
import { ButtonAlternatives, ButtonSecondary } from '../../styles/styles'
import { Footer } from '../../components/Footer'
import { ArrowLeft } from 'phosphor-react'

interface WorkProps {
  work: Work
}

export default function Projeto({ work }: WorkProps) {
  return (
    <>
       <Head>
        <title>{work.title} | Evander Inácio </title>
        <meta name="description" content={work.description} />
        <meta property="og:title" content={work.title} />
        <meta property="og:description" content={work.description} />
        <meta property="og:image" content={work.imgUrl} />
        <meta property="og:image:secure_url" content={work.imgUrl} />
        <meta name="twitter:image" content={work.imgUrl} />
        <meta name="twitter:image:src" content={work.imgUrl} />
      </Head>
      
      <S.WorkContainer>
        <S.WorkBanner imgUrl={work.imgUrl}>
          <div className="bannerImg" />
          <div className='title'>
            <Image width={55} height={55} src={work.logo} alt={work.title} />
            <h1>{work.title}</h1>
          </div>
          <h2>{work.subTitle}</h2>
          <span>{work.date}</span>
          <p>{work.description}</p>

          <div className="tags">
            {work.tags.map(tag => {
              return (
                <ul key={tag.id}>
                  <Image width={40} height={40} src={tag.icon} alt={tag.name} />
                  <p>{tag.name}</p>
                </ul>
              )
            })}
          </div>

          <Link href={'/'}>
            <a>
              <ButtonAlternatives>
                <ArrowLeft
                  style={{
                    marginBottom: '-0.1rem'
                  }}
                  weight="bold"
                  size={16}
                />
                Voltar
              </ButtonAlternatives>
            </a>
          </Link>
        </S.WorkBanner>

        <S.WorkContent>
          {work.prints.map(print => {
            return (
              <div className='print' key={print.id}>
                <h3>{print.name}</h3>
                <Image
                  width={900}
                  height={500}
                  src={print.image}
                  alt={print.name}
                  />
                <p>{print.description}</p>
              </div>
            )
          })}
        </S.WorkContent>

        <Link href={'/#work'}>
          <ButtonSecondary>
            <a>
              <ArrowLeft
                style={{ marginBottom: '-0.2rem' }}
                weight="bold"
                size={18}
              />{' '}
              Voltar
            </a>
          </ButtonSecondary>
        </Link>
      </S.WorkContainer>

      <Footer />
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const work = works.map(work => ({
    id: work.id,
    url: work.url,
    imgUrl: work.img,
    logo: work.logo,
    title: work.title,
    subTitle: work.subTitle,
    description: work.description,
    tags: work.tags,
    date: work.date,
    prints: work.prints
  }))

  const workId = work.find(work => work.url === params.id)

  return {
    props: {
      work: workId
    },
    revalidate: 60 // 60 seconds
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}
