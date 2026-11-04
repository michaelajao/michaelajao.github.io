import Link from 'next/link'
import Portrait from '@/components/Portrait'
import { Arr } from '@/components/Brand'
import { PageHead, ProfileLinks, Roles } from '@/components/Parts'
import { ABOUT_TEXT, CAREER, EDUCATION, MEMBERSHIPS, ROLES, VOLUNTEERING } from '@/content/profile'
import { pageMeta } from '@/lib/meta'

export const metadata = pageMeta({
  title: 'About',
  description: 'Dr Michael Ajao-Olarinoye is a Research Fellow at Coventry University and a lecturer in computing. Current roles, education, memberships and certifications, volunteering, earlier career and profile links.',
  path: '/about/',
})

export default function AboutPage() {
  return (
    <>
      <PageHead eyebrow="About" title="Research, engineering and teaching in one practice." />
      <section aria-label="About Michael Ajao-Olarinoye">
        <div className="wrap">
          <div className="about-grid">
            <Portrait />
            <div className="p-body">
              <p className="big">
                {ABOUT_TEXT}
              </p>
              <Roles items={ROLES} />
              <Roles items={EDUCATION} label="Education" />
              <Roles items={MEMBERSHIPS} label="Memberships, certifications and service" />
              <Roles items={VOLUNTEERING} label="Volunteering and leadership" />
              <ProfileLinks />
              <div className="dl-row">
                <a className="btn btn-fill" href="/michael_cv.pdf">
                  Download CV <Arr>↓</Arr>
                </a>
                <Link className="btn btn-line" href="/contact/">
                  Get in touch
                </Link>
              </div>
            </div>
          </div>

          <div className="about-career">
            <h2 className="mono">
              Earlier career
            </h2>
            <Roles items={CAREER} />
          </div>
        </div>
      </section>
    </>
  )
}
