import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Page not found | Michael Ajao-Olarinoye',
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <section className="ac-404" aria-labelledby="h-nf">
      <div className="wrap">
        <p className="mono muted">404</p>
        <h1 id="h-nf">That page does not exist.</h1>
        <p className="ac-prose">It may have moved, or the address may be mistyped. Everything on this site is on one page.</p>
        <Link className="btn btn-fill" href="/">
          Back to the home page
        </Link>
      </div>
    </section>
  )
}
