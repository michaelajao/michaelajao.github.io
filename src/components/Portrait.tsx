'use client'

import { useEffect, useRef } from 'react'

/** Editorial arch portrait. Unveils once, the first time it scrolls into view. */
export default function Portrait() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const a = ref.current
    if (!a) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return
    if (a.getBoundingClientRect().top < window.innerHeight * 0.9) {
      a.classList.add('go')
      return
    }
    a.classList.add('pre')
    const io = new IntersectionObserver(
      (es) => {
        es.forEach((e) => {
          if (e.isIntersecting) {
            a.classList.remove('pre')
            a.classList.add('go')
            io.disconnect()
          }
        })
      },
      { threshold: 0.2 },
    )
    io.observe(a)
    const t = setTimeout(() => {
      if (a.classList.contains('pre')) {
        a.classList.remove('pre')
        a.classList.add('go')
        io.disconnect()
      }
    }, 2500)
    return () => {
      clearTimeout(t)
      io.disconnect()
    }
  }, [])

  return (
    <figure className="arch" id="arch" ref={ref}>
      <div className="frame">
        <span className="arcs" aria-hidden="true" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/portrait-4x5.jpg" width={960} height={1200} alt="Portrait of Dr Michael Ajao-Olarinoye" decoding="async" />
      </div>
    </figure>
  )
}
