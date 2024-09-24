import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="bg-black min-h-screen font-space-mono">
      <Navbar />
      <HeroSection />
      <AboutSection />
    </div>
  )
}