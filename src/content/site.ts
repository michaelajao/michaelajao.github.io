export const SITE_URL = 'https://miolajtech.co.uk'
export const SITE_NAME = 'miolajtech'
export const OWNER = 'Michael Ajao-Olarinoye'

export const PROFILES = {
  linkedin: 'https://www.linkedin.com/in/michael-ajao/',
  github: 'https://github.com/michaelajao',
  orcid: 'https://orcid.org/0000-0003-2763-8293',
  scholar: 'https://scholar.google.com/citations?user=CXrGkfEAAAAJ&hl=en',
  youtube: 'https://www.youtube.com/@miolajtech2439/featured',
  pure: 'https://pureportal.coventry.ac.uk/en/persons/michael-ajao-olarinoye/',
} as const

export type IconId = 'linkedin' | 'github' | 'orcid' | 'scholar' | 'youtube'

export const PROFILE_LINKS: { id: IconId; label: string; href: string }[] = [
  { id: 'linkedin', label: 'LinkedIn', href: PROFILES.linkedin },
  { id: 'github', label: 'GitHub', href: PROFILES.github },
  { id: 'orcid', label: 'ORCID', href: PROFILES.orcid },
  { id: 'scholar', label: 'Google Scholar', href: PROFILES.scholar },
  { id: 'youtube', label: 'YouTube', href: PROFILES.youtube },
]

export const INTENTS = [
  { value: 'project', label: 'A project' },
  { value: 'clinic', label: 'Book a clinic' },
  { value: 'research', label: 'Research collaboration' },
  { value: 'tutoring', label: 'Tutoring' },
  { value: 'speaking', label: 'Speaking or workshop' },
] as const

export type IntentValue = (typeof INTENTS)[number]['value']

export const PAGES = [
  { path: '/', priority: '1.0' },
  { path: '/research/', priority: '0.9' },
  { path: '/research/papers/', priority: '0.8' },
  { path: '/research/talks/', priority: '0.7' },
  { path: '/services/', priority: '0.9' },
  { path: '/services/tutoring/', priority: '0.8' },
  { path: '/games/', priority: '0.8' },
  { path: '/games/project-yellow/credits/', priority: '0.4' },
  { path: '/about/', priority: '0.8' },
  { path: '/contact/', priority: '0.8' },
  { path: '/privacy/', priority: '0.3' },
  { path: '/terms/', priority: '0.3' },
] as const
