'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { Arr } from './Brand'
import { WORDMARK_INNER } from './brand-data'
import { APPEARED_IN } from '@/content/research'

const NS = 'http://www.w3.org/2000/svg'

function mk(tag: string, at: Record<string, string | number>) {
  const e = document.createElementNS(NS, tag)
  for (const k in at) e.setAttribute(k, String(at[k]))
  return e
}
function rnd(i: number) {
  const x = Math.sin(i * 127.1 + 311.7) * 43758.5453
  return x - Math.floor(x)
}

type Item = { g: Element; x: number; y: number; rot: number; sp: number; ph: number; amp: number; dx: number; dy: number }

/** Brand field: the L3 letterforms' own modules (stem, arched m, i-dot) drift and answer the pointer. */
function useBrandField(hero: React.RefObject<HTMLDivElement | null>, svgRef: React.RefObject<SVGSVGElement | null>) {
  useEffect(() => {
    const el = hero.current
    const svg = svgRef.current
    if (!el || !svg) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let items: Item[] = []
    let W = 0
    let H = 0
    let px = -9999
    let py = -9999
    let raf = 0
    let vis = true
    let pageVis = true
    const t0 = performance.now()

    function build() {
      if (!el || !svg) return
      svg.textContent = ''
      items = []
      W = el.clientWidth
      H = el.clientHeight
      svg.setAttribute('viewBox', `0 0 ${W} ${H}`)
      const n = W < 700 ? 18 : 34
      for (let i = 0; i < n; i++) {
        const kind = i % 6
        const g = mk('g', {})
        const sw = 3 + rnd(i + 9) * 3
        const len = 26 + rnd(i + 3) * 50
        const sc = 0.5 + rnd(i + 5) * 0.7
        const st: Record<string, string | number> = { fill: 'none', stroke: 'currentColor', 'stroke-width': sw, 'stroke-linecap': 'butt', 'stroke-linejoin': 'miter' }
        if (kind < 2) {
          st.d = `M0 ${-len / 2}V${len / 2}`
          g.appendChild(mk('path', st))
        } else if (kind === 2) {
          st.d = `M0 ${-len / 2 + 10}V${len / 2}`
          g.appendChild(mk('path', st))
          g.appendChild(mk('circle', { cx: 0, cy: -len / 2 - 5, r: sw * 0.62 + 1.4, class: 'fd' }))
        } else if (kind === 3) {
          const k = sc * 0.55
          st['stroke-width'] = sw / k
          st.d = 'M-30 16V-16A15 15 0 0 1 0 -16V16M0 -16A15 15 0 0 1 30 -16V16'
          const mg = mk('g', { transform: `scale(${k.toFixed(3)})` })
          mg.appendChild(mk('path', st))
          g.appendChild(mg)
        } else if (kind === 4) {
          const k2 = sc * 0.6
          st['stroke-width'] = sw / k2
          st.d = 'M-15 16V-16A15 15 0 0 1 15 -16V16'
          const ag = mk('g', { transform: `scale(${k2.toFixed(3)})` })
          ag.appendChild(mk('path', st))
          g.appendChild(ag)
        } else {
          g.appendChild(mk('circle', { r: 3 + rnd(i + 7) * 3.5, class: 'fd' }))
        }
        svg.appendChild(g)
        items.push({
          g,
          x: rnd(i + 1) * W,
          y: rnd(i + 2) * H,
          rot: kind < 3 ? (rnd(i + 4) < 0.15 ? 90 : 0) : kind === 3 || kind === 4 ? (rnd(i + 6) - 0.5) * 50 : rnd(i + 6) * 360,
          sp: 0.12 + rnd(i + 8) * 0.22,
          ph: rnd(i) * 6.28,
          amp: 10 + rnd(i + 11) * 22,
          dx: 0,
          dy: 0,
        })
      }
    }
    function frame(now: number) {
      raf = 0
      if (!vis || !pageVis) return
      const t = (now - t0) / 1000
      for (const o of items) {
        const bx = o.x + Math.sin(t * o.sp + o.ph) * o.amp
        const by = o.y + Math.cos(t * o.sp * 0.8 + o.ph) * o.amp
        const ddx = bx - px
        const ddy = by - py
        const d = Math.sqrt(ddx * ddx + ddy * ddy)
        const f = d < 170 ? 1 - d / 170 : 0
        const tx = f ? (ddx / (d || 1)) * f * 46 : 0
        const ty = f ? (ddy / (d || 1)) * f * 46 : 0
        o.dx += (tx - o.dx) * 0.08
        o.dy += (ty - o.dy) * 0.08
        o.g.setAttribute('transform', `translate(${(bx + o.dx).toFixed(1)} ${(by + o.dy).toFixed(1)}) rotate(${(o.rot + f * 40 + t * o.sp * 6).toFixed(1)})`)
      }
      raf = requestAnimationFrame(frame)
    }
    function go() {
      if (!raf && vis && pageVis) raf = requestAnimationFrame(frame)
    }
    const onMove = (e: PointerEvent) => {
      const b = el.getBoundingClientRect()
      px = e.clientX - b.left
      py = e.clientY - b.top
    }
    const onLeave = () => {
      px = py = -9999
    }
    let rt: ReturnType<typeof setTimeout>
    const onResize = () => {
      clearTimeout(rt)
      rt = setTimeout(build, 200)
    }
    const onVis = () => {
      pageVis = !document.hidden
      if (pageVis) go()
    }
    build()
    el.addEventListener('pointermove', onMove)
    el.addEventListener('pointerleave', onLeave)
    window.addEventListener('resize', onResize)
    document.addEventListener('visibilitychange', onVis)
    const io = new IntersectionObserver(
      (en) => {
        vis = en[0].isIntersecting
        if (vis) go()
      },
      { threshold: 0 },
    )
    io.observe(el)
    go()
    const on = setTimeout(() => svg.classList.add('on'), 1700)
    return () => {
      cancelAnimationFrame(raf)
      clearTimeout(rt)
      clearTimeout(on)
      io.disconnect()
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerleave', onLeave)
      window.removeEventListener('resize', onResize)
      document.removeEventListener('visibilitychange', onVis)
      svg.classList.remove('on')
      svg.textContent = ''
    }
  }, [hero, svgRef])
}

