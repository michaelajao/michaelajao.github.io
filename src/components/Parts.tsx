import type { ReactNode } from 'react'
import { Icon } from './Brand'
import type { Entry } from '@/content/profile'
import { PROFILE_LINKS, PROFILES } from '@/content/site'
import { TALKS } from '@/content/research'

/** Section title with a short standfirst. */
export function SecHead({ id, title, desc }: { id: string; title: string; desc?: ReactNode }) {
  return (
    <div className="ac-sec-head">
      <h2 id={id}>{title}</h2>
      {desc ? <p>{desc}</p> : null}
    </div>
  )
}

export function TalksFeed() {
  return (
    <ol className="feed">
      {TALKS.map((t) => (
        <li key={t.head}>
          <span className="mono d">{t.date}</span>
          <div className="e">
            <b>{t.head}</b>
            <i>{t.sub}</i>
          </div>
          <span className="t">
            <span className={t.className}>{t.tag}</span>
          </span>
        </li>
      ))}
    </ol>
  )
}

export function Roles({ items }: { items: Entry[] }) {
  return (
    <dl className="roles">
      {items.map((r) => (
        <div key={r.title}>
          <dt>
            {r.title}
            {r.small ? <small>{r.small}</small> : null}
          </dt>
          <dd>{r.when}</dd>
        </div>
      ))}
    </dl>
  )
}

export function ProfileLinks() {
  return (
    <p className="profile-links">
      {PROFILE_LINKS.map((p) => (
        <a key={p.id} href={p.href} rel="noopener">
          <Icon id={p.id} />
          {p.label}
        </a>
      ))}
      <a href={PROFILES.pure} rel="noopener">
        Coventry Pure
      </a>
    </p>
  )
}
