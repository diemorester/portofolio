import { useEffect, useState } from "react";
import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import ProjectSection from "./components/ProjectSection";
// import SkillsSection from "./components/SkillSection";
import Layout from "./components/Layout";
import WhatIDoContainer from "./components/WhatIDoContainer";

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
    <Layout>
      <Navbar />
      <HeroSection />
      <AboutSection isWhiteMode={false} />
      <WhatIDoContainer />
      {/* <SkillsSection /> */}
      <ProjectSection />
    </Layout>
  );
}