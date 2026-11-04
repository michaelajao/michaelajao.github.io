'use client'

import Image from 'next/image'
import { useEffect, useMemo, useState } from 'react'
import { AREAS } from '@/content/research'
import { byDate, citationOf, OWN_NAME, PUBLICATIONS, STATUS, yearOf, type AreaId, type Publication, type Status } from '@/content/publications'

type StatusFilter = 'all' | 'published' | 'accepted' | 'preprint' | 'pending' | 'progress'

const STATUS_FILTERS: { id: StatusFilter; label: string; match: Status[] }[] = [
  { id: 'all', label: 'All', match: [] },
  { id: 'published', label: 'Published', match: ['published'] },
  { id: 'accepted', label: 'Accepted', match: ['accepted'] },
  { id: 'preprint', label: 'Preprints', match: ['preprint'] },
  { id: 'pending', label: 'Under review', match: ['review', 'submitted'] },
  { id: 'progress', label: 'In progress', match: ['progress'] },
]

const GROUP_ORDER: Status[] = ['published', 'accepted', 'preprint', 'review', 'progress']

function Authors({ names }: { names: string[] }) {
  return (
    <p className="pub-authors">
      {names.map((n, i) => (
        <span key={n}>
          {i ? ', ' : ''}
          {n === OWN_NAME ? <strong>{n}</strong> : n}
        </span>
      ))}
    </p>
  )
}

function CopyCitation({ pub }: { pub: Publication }) {
  const [state, setState] = useState<'idle' | 'done' | 'failed'>('idle')
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(citationOf(pub))
      setState('done')
    } catch {
      setState('failed')
    }
    setTimeout(() => setState('idle'), 2400)
  }
  return (
    <button type="button" className="pub-copy" onClick={copy}>
      <span aria-live="polite">{state === 'done' ? 'Copied' : state === 'failed' ? 'Copy failed' : 'Copy citation'}</span>
      <span className="sr"> for {pub.title}</span>
    </button>
  )
}

function Entry({ pub, scripted }: { pub: Publication; scripted: boolean }) {
  const s = STATUS[pub.status]
  const nameOnly = pub.status === 'progress'
  return (
    <li className={`pub${pub.highlight ? ' pub-hl' : ''}${pub.figure ? (pub.figure.wide ? ' pub-fig-top' : ' pub-has-fig') : ''}`}>
      {pub.figure ? (
        <figure className="pub-fig">
          <a href={pub.figure.src} aria-label={`Open figure full size: ${pub.title}`}>
            <Image src={pub.figure.src} alt={pub.figure.alt} width={pub.figure.width} height={pub.figure.height} sizes={pub.figure.wide ? '(max-width: 960px) 100vw, 900px' : '(max-width: 640px) 100vw, 260px'} loading="lazy" />
          </a>
        </figure>
      ) : null}
      <div className="pub-body">
        <p className="pub-meta">
          <span className={s.className}>{s.label}</span>
          {pub.isNew ? <span className="tag tag-new">New</span> : null}
          {nameOnly ? null : <span className="pub-year">{yearOf(pub)}</span>}
        </p>
        <h4>{pub.title}</h4>
        {pub.authors ? <Authors names={pub.authors} /> : null}
        {pub.venue ? (
          <p className="pub-venue">
            <em>{pub.venue}</em>
            {pub.note ? <span> · {pub.note}</span> : null}
            {pub.citations ? <span> · {pub.citations}</span> : null}
          </p>
        ) : null}
        {pub.summary ? <p className="pub-sum">{pub.summary}</p> : null}
        {!nameOnly && (pub.links?.length || scripted) ? (
          <p className="pub-links">
            {pub.links?.map((l) => (
              <a key={l.href} href={l.href} rel="noopener" aria-label={`${l.label}: ${pub.title}`}>
                {l.label}
              </a>
            ))}
            {scripted ? <CopyCitation pub={pub} /> : null}
          </p>
        ) : null}
      </div>
    </li>
  )
}

function Chips({ legend, options, value, onChange }: { legend: string; options: { id: string; label: string }[]; value: string; onChange: (id: string) => void }) {
  return (
    <div className="pub-chips" role="group" aria-label={legend}>
      <span className="mono muted">{legend}</span>
      {options.map((o) => (
        <button type="button" key={o.id} aria-pressed={value === o.id} onClick={() => onChange(o.id)}>
          {o.label}
        </button>
      ))}
    </div>
  )
}

/** Every output, grouped by status, with topic and status filters. Without script the full list still shows. */
export default function PublicationList() {
  const [scripted, setScripted] = useState(false)
  const [topic, setTopic] = useState<'all' | AreaId>('all')
  const [status, setStatus] = useState<StatusFilter>('all')

  useEffect(() => setScripted(true), [])

  // A theme's "See the papers" link scrolls here natively; this applies its topic filter.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element).closest?.('a[data-topic]')
      if (!link) return
      setTopic(link.getAttribute('data-topic') as AreaId)
      setStatus('all')
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  const shown = useMemo(() => {
    const match = STATUS_FILTERS.find((f) => f.id === status)!.match
    return byDate(PUBLICATIONS).filter((p) => (topic === 'all' || p.areas.includes(topic)) && (!match.length || match.includes(p.status)))
  }, [topic, status])

  const groups = GROUP_ORDER.map((g) => ({
    id: g,
    name: STATUS[g].group,
    items: shown.filter((p) => STATUS[p.status].group === STATUS[g].group),
  })).filter((g) => g.items.length)

  const total = PUBLICATIONS.length
  return (
    <>
      {scripted ? (
        <div className="pub-filters">
          <Chips legend="Topic" value={topic} onChange={(v) => setTopic(v as 'all' | AreaId)} options={[{ id: 'all', label: 'All' }, ...AREAS.map((a) => ({ id: a.id, label: a.short }))]} />
          <Chips legend="Status" value={status} onChange={(v) => setStatus(v as StatusFilter)} options={STATUS_FILTERS} />
          <p className="pub-count" role="status">
            Showing {shown.length} of {total}
          </p>
        </div>
      ) : null}
      {groups.map((g) => (
        <div className="pub-group" key={g.id}>
          <h3>{g.name}</h3>
          <ol>
            {g.items.map((p) => (
              <Entry key={p.id} pub={p} scripted={scripted} />
            ))}
          </ol>
        </div>
      ))}
      {!groups.length ? <p className="pub-empty">Nothing matches those filters yet.</p> : null}
    </>
  )
}
