import React from "react";
import Header from "./_components/Header";
import HeroSection from "./_components/Hero";
import SkillSet from "./_components/SkillSet";
import AboutSection from "./_components/About";
import ProjectSection from "./_components/Projects";
import ContactSection from "./_components/Contacts";
import Footer from "./_components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <SkillSet />
      <AboutSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default App;
