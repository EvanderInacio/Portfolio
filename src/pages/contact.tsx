import Head from 'next/head'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Links } from '../components/Links'
import { ScrollTop } from '../components/ScrollTop'

export default function Contacts() {
  return (
    <>
      <Head>
        <title>Contact | Evander Inácio </title>
        <meta
          name="description"
          content="Sinta-se à vontade para entrar em contato e vamos conversar sobre como podemos trabalhar juntos."
        />
        <meta property="og:title" content="Contact | Evander Inácio" />
        <meta
          property="og:description"
          content="Sinta-se à vontade para entrar em contato e vamos conversar sobre como podemos trabalhar juntos."
        />
      </Head>

      <Header />
      <Links />
      <ScrollTop />
      <Contact />
      <Footer />
    </>
  )
}
