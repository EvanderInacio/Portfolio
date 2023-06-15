import { Educations } from "../components/Educations";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Links } from "../components/Links";
import { Section } from "../styles/styles";

export default function Education() {
  return (
    <>
      <Header />
      <Links />
      <Section>
        <Educations />
      </Section>
      <Footer />
    </>
  )
}