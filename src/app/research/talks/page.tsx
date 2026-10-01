import Link from 'next/link'
import { Arr } from '@/components/Brand'
import { PageHead, TalksFeed } from '@/components/Parts'
import { pageMeta } from '@/lib/meta'

export const metadata = pageMeta({
  title: 'Talks, prizes and service',
  description: 'Invited talks, conference talks, seminars, posters, awards and service, newest first. Available for seminars, conference talks and workshops.',
  path: '/research/talks/',
})

export default function TalksPage() {
  return (
    <>
      <PageHead
        eyebrow="Research · Talks"
        title="Talks, prizes and service"
        desc="Invited talks, conference talks, seminars, posters, awards and service, newest first. Available for seminars, conference talks and workshops."
      />
      <section className="talks-sec" aria-label="Talks, prizes and service">
        <div className="wrap">
          <TalksFeed />
          <div className="talks-foot">
            <Link className="ulk" href="/contact/?intent=speaking">
              Invite me to speak <Arr />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
