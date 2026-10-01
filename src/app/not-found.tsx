import Link from 'next/link'
import { Arr } from '@/components/Brand'

export default function NotFound() {
  return (
    <section className="nf" aria-labelledby="h-nf" style={{ borderTop: 0 }}>
      <div className="wrap">
        <p className="mono muted pg-eyebrow">404</p>
        <h1 className="pg-h1" id="h-nf">
          That page does not exist.
        </h1>
        <p className="pg-desc">It may have moved, or the address may be mistyped.</p>
        <div className="pg-actions">
          <Link className="btn btn-fill" href="/">
            Back to the home page <Arr />
          </Link>
          <Link className="btn btn-line" href="/contact/">
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  )
}
