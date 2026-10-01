import ContactForm from '@/components/ContactForm'
import { ProfileList } from '@/components/Parts'
import { pageMeta } from '@/lib/meta'

export const metadata = pageMeta({
  title: 'Contact',
  description: 'Get in touch about a project, a clinic, research collaboration, tutoring or a talk or workshop. Say what the problem is, who it is for and roughly when you need it.',
  path: '/contact/',
})

export default function ContactPage() {
  return (
    <section id="contact" className="contact" aria-labelledby="h-contact" style={{ borderTop: 0 }}>
      <div className="wrap">
        <div className="c-grid">
          <div className="c-intro">
            <h1 id="h-contact">
              Tell me what you’re trying to do.
            </h1>
            <p className="lead">Say what the problem is, who it is for and roughly when you need it. I’ll reply personally.</p>
            <ProfileList />
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
