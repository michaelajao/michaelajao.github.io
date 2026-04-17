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
  title: 'Dr. Michael Ajao-Olarinoye | Research Fellow',
  description: 'Research Fellow at Coventry University\'s Centre for Computational Science & Mathematical Modelling (CSMM), working on the HOPE-MOVE project. Research in applied machine learning, generative AI, physics-informed neural networks, spatiotemporal epidemic forecasting, and cardiovascular hemodynamics.',
  keywords: 'Research Fellow, HOPE-MOVE, Applied Machine Learning, Generative AI, Physics-Informed Neural Networks, Graph Neural Networks, Spatiotemporal Forecasting, Cardiovascular Hemodynamics, Epidemiological Modeling, Computational Science, Coventry University CSMM',
  authors: [{ name: 'Michael Ajao-Olarinoye' }],
  openGraph: {
    title: 'Dr. Michael Ajao-Olarinoye | Research Fellow',
    description: 'Research Fellow at CSMM, Coventry University. Applied machine learning, generative AI, physics-informed neural networks, and data-driven modelling for healthcare and scientific computing.',
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