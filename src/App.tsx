import { useEffect, useState } from "react";
import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
// import Layout from "./components/Layout";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import ProjectSection from "./components/ProjectSection";
import WhatIDoContainer from "./components/WhatIDoContainer";
import WhatIDoSection from "./components/WhatIDoSection";
import StackSection from "./components/StackSection";
import FooterSection from "./components/FooterSection";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulasi loading selama 2 detik

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="relative">
      <Navbar />
      <HeroSection />
      <AboutSection isWhiteMode={false} />
      <WhatIDoContainer />
      <WhatIDoSection />
      <StackSection />
      <ProjectSection />
      <div className='h-screen'>
        <FooterSection />
      </div>
    </div>
  );
}