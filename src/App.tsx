import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import SkillsSection from "./components/SkillSection";

export default function App() {
  return (
    <div className="bg-black font-space-mono cursor-default px-5 md:px-[137px]">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
    </div>
  )
}