import type { Metadata, Viewport } from 'next'
import { Geist_Mono, Instrument_Sans, Newsreader } from 'next/font/google'
import './globals.css'
import './pages.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Sprite } from '@/components/Brand'
import { PROFILES, SITE_NAME, SITE_URL } from '@/content/site'
import { DEFAULT_DESCRIPTION } from '@/lib/meta'

const sans = Instrument_Sans({ subsets: ['latin'], axes: ['wdth'], variable: '--f-sans', display: 'swap' })
const serif = Newsreader({ subsets: ['latin'], style: ['normal', 'italic'], axes: ['opsz'], variable: '--f-serif', display: 'swap' })
const mono = Geist_Mono({ subsets: ['latin'], variable: '--f-mono', display: 'swap' })

const TITLE = 'Michael Ajao-Olarinoye | Research Fellow and miolajtech'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: '%s | Michael Ajao-Olarinoye' },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: 'Michael Ajao-Olarinoye', url: SITE_URL }],
  creator: 'Michael Ajao-Olarinoye',
  alternates: { canonical: '/' },
  openGraph: {
    title: TITLE,
    description: DEFAULT_DESCRIPTION,
    url: '/',
    siteName: SITE_NAME,
    type: 'website',
    locale: 'en_GB',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'miolajtech, the practice of Dr Michael Ajao-Olarinoye' }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DEFAULT_DESCRIPTION, images: ['/og.png'] },
  robots: { index: true, follow: true },
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
      name: 'Michael Ajao-Olarinoye',
      honorificPrefix: 'Dr',
      jobTitle: 'Research Fellow',
      affiliation: {
        '@type': 'CollegeOrUniversity',
        name: 'Coventry University',
        url: 'https://www.coventry.ac.uk/',
      },
      url: `${SITE_URL}/`,
      image: `${SITE_URL}/images/portrait-4x5.jpg`,
      sameAs: [PROFILES.orcid, PROFILES.scholar, PROFILES.github, PROFILES.linkedin, PROFILES.youtube],
      knowsAbout: ['Physics-informed neural networks', 'Scientific machine learning', 'Generative AI', 'AI agents', 'Data science'],
    },
    {
      '@type': 'ProfessionalService',
      '@id': `${SITE_URL}/#practice`,
      name: 'miolajtech',
      description: 'miolajtech is the practice of Dr Michael Ajao-Olarinoye: automated business systems, AI agents, data science, training, research partnering and tutoring.',
      url: `${SITE_URL}/`,
      image: `${SITE_URL}/og.png`,
      founder: { '@id': `${SITE_URL}/#person` },
      areaServed: ['United Kingdom', 'Nigeria'],
      sameAs: [PROFILES.youtube],
    },
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
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
