import { ContactForm } from "../components/ContactForm";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Links } from "../components/Links";
import { ScrollTop } from "../components/ScrollTop";
import { Section } from "../styles/styles";

export default function Contact() {
  return (
    <>
      <Header />
      <Links />
      <ScrollTop />
      <Section>
        <ContactForm contact={'../contact'} />
      </Section>
      <Footer />
    </>
  )
}