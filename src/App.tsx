import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import SkillsSection from "./components/SkillSection";

export default function App() {
  return (
    <div className="bg-black min-h-screen font-space-mono cursor-default">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
    </div>
  )
}