'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { Lockup } from './Brand'

const LINKS = [
  { href: '/services/', label: 'Services' },
  { href: '/games/', label: 'Games' },
  { href: '/about/', label: 'About' },
]

function isActive(path: string, href: string) {
  return path.startsWith(href)
}

export default function Header() {
  const path = usePathname() ?? '/'
  const [menuOpen, setMenuOpen] = useState(false)
  const [ddOpen, setDdOpen] = useState(false)
  const menuBtn = useRef<HTMLButtonElement>(null)
  const ddBtn = useRef<HTMLButtonElement>(null)
  const nd = useRef<HTMLDivElement>(null)

  // close menus when the route changes
  useEffect(() => {
    setMenuOpen(false)
    setDdOpen(false)
  }, [path])

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (nd.current && !nd.current.contains(e.target as Node)) setDdOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return
      if (ddOpen) {
        setDdOpen(false)
        ddBtn.current?.focus()
      } else if (menuOpen) {
        setMenuOpen(false)
        menuBtn.current?.focus()
      }
    }
    document.addEventListener('click', onDoc)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('click', onDoc)
      document.removeEventListener('keydown', onKey)
    }
  }, [ddOpen, menuOpen])

  const toggleTheme = () => {
    const root = document.documentElement
    let cur = root.getAttribute('data-theme')
    if (!cur) cur = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    const next = cur === 'dark' ? 'light' : 'dark'
    root.classList.add('no-tr')
    root.setAttribute('data-theme', next)
    try {
      localStorage.setItem('theme', next)
    } catch {}
    setTimeout(() => root.classList.remove('no-tr'), 60)
  }

  const cur = (href: string) => (path === href ? ('page' as const) : undefined)

  return (
    <header className="hdr">
      <div className="wrap">
        <Link className="logo" href="/" aria-label="miolajtech, home">
          <Lockup />
        </Link>
        <nav className={`nav${menuOpen ? ' open' : ''}`} id="nav" aria-label="Main">
          <div
            className="nd"
            ref={nd}
            onBlur={(e) => {
              if (e.relatedTarget && !e.currentTarget.contains(e.relatedTarget as Node)) setDdOpen(false)
            }}
          >
            <Link href="/research/" aria-current={cur('/research/')} data-active={isActive(path, '/research/') || undefined}>
              Research
            </Link>
            <button
              ref={ddBtn}
              className="nd-btn"
              type="button"
              aria-expanded={ddOpen}
              aria-controls="dd-research"
              aria-label="Research submenu"
              onClick={() => setDdOpen((o) => !o)}
            >
              <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                <path d="M2.5 4.5 6 8l3.5-3.5" />
              </svg>
            </button>
            <ul className="dd" id="dd-research" hidden={!ddOpen}>
              <li>
                <Link href="/research/papers/" aria-current={cur('/research/papers/')}>
                  Papers
                </Link>
              </li>
              <li>
                <Link href="/research/talks/" aria-current={cur('/research/talks/')}>
                  Talks
                </Link>
              </li>
            </ul>
          </div>
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} aria-current={cur(l.href)} data-active={isActive(path, l.href) || undefined}>
              {l.label}
            </Link>
          ))}
          <Link className="nav-cta-m" href="/contact/">
            Get in touch
          </Link>
        </nav>
        <div className="hdr-tools">
          <Link className="btn btn-fill btn-sm hdr-cta" href="/contact/">
            Get in touch
          </Link>
          <button className="icon-btn theme-btn" type="button" onClick={toggleTheme} aria-label="Switch colour theme">
            <svg className="moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z" />
            </svg>
            <svg className="sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
            </svg>
          </button>
          <button
            ref={menuBtn}
            className="icon-btn menu-btn"
            type="button"
            id="menu"
            aria-expanded={menuOpen}
            aria-controls="nav"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
              <path d="M4 8h16M4 16h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
