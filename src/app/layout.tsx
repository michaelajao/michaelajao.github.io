import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair'
})

const siteUrl = 'https://michaelajao.github.io'
const ogDescription =
  'Research Fellow at CSMM, Coventry University. Applied machine learning, generative AI, physics-informed neural networks, and data-driven modelling for healthcare and scientific computing.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Dr. Michael Ajao-Olarinoye | Research Fellow',
  description: 'Research Fellow at Coventry University\'s Centre for Computational Science & Mathematical Modelling (CSMM), working on the HOPE-MOVE project. Research in applied machine learning, generative AI, physics-informed neural networks, spatiotemporal epidemic forecasting, and cardiovascular hemodynamics.',
  keywords: 'Research Fellow, HOPE-MOVE, Applied Machine Learning, Generative AI, Physics-Informed Neural Networks, Graph Neural Networks, Spatiotemporal Forecasting, Cardiovascular Hemodynamics, Epidemiological Modeling, Computational Science, Coventry University CSMM',
  authors: [{ name: 'Michael Ajao-Olarinoye', url: siteUrl }],
  creator: 'Michael Ajao-Olarinoye',
  alternates: { canonical: siteUrl },
  openGraph: {
    title: 'Dr. Michael Ajao-Olarinoye | Research Fellow',
    description: ogDescription,
    type: 'profile',
    url: siteUrl,
    siteName: 'Michael Ajao-Olarinoye',
    images: [
      { url: '/profile-image.jpg', width: 1200, height: 630, alt: 'Dr. Michael Ajao-Olarinoye' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Michael Ajao-Olarinoye | Research Fellow',
    description: ogDescription,
    images: ['/profile-image.jpg'],
  },
  robots: { index: true, follow: true },
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Michael Ajao-Olarinoye',
  honorificPrefix: 'Dr.',
  jobTitle: 'Research Fellow & Lecturer in Computing',
  affiliation: [
    {
      '@type': 'Organization',
      name: 'Centre for Computational Science & Mathematical Modelling (CSMM), Coventry University',
      url: 'https://www.coventry.ac.uk/',
    },
    {
      '@type': 'Organization',
      name: 'QAHE (Ulster University / Southampton Solent partnership)',
    },
  ],
  url: siteUrl,
  image: `${siteUrl}/profile-image.jpg`,
  sameAs: [
    'https://github.com/michaelajao',
    'https://www.linkedin.com/in/michael-ajao',
    'https://www.youtube.com/@miolajtech2439/featured',
  ],
  knowsAbout: [
    'Physics-Informed Neural Networks',
    'Generative AI',
    'Applied Machine Learning',
    'Spatiotemporal Epidemic Forecasting',
    'Cardiovascular Hemodynamics',
    'Graph Neural Networks',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-gray-950 text-white`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}