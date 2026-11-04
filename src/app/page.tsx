import Image from 'next/image'
import ContactForm from '@/components/ContactForm'
import Portrait from '@/components/Portrait'
import PublicationList from '@/components/PublicationList'
import { ProfileLinks, Roles, SecHead, TalksFeed } from '@/components/Parts'
import { ABOUT_PARAGRAPHS, EDUCATION, MEMBERSHIPS, ROLES, TEACHING } from '@/content/profile'
import { PUBLICATIONS } from '@/content/publications'
import { AREAS } from '@/content/research'


export default function Home() {
  return (
    <>
      <section className="ac-top" id="top" aria-labelledby="ac-name">
        <div className="wrap ac-top-grid">
          <div className="ac-id">
            <p className="mono muted">Applied machine learning · Generative AI · Scientific modelling</p>
            <h1 id="ac-name">Michael Ajao-Olarinoye</h1>
            <p className="ac-post">
              <strong>Research Fellow</strong>, Coventry University
              <br />
              <strong>Lecturer in Computing</strong>, QAHE
            </p>
            <p className="ac-quals mono muted">PhD · AFHEA</p>
            <ProfileLinks />
            <p className="ac-cta">
              <a className="btn btn-fill" href="/michael_cv.pdf">
                Download CV
              </a>
              <a className="btn btn-line" href="#publications">
                Publications
              </a>
            </p>
          </div>
          <Portrait />
        </div>
      </section>

      <aside className="ac-gt" aria-label="Recognition">
        <div className="wrap">
          <p className="mono">UK Global Talent · Exceptional Promise</p>
          <p className="ac-gt-text">Endorsed by the Royal Academy of Engineering, September 2026.</p>
        </div>
      </aside>

      <section id="about" aria-labelledby="h-about">
        <div className="wrap ac-narrow">
          <h2 id="h-about">About</h2>
          {ABOUT_PARAGRAPHS.map((p) => (
            <p className="ac-prose" key={p}>
              {p}
            </p>
          ))}
        </div>
      </section>

      <section id="research" aria-labelledby="h-research">
        <div className="wrap">
          <SecHead id="h-research" title="Research" />
          {AREAS.map((a) => (
            <div className="ac-theme" key={a.id}>
              <div>
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
                <p className="ac-theme-with">{a.with}</p>
                <a className="ulk" href="#publications" data-topic={a.id}>
                  See the papers ({PUBLICATIONS.filter((p) => p.areas.includes(a.id)).length})
                </a>
              </div>
              <div className="ac-theme-figs">
                {a.figures.map((f) => (
                  <figure className="ac-fig" key={f.src} data-reveal>
                    <a href={f.src} aria-label={`Open full size: ${f.caption}`}>
                      <Image src={f.src} alt={f.alt} width={f.width} height={f.height} sizes="(max-width: 720px) 100vw, 640px" loading="lazy" />
                    </a>
                    <figcaption>
                      <span className="mono">{f.source}</span>
                      {f.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="publications" aria-labelledby="h-pubs">
        <div className="wrap ac-narrow">
          <SecHead id="h-pubs" title="Publications" desc="Newest first, grouped by status. Filter by topic or status, and copy a citation from any entry." />
          <PublicationList />
        </div>
      </section>

      <section id="talks" className="talks-sec" aria-labelledby="h-talks">
        <div className="wrap">
          <SecHead id="h-talks" title="Talks and awards" />
          <TalksFeed />
        </div>
      </section>

      <section id="teaching" aria-labelledby="h-teaching">
        <div className="wrap ac-narrow">
          <SecHead id="h-teaching" title="Teaching" />
          <Roles items={TEACHING} />
        </div>
      </section>

      <section id="cv" aria-labelledby="h-cv">
        <div className="wrap">
          <SecHead
            id="h-cv"
            title="CV"
            desc={
              <a className="ulk" href="/michael_cv.pdf">
                Download the full CV (PDF)
              </a>
            }
          />
          <div className="ac-cv">
            <div>
              <h3>Research and industry positions</h3>
              <Roles items={ROLES} />
            </div>
            <div>
              <h3>Education</h3>
              <Roles items={EDUCATION} />
              <h3>Memberships and service</h3>
              <Roles items={MEMBERSHIPS} />
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact" aria-labelledby="h-contact">
        <div className="wrap c-grid">
          <div className="c-intro">
            <h2 id="h-contact">Contact</h2>
            <p className="ac-prose">For research collaboration, speaking and peer review, send me a message here.</p>
            <details className="ac-privacy" id="privacy">
              <summary>Privacy notice</summary>
              <p>
                This site is run by Dr Michael Ajao-Olarinoye, Coventry, UK. If you use this form I receive your name, email address, the type of enquiry and your message, and I use them only to reply. This is based on your consent, given by ticking the box, which you can withdraw at any time.
              </p>
              <p>
                The form is processed by{' '}
                <a href="https://formspree.io/legal/privacy-policy/" rel="noopener">
                  Formspree
                </a>
                , based in the United States, so your information may be transferred outside the UK. The site is hosted on{' '}
                <a href="https://pages.github.com/" rel="noopener">
                  GitHub Pages
                </a>
                , which may log technical information such as your IP address.
              </p>
              <p>There are no analytics, advertising or tracking cookies. If you choose a colour theme, that one choice is saved in your browser. Fonts are served from this site.</p>
              <p>
                I keep messages for as long as I need to reply, and normally for up to 12 months afterwards, then delete them. You can ask me to show, correct or delete what I hold about you using this form. You can complain to the{' '}
                <a href="https://ico.org.uk/" rel="noopener">
                  Information Commissioner’s Office
                </a>
                .
              </p>
            </details>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  )
}
