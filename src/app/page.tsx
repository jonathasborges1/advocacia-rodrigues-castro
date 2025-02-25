import HeroSection from "./components/section/Hero";
import AboutSection from "./components/section/About";
import ServicesSection from "./components/section/Service";
import TeamSection from "./components/section/Team";
import ContactSection from "./components/section/Contact";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TeamSection />
      <ContactSection />
    </>
  );
}
