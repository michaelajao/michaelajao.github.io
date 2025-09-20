import Hero from '@/components/Hero'
import ResearchFocus from '@/components/ResearchFocus'
import FeaturedProjects from '@/components/FeaturedProjects'
import Publications from '@/components/Publications'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ResearchFocus />
      <FeaturedProjects />
      <Publications />
      <Experience />
      <Education />
      <Skills />
      <Contact />
    </main>
  )
}