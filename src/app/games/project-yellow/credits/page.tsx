import Link from 'next/link'
import { PageHead } from '@/components/Parts'
import { OWNER, SITE_NAME } from '@/content/site'
import credits from '@/content/project-yellow-credits.json'
import { pageMeta } from '@/lib/meta'

export const metadata = pageMeta({
  title: 'Project Yellow credits',
  description: 'Miolajtech’s Project Yellow development credits, asset creators and acknowledgements.',
  path: '/games/project-yellow/credits/',
})

export default function CreditsPage() {
  const entries = [...credits.entries].sort((a, b) => Number(b.attributionRequired) - Number(a.attributionRequired))
  return (
    <>
      <PageHead eyebrow="Project Yellow · Working title" title="Game credits." desc="The studio behind the game, and the creators whose work supports it." />
      <section aria-labelledby="game-studio">
        <div className="wrap game-credits">
          <h2 id="game-studio">Developed by {SITE_NAME}</h2>
          <p>Creative direction: {OWNER}.</p>
          <p>Built with Unity and Blender. Our in-game credits are included with the game and remain available offline.</p>
          <p className="muted">This is the development asset register, not a final release list. It includes acknowledged asset packs and references; the shipped-asset list will be reviewed before release.</p>
          <h2 id="asset-acknowledgements">Asset acknowledgements</h2>
          <ol className="game-credit-list" aria-labelledby="asset-acknowledgements">
            {entries.map((entry) => {
              const linkable = entry.url.startsWith('https://') && !/[<>]/.test(entry.url)
              return (
                <li key={entry.id}>
                  <h3>{entry.title}</h3>
                  <p>{entry.creator}</p>
                  <p className="muted">{entry.licence}{entry.modified ? ' · Modified for the project' : ''}</p>
                  {linkable ? <a href={entry.url}>Source and licence information</a> : <p className="muted">Source: {entry.source}</p>}
                </li>
              )
            })}
          </ol>
          <Link className="btn btn-line" href="/games/">Back to the game</Link>
        </div>
      </section>
    </>
  )
}
