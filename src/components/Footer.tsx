import Link from 'next/link'
import { Icon, Lockup } from './Brand'
import { PROFILE_LINKS } from '@/content/site'

const NAV = [
  { href: '/research/', label: 'Research' },
  { href: '/research/papers/', label: 'Papers' },
  { href: '/research/talks/', label: 'Talks' },
  { href: '/services/', label: 'Services' },
  { href: '/services/tutoring/', label: 'Tutoring' },
  { href: '/games/', label: 'Games' },
  { href: '/about/', label: 'About' },
  { href: '/contact/', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="f-grid">
          <div className="f-brand">
            <Link className="logo" href="/" aria-label="miolajtech, home">
              <Lockup />
            </Link>
            <p>miolajtech, the practice of Dr Michael Ajao-Olarinoye. Automated business systems, AI agents, data science, training, research and tutoring.</p>
            <ul className="f-social" aria-label="Profiles">
              {PROFILE_LINKS.map((p) => (
                <li key={p.id}>
                  <a href={p.href} rel="noopener" aria-label={p.label} title={p.label}>
                    <Icon id={p.id} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <ul className="f-nav">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link href={n.href}>{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="legal">
          <p>© 2026 Michael Ajao-Olarinoye. miolajtech is a trading name. Opinions and services on this site are my own and are not those of Coventry University, QAHE or any other employer.</p>
          <p className="legal-links">
            <Link href="/privacy/">Privacy</Link>
            <Link href="/terms/">Terms</Link>
            <a href="/michael_cv.pdf">Download CV</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
