import Navbar from './components/SeraUI/Navbar';
import { AboutSection } from './PageSection/AboutSection';
import ContactSection from './PageSection/ContactSection';
import { FooterSection } from './PageSection/FooterSection';
import { HeroSection } from './PageSection/HeroSection';
import ProfessionalExperienceSection from './PageSection/ProfessionalExperienceSection';
import ProjectSection from './PageSection/ProjectSection';
  

function App() {

  return (
    <>
      <main className='scroll-smooth'>
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ProfessionalExperienceSection/>
        <ProjectSection />
        <ContactSection />
        <FooterSection />
      </main>
    </>
  )
}

export default App
