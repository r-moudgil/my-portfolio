import HeroSection from "./components/HeroSection";
import Experience from "./components/Experience";
import ProjectsSection from "./components/ProjectsSection";
import ResumeSection from "./components/ResumeSection";
import ContactSection from "./components/ContactSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Experience />
      <ProjectsSection />
      <ResumeSection />
      <ContactSection />
    </>
  );
}