import Hero from '@/components/Hero'
import About from '@/components/About'
import FeaturedProjects from '@/components/FeaturedProjects'
import Publications from '@/components/Publications'
import Experience from '@/components/Experience'
import Ventures from '@/components/Ventures'
import Education from '@/components/Education'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <FeaturedProjects />
      <Publications />
      <Experience />
      <Education />
      <Ventures />
      <Contact />
    </main>
  )
}