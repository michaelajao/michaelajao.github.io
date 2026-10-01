import Link from 'next/link'
import type { ReactNode } from 'react'
import { Arr, Icon } from './Brand'
import { EARLY, PAPERS, PREPRINTS, TALKS, TAG_CLASS, type Paper } from '@/content/research'
import { SERVICES } from '@/content/services'
import { PROFILE_LINKS, PROFILES } from '@/content/site'
import type { Entry } from '@/content/profile'

/** Section heading used on the home page and inside sections. */
export function SecHead({ id, title, desc }: { id: string; title: string; desc: ReactNode }) {
  return (
    <div className="sec-head">
      <h2 id={id}>{title}</h2>
      <p className="desc">{desc}</p>
    </div>
  )
}

/** Top of an inner page: eyebrow, h1 and standfirst. */
export function PageHead({ eyebrow, title, desc, children }: { eyebrow: string; title: string; desc?: ReactNode; children?: ReactNode }) {
  return (
    <section className="pg-head" aria-labelledby="pg-title">
      <div className="wrap">
        <p className="mono muted pg-eyebrow">{eyebrow}</p>
        <h1 className="pg-h1" id="pg-title">
          {title}
        </h1>
        {desc ? <p className="pg-desc">{desc}</p> : null}
        {children}
      </div>
    </section>
  )
}

function ExtLink({ href, label, aria }: { href: string; label: string; aria?: string }) {
  return (
    <a href={href} aria-label={aria}>
      {label} <Arr />
    </a>
  )
}

export function PaperLedger({ limit }: { limit?: number }) {
  const list: Paper[] = limit ? PAPERS.slice(0, limit) : PAPERS
  return (
    <ol className="pl">
      {list.map((p) => (
        <li key={p.title}>
          <div className="m">
            <span className="mono date">{p.date}</span>
            <span className="mono venue">{p.venue}</span>
            <span className={TAG_CLASS[p.kind]}>{p.tag}</span>
          </div>
          <div className="b">
            <h3>{p.title}</h3>
            <p className="sum">{p.summary}</p>
            <p className="role">{p.role}</p>
          </div>
          <div className="lk">
            {p.links.map((l) => (
              <ExtLink key={l.href} href={l.href} label={l.label} aria={l.aria} />
            ))}
          </div>
        </li>
      ))}
    </ol>
  )
}

export function EarlyWork() {
  return (
    <div className="early early-open">
      <h3 className="early-h">Earlier work from my PhD</h3>
      <ol>
        {EARLY.map((e) => (
          <li key={e.title}>
            <span className="mono m">{e.meta}</span>
            <div className="b">
              {e.title}
              <small>{e.note}</small>
            </div>
            <div className="lk">
              {e.links.map((l, i) => (
                <span key={l.href}>
                  {i ? ' ' : ''}
                  <a href={l.href} aria-label={l.aria}>
                    {l.label} →
                  </a>
                </span>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}

export function PreprintList() {
  return (
    <ul className="pre-list">
      {PREPRINTS.map((p) => (
        <li key={p.title}>
          <div className="tags">
            <span className={TAG_CLASS[p.kind]}>{p.tag}</span>
            <span className="mono muted">{p.meta}</span>
          </div>
          <h4>{p.title}</h4>
          <p>{p.text}</p>
          {p.link ? (
            <a className="ulk" href={p.link.href}>
              {p.link.label} <Arr>↗</Arr>
            </a>
          ) : null}
        </li>
      ))}
    </ul>
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
            <span className={TAG_CLASS[t.kind]}>{t.tag}</span>
          </span>
        </li>
      ))}
    </ol>
  )
}

/** Service rows on the dark band. `more` expands on hover and focus. */
export function ServiceRows() {
  return (
    <ul className="svc">
      {SERVICES.map((s, i) => (
        <li key={s.id} id={`svc-${s.id}`} className={i === 0 ? 'lead-row' : undefined}>
          <div className="row">
            <div className="ttl">
              {s.kick ? <span className="mono kick">{s.kick}</span> : null}
              <h3>{s.title}</h3>
            </div>
            <p>{s.text}</p>
            <Link className="go" href={`/contact/?intent=${s.intent}`}>
              <span>{s.cta}</span>
              <Arr />
            </Link>
            <div className="more">
              <div>
                <p>{s.more}</p>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}

export function Roles({ items, label }: { items: Entry[]; label?: string }) {
  return (
    <>
      {label ? <p className="mono roles-label">{label}</p> : null}
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
    </>
  )
}

export function ProfileLinks({ extra = true }: { extra?: boolean }) {
  return (
    <p className="profile-links">
      {PROFILE_LINKS.map((p) => (
        <a key={p.id} href={p.href} rel="noopener">
          <Icon id={p.id} />
          {p.label}
        </a>
      ))}
      {extra ? (
        <a href={PROFILES.pure} rel="noopener">
          Coventry Pure
        </a>
      ) : null}
    </p>
  )
}

export function ProfileList() {
  return (
    <ul className="profiles">
      {PROFILE_LINKS.map((p) => (
        <li key={p.id}>
          <a href={p.href} rel="noopener">
            <span className="pfl">
              <Icon id={p.id} />
              {p.label}
            </span>{' '}
            <Arr>↗</Arr>
          </a>
        </li>
      ))}
    </ul>
  )
}
