import { Educations } from "../components/Educations";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Links } from "../components/Links";
import { ScrollTop } from "../components/ScrollTop";
import { Section } from "../styles/styles";

export default function Education() {
  return (
    <>
      <Header />
      <Links />
      <ScrollTop />
      <Section>
        <Educations />
      </Section>
      <Footer />
    </>
  )
}