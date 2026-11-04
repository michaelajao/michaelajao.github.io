export const SITE_URL = 'https://michaelajao.github.io'
export const OWNER = 'Michael Ajao-Olarinoye'
export const COMPANY_URL = 'https://miolajtech.co.uk/'

export const PROFILES = {
  scholar: 'https://scholar.google.com/citations?user=CXrGkfEAAAAJ&hl=en',
  orcid: 'https://orcid.org/0000-0003-2763-8293',
  github: 'https://github.com/michaelajao',
  linkedin: 'https://www.linkedin.com/in/michael-ajao/',
  pure: 'https://pureportal.coventry.ac.uk/en/persons/michael-ajao-olarinoye/',
} as const

export type IconId = 'linkedin' | 'github' | 'orcid' | 'scholar' | 'youtube'

export const PROFILE_LINKS: { id: IconId; label: string; href: string }[] = [
  { id: 'scholar', label: 'Google Scholar', href: PROFILES.scholar },
  { id: 'orcid', label: 'ORCID', href: PROFILES.orcid },
  { id: 'github', label: 'GitHub', href: PROFILES.github },
  { id: 'linkedin', label: 'LinkedIn', href: PROFILES.linkedin },
]

export const SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'research', label: 'Research' },
  { id: 'publications', label: 'Publications' },
  { id: 'talks', label: 'Talks' },
  { id: 'teaching', label: 'Teaching' },
  { id: 'cv', label: 'CV' },
  { id: 'contact', label: 'Contact' },
] as const

export const INTENTS = [
  { value: 'research', label: 'Research collaboration' },
  { value: 'speaking', label: 'Speaking or reviewing' },
  { value: 'other', label: 'Something else' },
] as const

export type IntentValue = (typeof INTENTS)[number]['value']
