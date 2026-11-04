import type { Metadata, Viewport } from 'next'
import { Geist_Mono, Instrument_Sans, Newsreader } from 'next/font/google'
import './globals.css'
import './academic.css'
import { Sprite } from '@/components/Brand'
import SectionNav from '@/components/SectionNav'
import { COMPANY_URL, OWNER, PROFILES, SITE_URL } from '@/content/site'
import { PUBLICATIONS } from '@/content/publications'

const sans = Instrument_Sans({ subsets: ['latin'], axes: ['wdth'], variable: '--f-sans', display: 'swap' })
const serif = Newsreader({ subsets: ['latin'], style: ['normal', 'italic'], axes: ['opsz'], variable: '--f-serif', display: 'swap' })
const mono = Geist_Mono({ subsets: ['latin'], variable: '--f-mono', display: 'swap' })

const TITLE = 'Michael Ajao-Olarinoye | Research Fellow, Coventry University'
const DESCRIPTION = 'Dr Michael Ajao-Olarinoye is a Research Fellow at Coventry University working on applied machine learning, generative AI and scientific modelling, including physics-informed neural networks for blood flow. Publications, talks, teaching and CV.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  authors: [{ name: OWNER, url: SITE_URL }],
  creator: OWNER,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: '/',
    siteName: OWNER,
    type: 'profile',
    locale: 'en_GB',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: `${OWNER}, Research Fellow at Coventry University` }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: ['/og.png'] },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F1F3EF' },
    { media: '(prefers-color-scheme: dark)', color: '#0B100D' },
  ],
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: OWNER,
      honorificPrefix: 'Dr',
      jobTitle: 'Research Fellow',
      identifier: { '@type': 'PropertyValue', propertyID: 'ORCID', value: '0000-0003-2763-8293' },
      affiliation: [
        { '@type': 'CollegeOrUniversity', name: 'Coventry University', url: 'https://www.coventry.ac.uk/' },
        { '@type': 'Organization', name: 'QAHE' },
      ],
      alumniOf: [
        { '@type': 'CollegeOrUniversity', name: 'Coventry University' },
        { '@type': 'CollegeOrUniversity', name: 'Kwara State University' },
      ],
      url: `${SITE_URL}/`,
      image: `${SITE_URL}/images/portrait-4x5.jpg`,
      sameAs: [PROFILES.orcid, PROFILES.scholar, PROFILES.pure, PROFILES.github, PROFILES.linkedin, COMPANY_URL],
      knowsAbout: ['Applied machine learning', 'Generative AI', 'Physics-informed neural networks', 'Scientific machine learning', 'Digital health', 'Student engagement modelling'],
    },
    ...PUBLICATIONS.filter((p) => p.status === 'published').map((p) => ({
      '@type': 'ScholarlyArticle',
      name: p.title,
      datePublished: p.date,
      url: p.links?.[0]?.href,
      author: { '@id': `${SITE_URL}/#person` },
    })),
  ],
}

// Applies the saved colour theme before first paint to avoid a flash.
const themeScript = `try{var s=localStorage.getItem('theme');if(s==='light'||s==='dark')document.documentElement.setAttribute('data-theme',s)}catch(e){}`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${sans.variable} ${serif.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <Sprite />
        <a className="skip" href="#main">
          Skip to content
        </a>
        <SectionNav />
        <main id="main">{children}</main>
        <footer className="ac-foot">
          <div className="wrap">
            <p>
              I also run{' '}
              <a href={COMPANY_URL} rel="noopener">
                miolajtech
              </a>
              , a practice for AI systems, training and tutoring.
            </p>
            <p className="muted">
              © {OWNER}. <a href="#privacy">Privacy notice</a>.
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}
