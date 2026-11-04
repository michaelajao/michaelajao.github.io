import Image from 'next/image'
import Link from 'next/link'
import { Arr } from '@/components/Brand'
import { PageHead } from '@/components/Parts'
import { pageMeta } from '@/lib/meta'

export const metadata = pageMeta({
  title: 'Games',
  description: 'Project Yellow is miolajtech’s Lagos danfo driving career, in development for Windows PC. Explore the game’s direction and development screenshots.',
  path: '/games/',
})

export default function GamesPage() {
  return (
    <>
      <PageHead eyebrow="Games by miolajtech" title="Games rooted in place." desc="Our first game follows a working driver, an ageing yellow bus and the streets of Lagos." />
      <section aria-labelledby="project-yellow-title">
        <div className="wrap game-feature">
          <div className="game-copy">
            <p className="mono muted">In development · Windows PC</p>
            <h2 id="project-yellow-title" className="game-title">Project Yellow</h2>
            <p className="mono muted">Working title</p>
            <p className="game-lead">Drive the danfo. Carry Lagos. Keep the bus alive.</p>
            <p>A driving career about earning a living behind the wheel of a Lagos danfo. Learn the route, collect fares, get to know your passengers and look after the bus that keeps you working.</p>
            <dl className="game-facts">
              <div><dt>Developer</dt><dd>miolajtech</dd></div>
              <div><dt>Setting</dt><dd>Lagos, Nigeria</dd></div>
              <div><dt>Platform target</dt><dd>Windows PC</dd></div>
              <div><dt>Release</dt><dd>Date to be announced</dd></div>
            </dl>
            <div className="pg-actions">
              <Link className="btn btn-fill" href="/contact/">Ask about the game <Arr /></Link>
              <Link className="btn btn-line" href="/games/project-yellow/credits/">Credits and acknowledgements</Link>
            </div>
          </div>
          <figure className="game-visual">
            <Image src="/games/project-yellow/title.png" alt="Development screenshot: a yellow danfo and passengers beside a Lagos flyover, with the Project Yellow title menu." width={1920} height={1080} sizes="(max-width: 900px) 100vw, 60vw" priority />
            <figcaption>Development capture, October 2026. Visuals and features are still being refined.</figcaption>
          </figure>
        </div>
      </section>
      <section className="band" aria-labelledby="game-direction">
        <div className="wrap">
          <p className="mono">The design direction</p>
          <h2 id="game-direction">A livelihood, one return run at a time.</h2>
          <div className="game-direction">
            <div><h3>A working day</h3><p>The planned day is several runs from the park to the terminus and back. You earn from the trips you actually drive and the fares you collect.</p></div>
            <div><h3>The life between runs</h3><p>Fuel, repairs, food and conversations at the park are part of keeping the day going. Lagos is more than a road to drive along.</p></div>
            <div><h3>A bus of your own</h3><p>The career is being developed towards owning your first bus, building relationships and eventually growing a small fleet.</p></div>
          </div>
          <p className="game-development-note">These are development goals. The game is not available for sale yet.</p>
        </div>
      </section>
    </>
  )
}
