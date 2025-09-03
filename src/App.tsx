import Navbar from './components/SeraUI/Navbar';
import { AboutSection } from './PageSection/AboutSection';
import { HeroSection } from './PageSection/HeroSection';
 

function App() {

  return (
    <>
      <main className='scroll-smooth'>
        <Navbar />
        <HeroSection />
        <AboutSection />
      </main>
    </>
  )
}

export default App
