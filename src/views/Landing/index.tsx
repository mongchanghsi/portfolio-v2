import { GenericContainer, GenericContent } from "../GenericLayout";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Footer from "@/components/shared/Footer";
import Experience from "@/components/ExperienceV2";
import BlogListPreview from "@/components/Blog/BlogListPreview";

const LandingView = () => {
  return (
    <GenericContainer>
      <GenericContent>
        <Hero />
        <AboutMe />
        <Experience />
        <BlogListPreview />
        <Footer />
      </GenericContent>
    </GenericContainer>
  );
};

export default LandingView;
