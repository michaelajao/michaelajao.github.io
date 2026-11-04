'use client'

import { useEffect, useState } from 'react'
import { OWNER, SECTIONS } from '@/content/site'

/** Sticky section menu: shows where you are on the page, plus the theme toggle and section reveal. */
export default function SectionNav() {
  const [active, setActive] = useState<string>('')
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    const saved = root.getAttribute('data-theme')
    setDark(saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches)

    const sections = SECTIONS.map((s) => document.getElementById(s.id)).filter((el): el is HTMLElement => !!el)
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-20% 0px -70% 0px' },
    )
    sections.forEach((s) => spy.observe(s))

    // Gentle reveal, added only by script so the page is complete without it.
    let reveal: IntersectionObserver | undefined
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const items = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]')).filter((el) => el.getBoundingClientRect().top > window.innerHeight)
      items.forEach((el) => el.classList.add('reveal-pre'))
      reveal = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.remove('reveal-pre')
              reveal?.unobserve(e.target)
            }
          })
        },
        { rootMargin: '0px 0px -8% 0px' },
      )
      items.forEach((el) => reveal?.observe(el))
    }
    return () => {
      spy.disconnect()
      reveal?.disconnect()
    }
  }, [])

  const toggleTheme = () => {
    const root = document.documentElement
    const next = dark ? 'light' : 'dark'
    root.classList.add('no-tr')
    root.setAttribute('data-theme', next)
    try {
      localStorage.setItem('theme', next)
    } catch {}
    setDark(!dark)
    setTimeout(() => root.classList.remove('no-tr'), 60)
  }

  return (
    <header className="ac-nav">
      <div className="wrap">
        <a className="ac-nav-name" href="#top">
          {OWNER}
        </a>
        <nav aria-label="Sections on this page">
          <ul>
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} aria-current={active === s.id ? 'location' : undefined}>
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <button type="button" className="icon-btn theme-btn" onClick={toggleTheme} aria-label="Dark theme" aria-pressed={dark}>
          <svg className="moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z" />
          </svg>
          <svg className="sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
          </svg>
        </button>
      </div>
    </header>
  )
}
