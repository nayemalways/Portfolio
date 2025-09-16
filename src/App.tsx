import Navbar from './components/SeraUI/Navbar';
import { AboutSection } from './PageSection/AboutSection';
import ContactSection from './PageSection/ContactSection';
import { FooterSection } from './PageSection/FooterSection';
import { HeroSection } from './PageSection/HeroSection';
import ProjectSection from './PageSection/ProjectSection';
import SkillsSection from './PageSection/SkillsSection';
  

function App() {

  return (
    <>
      <main className='scroll-smooth'>
        <Navbar />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectSection />
        <ContactSection />
        <FooterSection />
      </main>
    </>
  )
}

export default App
