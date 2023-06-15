import { CV } from "../components/CV";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Links } from "../components/Links";
import { Work } from "../components/Work";
import { Section } from "../styles/styles";

export default function Experience() {
  return (
    <>
      <Header />
      <Links />
      <Section>
        <Work exp={'../experience'} />
        <CV />
      </Section>
      <Footer />
    </>
  )
}