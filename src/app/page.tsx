import Link from 'next/link'
import Hero from '@/components/Hero'
import { ABOUT_TEXT } from '@/content/profile'
import ResearchMap from '@/components/ResearchMap'
import Portrait from '@/components/Portrait'
import TutoringTeaser from '@/components/Tutoring'
import { Arr } from '@/components/Brand'
import { PaperLedger, ProfileList, SecHead, ServiceRows } from '@/components/Parts'

export default function Home() {
  return (
    <>
      <Hero />

      <section id="research" aria-labelledby="h-research">
        <div className="wrap">
          <SecHead
            id="h-research"
            title="Four areas, and the work behind each"
            desc="Each area has a short description, then the papers, preprints and projects behind it with their status. Hover or focus an area to see its work."
          />
          <ResearchMap />
          <div className="sec-foot">
            <Link className="tl" href="/research/">
              <span>All research areas</span>
              <Arr />
            </Link>
          </div>
        </div>
      </section>

      <section id="publications" aria-labelledby="h-pubs">
        <div className="wrap">
          <SecHead id="h-pubs" title="Latest papers" desc="Published and accepted work, newest first. Each entry shows where it appeared and what my part was." />
          <PaperLedger limit={3} />
          <div className="sec-foot">
            <Link className="tl" href="/research/papers/">
              <span>All papers, preprints and work in progress</span>
              <Arr />
            </Link>
            <Link className="tl" href="/research/talks/">
              <span>Talks, prizes and service</span>
              <Arr />
            </Link>
          </div>
        </div>
      </section>

      <section id="services" className="band" aria-labelledby="h-work">
        <div className="wrap">
          <SecHead
            id="h-work"
            title="Work with me"
            desc={
              <>
                <strong>miolajtech is the practice of Dr Michael Ajao-Olarinoye.</strong> Independent work, delivered by me and scoped with you first.
              </>
            }
          />
          <ServiceRows />
          <div className="cta-line">
            <Link className="btn btn-fill" href="/contact/?intent=project">
              Request a quote <Arr />
            </Link>
            <Link className="tl" href="/services/">
              <span>All services and how we work</span>
              <Arr />
            </Link>
          </div>
          <p className="svc-clinic">
            Not sure where to start? <Link href="/contact/?intent=clinic">Book a clinic</Link>
          </p>
        </div>
      </section>

      <TutoringTeaser />

      <section id="about" aria-labelledby="h-about">
        <div className="wrap">
          <div className="about-grid">
            <Portrait />
            <div className="p-body">
              <h2 id="h-about">Research, engineering and teaching in one practice.</h2>
              <p className="big">
                {ABOUT_TEXT}
              </p>
              <div className="dl-row">
                <Link className="btn btn-fill" href="/about/">
                  More about me <Arr />
                </Link>
                <a className="btn btn-line" href="/michael_cv.pdf">
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact c-cta" aria-labelledby="h-contact">
        <div className="wrap">
          <div className="c-grid">
            <div className="c-intro">
              <h2 id="h-contact">Tell me what you’re trying to do.</h2>
              <p className="lead">Say what the problem is, who it is for and roughly when you need it. I’ll reply personally.</p>
              <div className="cta-btns">
                <Link className="btn btn-fill" href="/contact/">
                  Get in touch <Arr />
                </Link>
                <Link className="btn btn-line" href="/contact/?intent=clinic">
                  Book a clinic
                </Link>
              </div>
            </div>
            <div className="c-links">
              <ProfileList />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
