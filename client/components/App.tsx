import About from './About'
import Contact from './Contact'
import Footer from './Footer'
import LandingPage from './LandingPage'
import Links from './Links'
import Navbar from './Navbar'
import Projects from './Projects'

function App() {
  return (
    <div className="min-h-[2000px] space-y-4 scroll-smooth bg-[#f0f0f0] pt-6">
      <div className="flex justify-between">
        <Links />
        <Navbar />
      </div>
      <LandingPage />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
