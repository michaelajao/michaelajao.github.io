import type { Metadata } from 'next'
import { OWNER, SITE_NAME } from '@/content/site'

export const DEFAULT_DESCRIPTION =
  'Michael Ajao-Olarinoye is a Research Fellow at Coventry University working on physics-informed machine learning, generative AI and agents. miolajtech is his practice for automated business systems, AI agents, data science, training and tutoring.'

/** Per-page metadata: title, description, canonical and social cards. */
export function pageMeta({ title, description, path }: { title: string; description: string; path: string }): Metadata {
  const full = `${title} | ${OWNER}`
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: full,
      description,
      url: path,
      siteName: SITE_NAME,
      type: 'website',
      locale: 'en_GB',
      images: [{ url: '/og.png', width: 1200, height: 630, alt: `${SITE_NAME}, the practice of Dr ${OWNER}` }],
    },
    twitter: { card: 'summary_large_image', title: full, description, images: ['/og.png'] },
  }
}
