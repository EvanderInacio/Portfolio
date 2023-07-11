import Head from 'next/head'
import { useState } from 'react'
import works from '../data/work'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Links } from '../components/Links'
import { ScrollTop } from '../components/ScrollTop'
import { Educations } from '../components/Educations'
import { Section, Title, Description } from '../styles/styles'
import { TabButton, TabContent, TabsContainer } from '../styles/experience'
import { Briefcase } from 'phosphor-react'
import Image from 'next/image'

export default function Experience() {
  const [tabIndex, setTabIndex] = useState(0)
  let numbering = 0

  return (
    <>
      <Head>
        <title>Experience | Evander Inácio </title>
        <meta
          name="description"
          content="Minha experiência como desenvolvedor web."
        />
        <meta property="og:title" content="Experience | Evander Inácio" />
        <meta
          property="og:description"
          content="Minha experiência como desenvolvedor web."
        />
      </Head>

      <Header />
      <Links />
      <ScrollTop />
      <Section>
        <Title>
          <p>../experience</p>
          Experiência
          <span>
            <Briefcase /> Experience
          </span>
        </Title>

        <Description>
          Sou apaixonado por criar interfaces interativas e funcionais, buscando
          sempre aprimorar minhas habilidades e aprender novas tecnologias.
          Estou sempre aberto a novos desafios e projetos desfiadores.
        </Description>

        <TabsContainer>
          <Tabs
            className="tabs"
            selectedIndex={tabIndex}
            onSelect={index => setTabIndex(index)}
            selectedTabClassName={'is-active'}
            selectedTabPanelClassName={'is-active'}
          >
            <TabButton>
              <TabList className="tab__list">
                {works.map(work => {
                  if (work.id) {
                    numbering += 1
                    return (
                      <>
                        <h2 key={work.id}>
                          {numbering >= 0 && numbering <= 10
                            ? `0${numbering - 1}`
                            : `${numbering - 1}`}
                        </h2>
                        <Tab className="tab">
                          <button>{work.title}</button>
                        </Tab>
                      </>
                    )
                  }
                })}
              </TabList>
            </TabButton>

            <TabContent>
              {works.map(work => {
                return (
                  <TabPanel className="tab__panel" key={work.id}>
                    <div className="title-container">
                      <div className="title-content">
                        <div>
                          <img src={work.img} alt={work.title} />
                        </div>
                        <div className="title">
                          <h1>{work.title}</h1>
                          <div className="sub"></div>
                          <h2>{work.subTitle}</h2>
                        </div>
                      </div>
                      <div className="office">
                        <h3>{work.office}</h3>
                        <h4>{work.date}</h4>
                      </div>
                    </div>
                    <p>{work.description}</p>
                    <div className="techs">
                      <h3>Techs:</h3>
                      <ul>
                        {work.tags.map(tag => (
                          <div className="tags" key={tag.name}>
                            <Image 
                              width={50} 
                              height={45} 
                              src={tag.icon} 
                              alt={tag.name} 
                            />
                            <h4>{tag.name}</h4>
                          </div>
                        ))}
                      </ul>
                    </div>
                  </TabPanel>
                )
              })}
            </TabContent>
          </Tabs>
        </TabsContainer>

        <Educations />
      </Section>
      <Footer />
    </>
  )
}
