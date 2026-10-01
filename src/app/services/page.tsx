import Link from 'next/link'
import { Arr } from '@/components/Brand'
import { PageHead, SecHead, ServiceRows } from '@/components/Parts'
import { HOW, SERVICES } from '@/content/services'
import { pageMeta } from '@/lib/meta'

export const metadata = pageMeta({
  title: 'Services',
  description: 'Complete automated business systems, AI agents and workflows, data science and applied ML, training and workshops, and research partnering. The practice of Dr Michael Ajao-Olarinoye, scoped with you first.',
  path: '/services/',
})

export default function ServicesPage() {
  return (
    <>
      <PageHead
        eyebrow="Services · miolajtech"
        title="Work with me"
        desc={
          <>
            miolajtech is the practice of Dr Michael Ajao-Olarinoye. Independent work for businesses in the UK, Nigeria and around the world, delivered by me and scoped with you first.
          </>
        }
      >
        <div className="pg-actions">
          <Link className="btn btn-fill" href="/contact/?intent=project">
            Request a quote <Arr />
          </Link>
          <Link className="btn btn-line" href="/contact/?intent=clinic">
            Book a clinic
          </Link>
        </div>
      </PageHead>

      <section className="band" aria-labelledby="h-offer">
        <div className="wrap">
          <SecHead id="h-offer" title="What I offer" desc={<>Five kinds of work. The first is the main one: a complete system that runs your business processes together. Each can start with a conversation.</>} />
          <ServiceRows />
          <div className="how" aria-label="How we work">
            {HOW.map((h) => (
              <div key={h.title}>
                <p className="mono">{h.when}</p>
                <h3>{h.title}</h3>
                <p>{h.text}</p>
              </div>
            ))}
          </div>
          <div className="cta-line">
            <Link className="btn btn-fill" href="/contact/?intent=project">
              Request a quote <Arr />
            </Link>
          </div>
          <p className="svc-clinic">
            Not sure where to start? <Link href="/contact/?intent=clinic">Book a clinic</Link>
          </p>
        </div>
      </section>

      <section aria-labelledby="h-detail">
        <div className="wrap">
          <SecHead id="h-detail" title="What each one includes" desc="What you can expect in each kind of work, and how it is checked before and after it goes live." />
          <ol className="sdl">
            {SERVICES.map((s) => (
              <li className="sdetail" key={s.id} id={s.id}>
                <div className="sd-t">
                  {s.kick ? <span className="mono kick">{s.kick}</span> : null}
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <p style={{ marginTop: 18 }}>
                    <Link className="tl" href={`/contact/?intent=${s.intent}`}>
                      <span>{s.cta}</span>
                      <Arr />
                    </Link>
                  </p>
                </div>
                <div className="sd-b">
                  <div>
                    <h4>What it includes</h4>
                    <ul>
                      {s.includes.map((i) => (
                        <li key={i}>{i}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4>How it is checked</h4>
                    <ul>
                      {s.checks.map((i) => (
                        <li key={i}>{i}</li>
                      ))}
                    </ul>
                  </div>
                  {s.note ? <p className="sd-note">{s.note}</p> : null}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="case" aria-labelledby="h-case">
        <div className="wrap">
          <div className="case-grid">
            <div className="case-l">
              <span className="mono muted">Example</span>
              <h2 id="h-case">Papromakeovers</h2>
            </div>
            <div className="case-r">
              <p>
                A booking site for a makeup artist in the UK. Clients choose a service, pick an available date and time and book online, and the owner manages availability from a private admin area. Confirmations go out by email and invoices are raised automatically.
              </p>
              <p>It was scoped in writing first, then built and released in stages, so the business could use each part as soon as it was ready.</p>
              <p>
                <a className="ulk" href="https://papromakeovers.com/" rel="noopener">
                  Visit papromakeovers.com <Arr>↗</Arr>
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="h-tut-teaser">
        <div className="wrap">
          <SecHead
            id="h-tut-teaser"
            title="Tutoring"
            desc="One-to-one tutoring for university students, researchers and professionals. I teach and give feedback on your own work."
          />
          <div className="sec-foot">
            <Link className="btn btn-fill" href="/services/tutoring/">
              How tutoring works <Arr />
            </Link>
            <Link className="btn btn-line" href="/contact/?intent=tutoring">
              Enquire about tutoring
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
