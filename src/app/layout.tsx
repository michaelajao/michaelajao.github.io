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

export const metadata: Metadata = {
  title: 'Michael Ajao-Olarinoye | PhD Researcher',
  description: 'PhD Researcher in Computational Science specializing in epidemiological modeling, Physics-Informed Neural Networks, and healthcare resource allocation. Published in Physics of Fluids, IEEE conferences, and interdisciplinary AI applications.',
  keywords: 'PhD Researcher, Epidemiological Modeling, Physics-Informed Neural Networks, Healthcare Resource Allocation, Machine Learning, Computational Science, Plant Disease Detection, Topic Modeling',
  authors: [{ name: 'Michael Ajao-Olarinoye' }],
  openGraph: {
    title: 'Michael Ajao-Olarinoye | PhD Researcher',
    description: 'PhD Researcher specializing in epidemiological modeling, Physics-Informed Neural Networks, and interdisciplinary AI applications',
    type: 'website',
    url: 'https://michaelajao.github.io',
  },
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
        <link rel="alternate icon" href="/favicon.ico" />
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