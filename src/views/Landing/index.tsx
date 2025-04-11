import { GenericContainer, GenericContent } from "../GenericLayout";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import AboutMe from "@/components/AboutMe";
import Footer from "@/components/shared/Footer";
import Experience from "@/components/ExperienceV2";

const LandingView = () => {
  return (
    <GenericContainer>
      <GenericContent>
        <Hero />
        <AboutMe />
        <Experience />
        <Footer />
      </GenericContent>
    </GenericContainer>
  );
};

export default LandingView;
