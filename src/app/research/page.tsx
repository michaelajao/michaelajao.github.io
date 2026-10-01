import Link from 'next/link'
import ResearchMap from '@/components/ResearchMap'
import { Arr } from '@/components/Brand'
import { PageHead } from '@/components/Parts'
import { pageMeta } from '@/lib/meta'

export const metadata = pageMeta({
  title: 'Research',
  description: 'Four research areas: physics-informed models of blood flow, scientific machine learning, generative AI and agents, and graph and hybrid models for health systems. Papers, preprints and projects with their status.',
  path: '/research/',
})

export default function ResearchPage() {
  return (
    <>
      <PageHead
        eyebrow="Research"
        title="Four areas, and the work behind each"
        desc="Each area has a short description, then the papers, preprints and projects behind it with their status. Hover or focus an area to see its work."
      >
        <div className="pg-actions">
          <Link className="btn btn-fill" href="/research/papers/">
            Papers and preprints <Arr />
          </Link>
          <Link className="btn btn-line" href="/research/talks/">
            Talks, prizes and service
          </Link>
        </div>
      </PageHead>
      <section aria-label="Research areas and outputs">
        <div className="wrap">
          <ResearchMap />
          <div className="sec-foot">
            <p className="earlier-line" style={{ margin: 0 }}>
              Code for each project, where it is ready to share, is on <a href="https://github.com/michaelajao">GitHub</a>. Unpublished work is shown with its status only, without results.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
