import Head from "next/head";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Links } from "../components/Links";
import { ScrollTop } from "../components/ScrollTop";

export default function Contacts() {
  return (
    <>
     <Head>
        <title>Contact | Evander Inácio </title>
        <meta
            name="description"
            content="Minha experiência como desenvolvedor web."
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