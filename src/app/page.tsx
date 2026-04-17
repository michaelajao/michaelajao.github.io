import Hero from '@/components/Hero'
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
      <FeaturedProjects />
      <Publications />
      <Experience />
      <Ventures />
      <Education />
      <Contact />
    </main>
  )
}