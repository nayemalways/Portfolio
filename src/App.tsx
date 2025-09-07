import Navbar from './components/SeraUI/Navbar';
import { AboutSection } from './PageSection/AboutSection';
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
      </main>
    </>
  )
}

export default App
