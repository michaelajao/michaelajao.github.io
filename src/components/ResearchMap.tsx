'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { AREAS, TAG_CLASS, type LinkRef } from '@/content/research'

const NS = 'http://www.w3.org/2000/svg'

function Anchor({ href, children, aria }: { href: string; children: React.ReactNode; aria?: string }) {
  if (href.startsWith('/')) {
    return (
      <Link href={href} aria-label={aria}>
        {children}
      </Link>
    )
  }
  return (
    <a href={href} aria-label={aria}>
      {children}
    </a>
  )
}

function Extras({ links }: { links: LinkRef[] }) {
  return (
    <span className="x-row">
      {links.map((l) => (
        <a key={l.href} href={l.href} aria-label={l.aria}>
          {l.label} <span aria-hidden="true">&rarr;</span>
        </a>
      ))}
    </span>
  )
}

/** Research map: areas on the left, linked outputs on the right, joined by lines. */
export default function ResearchMap({ limit }: { limit?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const statusRef = useRef<HTMLParagraphElement>(null)
  const names = Object.fromEntries(AREAS.map((a) => [a.id, a.title]))

  useEffect(() => {
    const map = ref.current
    const status = statusRef.current
    if (!map || !status) return
    const svg = map.querySelector<SVGSVGElement>('.rmap-svg')!
    const themes = Array.from(map.querySelectorAll<HTMLElement>('.rm-theme'))
    const items = Array.from(map.querySelectorAll<HTMLElement>('.rm-items > li'))
    const mq = window.matchMedia('(min-width:1001px)')
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    type Cur = { t?: string; i?: number } | null
    let pinned: string | null = null
    let hover: Cur = null
    let edges: { el: SVGPathElement; t: string; i: number }[] = []
    const cleanups: (() => void)[] = []
    const on = <K extends keyof HTMLElementEventMap>(el: HTMLElement, type: K, fn: (e: HTMLElementEventMap[K]) => void) => {
      el.addEventListener(type, fn)
      cleanups.push(() => el.removeEventListener(type, fn))
    }

    const port = (id: string) => map.querySelector<HTMLElement>(`.rm-theme[data-t="${id}"] .port`)
    const themesOf = (li: HTMLElement) => (li.dataset.themes ?? '').split(' ')
    const has = (li: HTMLElement, t: string) => themesOf(li).includes(t)
    const current = (): Cur => hover ?? (pinned ? { t: pinned } : null)

    function apply(c: Cur) {
      map!.classList.toggle('has-active', !!c)
      themes.forEach((t) => {
        const onT = !!c && (c.t ? t.dataset.t === c.t : has(items[c.i!], t.dataset.t!))
        t.classList.toggle('on', onT)
      })
      items.forEach((li, i) => {
        const onI = !!c && (c.t ? has(li, c.t) : c.i === i)
        li.classList.toggle('on', onI)
      })
      edges.forEach((e) => {
        const onE = !!c && (c.t ? e.t === c.t : e.i === c.i)
        e.el.classList.toggle('on', onE)
      })
    }
    function announce(c: Cur) {
      if (!c || !c.t) {
        status!.textContent = ''
        return
      }
      const n = items.filter((li) => has(li, c.t!)).length
      status!.textContent = `${names[c.t]}: ${n} linked outputs highlighted.`
    }
    function build() {
      svg.textContent = ''
      edges = []
      if (!mq.matches) return
      const r = map!.getBoundingClientRect()
      svg.setAttribute('width', String(r.width))
      svg.setAttribute('height', String(r.height))
      svg.setAttribute('viewBox', `0 0 ${r.width} ${r.height}`)
      let k = 0
      items.forEach((li, i) => {
        const nb = li.querySelector('.node')!.getBoundingClientRect()
        const x2 = nb.left + nb.width / 2 - r.left
        const y2 = nb.top + nb.height / 2 - r.top
        themesOf(li).forEach((t, j) => {
          const p0 = port(t)
          if (!p0) return
          const pb = p0.getBoundingClientRect()
          const x1 = pb.left + pb.width / 2 - r.left
          const y1 = pb.top + pb.height / 2 - r.top
          const dx = (x2 - x1) * 0.5
          const p = document.createElementNS(NS, 'path')
          p.setAttribute('d', `M${x1} ${y1} C${x1 + dx} ${y1} ${x2 - dx} ${y2} ${x2} ${y2}`)
          p.setAttribute('pathLength', '1')
          p.setAttribute('class', 'edge' + (j ? ' x' : ''))
          p.style.setProperty('--k', String(k++))
          svg.appendChild(p)
          edges.push({ el: p, t, i })
        })
      })
      apply(current())
    }
    function setHover(c: Cur) {
      hover = c
      apply(current())
      announce(current())
    }

    themes.forEach((t) => {
      const id = t.dataset.t!
      const btn = t.querySelector<HTMLElement>('.t-btn')!
      on(t, 'mouseenter', () => setHover({ t: id }))
      on(t, 'mouseleave', () => setHover(null))
      on(btn, 'focus', () => setHover({ t: id }))
      on(btn, 'blur', () => setHover(null))
      on(btn, 'click', () => {
        pinned = pinned === id ? null : id
        themes.forEach((x) => x.querySelector('.t-btn')!.setAttribute('aria-pressed', x.dataset.t === pinned ? 'true' : 'false'))
        apply(current())
        announce(current())
      })
    })
    items.forEach((li, i) => {
      on(li, 'mouseenter', () => setHover({ i }))
      on(li, 'mouseleave', () => setHover(null))
      on(li, 'focusin', () => setHover({ i }))
      on(li, 'focusout', () => setHover(null))
    })

    let io: IntersectionObserver | undefined
    if (!calm && 'IntersectionObserver' in window) {
      map.classList.add('armed')
      io = new IntersectionObserver(
        (es) => {
          es.forEach((e) => {
            if (e.isIntersecting) {
              map.classList.add('in')
              io?.disconnect()
            }
          })
        },
        { threshold: 0.18 },
      )
      io.observe(map)
    }
    build()
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(build)
    window.addEventListener('load', build)
    let rt: ReturnType<typeof setTimeout>
    let ro: ResizeObserver | undefined
    if ('ResizeObserver' in window) {
      ro = new ResizeObserver(() => {
        clearTimeout(rt)
        rt = setTimeout(build, 80)
      })
      ro.observe(map)
    }
    mq.addEventListener('change', build)

    return () => {
      cleanups.forEach((f) => f())
      io?.disconnect()
      ro?.disconnect()
      clearTimeout(rt)
      window.removeEventListener('load', build)
      mq.removeEventListener('change', build)
      map.classList.remove('armed', 'in', 'has-active')
      svg.textContent = ''
    }
  }, [limit]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="rmap" id="rmap" ref={ref}>
      <svg className="rmap-svg" aria-hidden="true" focusable="false" />
      <p className="sr" ref={statusRef} role="status" aria-live="polite" />
      {AREAS.map((a) => {
        const list = limit ? a.items.slice(0, limit) : a.items
        return (
          <div className="rgroup" data-g={a.id} key={a.id}>
            <div className={`rm-theme${a.minor ? ' minor' : ''}`} data-t={a.id}>
              <span className="mono muted">{a.label}</span>
              <h3>
                <button type="button" className="t-btn" aria-pressed="false" data-t={a.id}>
                  {a.title}
                </button>
              </h3>
              <p className="d">{a.desc}</p>
              <p className="a-with">{a.with}</p>
              <span className="port" aria-hidden="true" />
            </div>
            <ul className="rm-items" aria-label={`Outputs for ${a.title.toLowerCase()}`}>
              {list.map((it) => (
                <li key={it.title} data-themes={it.themes.join(' ')}>
                  <span className="node" aria-hidden="true" />
                  <span className={TAG_CLASS[it.kind]}>{it.tag}</span>
                  <span>
                    <Anchor href={it.href}>{it.title}</Anchor>
                    {it.extras ? <Extras links={it.extras} /> : null}
                    <small>{it.small}</small>
                    {it.themes.length > 1 ? <span className="also">{it.themes.slice(1).map((t) => names[t]).join(', ')}</span> : null}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )
      })}
    </div>
  )
}
