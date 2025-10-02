import Navigation from '@/react-app/components/Navigation'
import Hero from '@/react-app/components/Hero'
import About from '@/react-app/components/About'
import Experience from '@/react-app/components/Experience'
import Projects from '@/react-app/components/Projects'
import Contact from '@/react-app/components/Contact'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <div id="about">
        <About />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}
