import Navbar from './components/SeraUI/Navbar';
import { AboutSection } from './PageSection/AboutSection';
import { HeroSection } from './PageSection/HeroSection';
import SkillsSection from './PageSection/SkillsSection';
  

function App() {

  return (
    <>
      <main className='scroll-smooth'>
        <Navbar />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
      </main>
    </>
  )
}

export default App
