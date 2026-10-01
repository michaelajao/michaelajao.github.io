import Link from 'next/link'
import { PageHead } from '@/components/Parts'
import { PROFILES } from '@/content/site'
import { pageMeta } from '@/lib/meta'

export const metadata = pageMeta({
  title: 'Privacy',
  description: 'How this site handles personal information: what the contact form collects, who processes it, cookies and local storage, and your rights under UK data protection law.',
  path: '/privacy/',
})

export default function PrivacyPage() {
  return (
    <>
      <PageHead eyebrow="Legal" title="Privacy" desc="What this site does with your information, in plain English." />
      <section aria-label="Privacy notice">
        <div className="wrap">
          <div className="prose">
            <p className="notice">
              <strong>General template, to be reviewed.</strong> This page is a plain-English starting point for a sole-practitioner website in the UK. It has not been reviewed by a solicitor and should be checked before it is relied on.
            </p>
            <p className="updated mono">Last updated: October 2026</p>

            <h2>Who I am</h2>
            <p>
              This website is run by Dr Michael Ajao-Olarinoye, trading as miolajtech, based in Coventry, UK. I decide how the personal information described on this page is used, which makes me the “controller” under UK data protection law. To reach me about your data, use the <Link href="/contact/">contact form</Link>.
            </p>

            <h2>What I collect</h2>
            <p>
              <strong>Contact form.</strong> If you use the contact form, I receive what you type: your name, your email address, the type of enquiry, your message and, for tutoring enquiries, where you study. Please do not include passwords, confidential documents or any details about a child.
            </p>
            <p>
              <strong>Nothing else on purpose.</strong> I do not ask you to create an account, and I do not run advertising or tracking tools on this site.
            </p>

            <h2>Why I use it, and on what basis</h2>
            <ul>
              <li>To read your message and reply to you. This is based on your consent, which you give by ticking the box on the form, and on my legitimate interest in answering enquiries I have invited.</li>
              <li>To keep a record of work I do for you, and for tax and accounting records if you become a client. This is based on a legal obligation and on contract.</li>
            </ul>
            <p>I do not sell your information, and I do not use it to send marketing you did not ask for.</p>

            <h2>Who handles it</h2>
            <p>
              The contact form is processed by <a href="https://formspree.io/legal/privacy-policy/" rel="noopener">Formspree</a>, a form service that receives your submission and passes it to me by email. Formspree is based in the United States, so your information may be transferred outside the UK. Their own privacy policy explains how they handle it.
            </p>
            <p>
              The site is hosted on <a href="https://pages.github.com/" rel="noopener">GitHub Pages</a>. Like any web host, GitHub may log technical information such as your IP address when you visit.
            </p>

            <h2>Cookies and local storage</h2>
            <p>
              This site does not set analytics, advertising or tracking cookies. If you choose the light or dark colour theme with the button in the header, the site saves that single choice in your browser’s local storage so that it can remember it. It is not sent anywhere and contains nothing about you. Fonts are served from this site, not from a third party.
            </p>
            <p>
              Links to other sites, such as LinkedIn, GitHub, ORCID, Google Scholar and YouTube, take you to services that have their own privacy policies and cookies.
            </p>

            <h2>How long I keep it</h2>
            <p>I keep enquiry messages for as long as I need to reply, and normally for up to 12 months afterwards if no work follows, then delete them. Records of paid work are kept for as long as tax law requires.</p>

            <h2>Your rights</h2>
            <p>
              You can ask me to show you the information I hold about you, correct it, delete it, restrict or object to how I use it, or move it. You can withdraw your consent at any time. Use the <Link href="/contact/">contact form</Link> to ask. If you are unhappy with how I handle your information, you can complain to the Information Commissioner’s Office at{' '}
              <a href="https://ico.org.uk/" rel="noopener">
                ico.org.uk
              </a>
              .
            </p>

            <h2>Children</h2>
            <p>This site is not aimed at children. Please do not send me a child’s name or personal details. If you are a parent enquiring about tutoring, give your own name and email only.</p>

            <h2>Changes</h2>
            <p>
              If I change how the site handles information, I will update this page and its date. Profiles on other sites, such as{' '}
              <a href={PROFILES.linkedin} rel="noopener">
                LinkedIn
              </a>
              , are covered by those sites’ own policies.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
