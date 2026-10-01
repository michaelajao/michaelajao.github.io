import Link from 'next/link'
import { Arr } from '@/components/Brand'
import { PageHead } from '@/components/Parts'
import { INTEGRITY } from '@/components/Tutoring'
import { TUTOR_GROUPS } from '@/content/services'
import { PROFILES } from '@/content/site'
import { pageMeta } from '@/lib/meta'

export const metadata = pageMeta({
  title: 'Tutoring',
  description: 'One-to-one online tutoring for university and MSc students, PhD students and researchers, and professionals learning Python, machine learning and generative AI. Concept teaching and feedback on your own work.',
  path: '/services/tutoring/',
})

export default function TutoringPage() {
  return (
    <>
      <PageHead
        eyebrow="Services · Tutoring"
        title="Learn it properly."
        desc="One-to-one tutoring from a PhD scientist who teaches computing for a living. We start with a short intro call to check that I am the right tutor."
      >
        <div className="pg-actions">
          <Link className="btn btn-fill" href="/contact/?intent=tutoring">
            Enquire about tutoring <Arr />
          </Link>
        </div>
      </PageHead>

      <section className="tut" aria-labelledby="h-who">
        <div className="wrap">
          <div className="t-two">
            <div className="t-l">
              <h2 id="h-who">Who I teach</h2>
              <p>Four groups, each with its own subjects. Tell me where you are starting from and what you want to be able to do.</p>
            </div>
            <div className="t-r">
              <ul className="seg">
                {TUTOR_GROUPS.map((g) => (
                  <li key={g.title}>
                    <h3>{g.title}</h3>
                    <span className={g.wip ? 'tag tag-wip' : 'tag'}>{g.tag}</span>
                    <p>{g.subjects}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="h-format">
        <div className="wrap">
          <div className="t-two">
            <div className="t-l">
              <h2 id="h-format">What a session looks like</h2>
              <p>One to one, online, with screen sharing and shared notebooks. You bring a question, a draft or a piece of code of your own.</p>
            </div>
            <div className="t-r">
              <ul className="plain">
                <li>Sessions are one to one and online, usually 60 minutes.</li>
                <li>You bring your own question, draft or code. For example, bring a draft evaluation chapter and leave with a list of methodological gaps and a plan to close them.</li>
                <li>A short written summary follows by email after each session.</li>
                <li>We start with a short intro call, so we can check that I am the right tutor before you book anything.</li>
                <li>Cancel or move a session with 24 hours’ notice at no charge.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="tut" aria-labelledby="h-integrity">
        <div className="wrap">
          <div className="t-two">
            <div className="t-l">
              <h2 id="h-integrity">Academic integrity</h2>
              <p>The work you submit stays yours.</p>
            </div>
            <div className="t-r stack">
              <div className="statement">
                <h3>You do the work. I help you understand it.</h3>
                <p>{INTEGRITY}</p>
                <p>I do not help anyone pass off someone else’s work as their own, and I apply the same rules to every student, wherever you study.</p>
              </div>
              <div>
                <p className="mono muted" style={{ margin: '0 0 8px' }}>
                  I will
                </p>
                <ul className="plain">
                  <li>Explain concepts with examples that differ from your assessment.</li>
                  <li>Explain in general terms what a brief or its marking criteria ask for.</li>
                  <li>Give feedback on your own drafts and plans.</li>
                  <li>Point out the type of mistake in your code so you can find it.</li>
                  <li>Show you tools that your institution allows.</li>
                </ul>
              </div>
              <div>
                <p className="mono muted" style={{ margin: '0 0 8px' }}>
                  I will not
                </p>
                <ul className="plain no">
                  <li>Write, rewrite, edit or complete anything you will submit.</li>
                  <li>Give model answers to a live assessment.</li>
                  <li>Run your analysis for you.</li>
                  <li>Accept a request to do the work for you, however it is phrased.</li>
                  <li>Tutor anyone on an assessment I set, mark, moderate or supervise.</li>
                </ul>
              </div>
              <div className="statement soft">
                <h3>Who I cannot tutor</h3>
                <p>I cannot tutor students I teach, supervise or assess, or students at institutions where I work. The contact form asks where you study. If I cannot take you on, I will say so straight away and suggest where to look.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="h-safe">
        <div className="wrap">
          <div className="t-two">
            <div className="t-l">
              <h2 id="h-safe">Safeguarding</h2>
              <p>For school students, and for everyone’s data.</p>
            </div>
            <div className="t-r stack">
              <div className="statement">
                <h3>School tutoring is not open yet</h3>
                <p>I will open it only once my safeguarding checks and written policy are in place. Until then I am not taking school-age students, and I do not claim a certificate I do not yet hold.</p>
                <p>When it opens, these commitments apply:</p>
              </div>
              <ul className="plain">
                <li>Written consent from a parent or guardian before the first session, and a responsible adult within earshot throughout.</li>
                <li>Sessions only through a booking link that I send you, with cameras on. No contact through private messaging apps.</li>
                <li>Recordings only with written consent, stored securely and deleted on request.</li>
                <li>Any concern is reported to the parent, school or local authority.</li>
              </ul>
              <p className="sd-note">
                Parents can register interest through the <Link href="/contact/?intent=tutoring">contact form</Link>. Please give a parent or guardian name and email only, never a child’s details. How your data is handled is set out on the <Link href="/privacy/">privacy page</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="tut" aria-labelledby="h-start">
        <div className="wrap">
          <div className="t-two">
            <div className="t-l">
              <h2 id="h-start">How to start</h2>
              <p>I cannot promise grades, jobs or salaries. Sessions support your own study.</p>
            </div>
            <div className="t-r stack">
              <ol className="plain">
                <li>Tell me your level, subject and what you need through the contact form. Please confirm that the work you submit will be your own.</li>
                <li>We have a short intro call to check fit.</li>
                <li>If we both think it is a good fit, we agree how and when to book sessions.</li>
                <li>After each session you receive a short email summary of what we covered.</li>
              </ol>
              <div className="pg-actions" style={{ marginTop: 0 }}>
                <Link className="btn btn-fill" href="/contact/?intent=tutoring">
                  Enquire about tutoring <Arr />
                </Link>
                <a className="btn btn-line" href={PROFILES.linkedin} rel="noopener">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
