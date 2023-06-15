import { CV } from "../components/CV";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Links } from "../components/Links";
import { ScrollTop } from "../components/ScrollTop";
import { Work } from "../components/Work";
import { Section } from "../styles/styles";

export default function Experience() {
  return (
    <>
      <Header />
      <Links />
      <ScrollTop />
      <Section>
        <Work exp={'../experience'} />
        <CV />
      </Section>
      <Footer />
    </>
  )
}