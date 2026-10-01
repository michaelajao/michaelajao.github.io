import Link from 'next/link'
import { PageHead } from '@/components/Parts'
import { pageMeta } from '@/lib/meta'

export const metadata = pageMeta({
  title: 'Terms',
  description: 'Plain-English terms for using this website: what the site is for, its content, links, no professional advice, how services are agreed, and which law applies.',
  path: '/terms/',
})

export default function TermsPage() {
  return (
    <>
      <PageHead eyebrow="Legal" title="Terms of use" desc="The ground rules for using this website, in plain English." />
      <section aria-label="Terms of use">
        <div className="wrap">
          <div className="prose">
            <p className="notice">
              <strong>General template, to be reviewed.</strong> These terms are a plain-English starting point for a sole-practitioner website in the UK. They have not been reviewed by a solicitor and should be checked before they are relied on. Terms for paid work are agreed separately in writing.
            </p>
            <p className="updated mono">Last updated: October 2026</p>

            <h2>About this site</h2>
            <p>
              This website is run by Dr Michael Ajao-Olarinoye, trading as miolajtech, based in Coventry, UK. miolajtech is a trading name, not a separate company. By using the site you agree to these terms. If you do not agree, please do not use it.
            </p>

            <h2>Information on this site</h2>
            <p>
              I try to keep the content accurate and up to date, but it is general information and may be out of date or incomplete. The status of papers, preprints and projects is described as at the date shown and can change. Nothing on this site is professional, legal, financial, tax, accounting or medical advice.
            </p>

            <h2>My views are my own</h2>
            <p>Opinions and services on this site are my own. They are not those of Coventry University, QAHE or any other employer or organisation I work with.</p>

            <h2>Services</h2>
            <p>
              Descriptions of services are not an offer that you can accept. Any paid work starts only after we agree a written scope, and that agreement sets out what is and is not included, how it is delivered and the terms that apply. Tutoring is teaching and feedback on your own work; I do not write or complete work that you submit for assessment. Sending an enquiry does not create a contract, and I may decline an enquiry.
            </p>

            <h2>Content and copyright</h2>
            <p>
              The text, design and logo on this site belong to me unless stated otherwise. You may link to the site and quote short extracts with credit. Please do not copy the site or reuse the logo without asking. Published papers remain the property of their publishers and authors under their own licences. Third-party names and logos belong to their owners.
            </p>

            <h2>Links to other sites</h2>
            <p>The site links to other websites, such as publishers, code repositories and social profiles. I do not control them and am not responsible for their content or how they handle your information.</p>

            <h2>Using the contact form</h2>
            <p>
              Please use the form for genuine enquiries only and do not send passwords, confidential documents or children’s details. How your information is handled is explained on the <Link href="/privacy/">privacy page</Link>.
            </p>

            <h2>Limits on my responsibility</h2>
            <p>
              The site is provided as it is. To the extent the law allows, I am not liable for loss arising from using the site or relying on its content. Nothing in these terms limits liability that cannot be limited by law, including for death or personal injury caused by negligence or for fraud.
            </p>

            <h2>Changes and law</h2>
            <p>I may update these terms and will change the date above when I do. These terms are governed by the law of England and Wales, and the courts of England and Wales have jurisdiction, although this does not affect any rights you have as a consumer in another part of the UK.</p>

            <h2>Contact</h2>
            <p>
              Questions about these terms can be sent through the <Link href="/contact/">contact form</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
