import { EarlyWork, PageHead, PaperLedger, PreprintList } from '@/components/Parts'
import { pageMeta } from '@/lib/meta'

export const metadata = pageMeta({
  title: 'Papers and preprints',
  description: 'Published and accepted papers, earlier work from my PhD, and preprints and work in progress, each with its status, my role and links to the paper and code.',
  path: '/research/papers/',
})

export default function PapersPage() {
  return (
    <>
      <PageHead
        eyebrow="Research · Papers"
        title="Papers, with their status"
        desc="Published and accepted work, newest first. Each entry shows where it appeared and what my part was."
      />
      <section aria-label="Papers">
        <div className="wrap">
          <PaperLedger />
          <EarlyWork />

          <div className="sub-head" id="preprints">
            <h2>Preprints and work in progress</h2>
            <p className="mono">Status as it stands</p>
          </div>
          <PreprintList />
          <p className="earlier-line">
            Code for each project, where it is ready to share, is on <a href="https://github.com/michaelajao">GitHub</a>. Google Scholar and ORCID list the full record: <a href="https://scholar.google.com/citations?user=CXrGkfEAAAAJ&hl=en">Google Scholar</a>, <a href="https://orcid.org/0000-0003-2763-8293">ORCID</a>.
          </p>
        </div>
      </section>
    </>
  )
}
