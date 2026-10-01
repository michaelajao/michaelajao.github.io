import Link from 'next/link'
import { Arr } from './Brand'
import { TUTOR_GROUPS } from '@/content/services'

export const INTEGRITY = 'I teach and give feedback on your own work. I do not write or complete work that you submit for assessment.'

export function TutorGroups() {
  return (
    <ul className="groups">
      {TUTOR_GROUPS.map((g) => (
        <li key={g.title}>
          <h3>{g.title}</h3>
          <span className={g.wip ? 'tag tag-wip' : 'tag'}>{g.tag}</span>
          <p>{g.text}</p>
        </li>
      ))}
    </ul>
  )
}

/** Home page tutoring teaser. */
export default function TutoringTeaser() {
  return (
    <section id="tutoring" className="tut" aria-labelledby="h-tut">
      <div className="wrap">
        <div className="tut-grid">
          <div className="tut-l">
            <span className="mono muted" style={{ display: 'block', marginBottom: 18 }}>
              Tutoring
            </span>
            <h2 id="h-tut">Learn it properly.</h2>
            <p className="lead">One-to-one tutoring from a PhD scientist who teaches computing for a living. We start with a short intro call to check that I am the right tutor.</p>
            <div className="integrity">
              <p>{INTEGRITY}</p>
            </div>
            <div className="tut-cta">
              <Link className="btn btn-fill" href="/contact/?intent=tutoring">
                Enquire about tutoring <Arr />
              </Link>{' '}
              <Link className="tl" href="/services/tutoring/">
                <span>How tutoring works</span>
                <Arr />
              </Link>
            </div>
          </div>
          <div className="tut-r">
            <TutorGroups />
          </div>
        </div>
      </div>
    </section>
  )
}
