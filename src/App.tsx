import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectSection from "./components/ProjectSection";
import SkillsSection from "./components/SkillSection";
import Layout from "./components/Layout"; //

export default function App() {
  return (
    <Layout>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectSection />
    </Layout>
  );
}