function MarqueeSet({ hidden }: { hidden?: boolean }) {
  return (
    <ul className="mq-set" id={hidden ? undefined : 'mq-a'} aria-hidden={hidden ? true : undefined}>
      {APPEARED_IN.map((a) => (
        <li key={a.name}>
          {a.name}
          {a.sub ? (
            <>
              {' '}
              <span>{a.sub}</span>
            </>
          ) : null}
        </li>
      ))}
    </ul>
  )
}

export default function Hero() {
  const hero = useRef<HTMLDivElement>(null)
  const field = useRef<SVGSVGElement>(null)
  const [mode, setMode] = useState<'ssr' | 'anim' | 'static'>('ssr')
  const [paused, setPaused] = useState(false)
  useBrandField(hero, field)

  useEffect(() => {
    setMode(window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'static' : 'anim')
  }, [])

  return (
    <div className="hero" id="top" ref={hero}>
      <svg className="bfield" id="field" ref={field} aria-hidden="true" focusable="false" />
      <div className="wrap">
        <p className="eyebrow mono rise d1">
          <span>
            <span className="dot" />
            Coventry, UK
          </span>
          <span>Research Fellow, Coventry University</span>
          <span>Lecturer in Computing, QAHE</span>
        </p>
        <h1 className="rise d2">
          <span className="ln">
            <span>
              I’m Michael Ajao-Olarinoye<span className="pd">.</span>
            </span>
          </span>
        </h1>
        <div className="hero-grid">
          <p className="lead rise d3">Applied AI research for digital health and student engagement.</p>
          <p className="hero-cta rise d4">
            <Link className="btn btn-fill" href="/services/">
              Work with me <Arr />
            </Link>
            <Link className="btn btn-line" href="/research/">
              Read the research
            </Link>
          </p>
          <ul className="hero-meta mono rise d4">
            <li>Endorsed by the Royal Academy of Engineering as Exceptional Promise (UK Global Talent)</li>
            <li>Applied machine learning, generative AI and scientific modelling</li>
            <li>Consulting, training and tutoring</li>
            <li>Open to projects in the UK, Nigeria and around the world</li>
          </ul>
        </div>
      </div>

      <div className="wm-band" aria-hidden="true">
        <div className="wrap">
          <div className="cols">
            <span style={{ left: 0 }} />
            <span style={{ left: '25%' }} />
            <span style={{ left: '50%' }} />
            <span style={{ left: '75%' }} />
            <span style={{ right: 0 }} />
          </div>
          <svg className="wm" viewBox="10 24 350 76" focusable="false" xmlns="http://www.w3.org/2000/svg" dangerouslySetInnerHTML={{ __html: WORDMARK_INNER }} />
        </div>
      </div>
      <div className={`mq${paused ? ' paused' : ''}`} id="mq" role="region" aria-label="Where the work has appeared" {...(mode === 'static' ? { 'data-static': '' } : {})}>
        <div className="wrap">
          <span className="mq-lab mono">Appeared in</span>
          <div className="mq-view">
            <div className="mq-track">
              <MarqueeSet />
              {mode === 'anim' ? <MarqueeSet hidden /> : null}
            </div>
          </div>
          <button
            className="mq-btn"
            type="button"
            id="mq-btn"
            aria-label={paused ? 'Play scrolling list' : 'Pause scrolling list'}
            aria-pressed={paused}
            onClick={() => setPaused((p) => !p)}
          >
            <svg className="ps" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
              <rect x="2" y="1" width="3.5" height="12" />
              <rect x="8.5" y="1" width="3.5" height="12" />
            </svg>
            <svg className="pl" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
              <path d="M3 1l9 6-9 6z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
