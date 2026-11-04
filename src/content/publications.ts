/*
 * The single source for every research output on this site.
 *
 * To add a paper: add one entry to PUBLICATIONS below, commit, and it appears in
 * the publications list and its theme's count.
 * When a status changes, edit only
 * `status` (and `venue` or `links` if they change).
 *
 * Rules: unpublished work (`review`, `submitted`, `progress`) has no links and no
 * figures. Work in progress is the title only: no authors, venue, summary,
 * year, figure or repository. Use "forecasting" only where it is part of a real
 * paper title.
 */

export type AreaId = 'flow' | 'sci' | 'gen' | 'hs'
export type Status = 'published' | 'accepted' | 'preprint' | 'review' | 'submitted' | 'progress'
export type PubLink = { label: string; href: string }

export type Publication = {
  id: string
  title: string
  /** APA-style names. Omit for work in progress. */
  authors?: string[]
  status: Status
  /** 'YYYY-MM' or 'YYYY'. Sets the order, newest first. Not shown for work in progress. */
  date: string
  /** Omit for work in progress. */
  venue?: string
  /** First area is where it sits on the research map; others draw a cross-link. */
  areas: AreaId[]
  /** Omit for work in progress. */
  summary?: string
  /** Short extra fact shown under the venue, such as "Presented 10 September 2026". */
  note?: string
  links?: PubLink[]
  isNew?: boolean
  highlight?: boolean
  /** Added by hand, with the source and month it was checked. */
  citations?: string
  /** Real figure from the paper, shown once. `wide` sits above the text instead of beside it. */
  figure?: { src: string; alt: string; width: number; height: number; wide?: boolean }
}

export const OWN_NAME = 'Ajao-Olarinoye, M.'

export const STATUS: Record<Status, { label: string; className: string; group: string }> = {
  published: { label: 'Published', className: 'tag tag-pub', group: 'Published' },
  accepted: { label: 'Accepted', className: 'tag tag-acc', group: 'Accepted and in press' },
  preprint: { label: 'Preprint', className: 'tag tag-sub', group: 'Preprints' },
  review: { label: 'Under review', className: 'tag tag-rev', group: 'Under review and submitted' },
  submitted: { label: 'Submitted', className: 'tag tag-rev', group: 'Under review and submitted' },
  progress: { label: 'In progress', className: 'tag tag-wip', group: 'In progress' },
}

export const PUBLICATIONS: Publication[] = [
  {
    id: 'cabg-wss',
    title: 'Wall shear stress in coronary arteries and grafts using computational fluid dynamics and physics-informed neural networks',
    authors: ['Ur Rehman, M. A.', 'Ekici, Ö.', 'Erdener, Ş. E.', OWN_NAME, 'Kuchumov, A. G.', 'Jia, F.'],
    status: 'published',
    date: '2026-09',
    venue: 'Physics of Fluids 38(9), 091905',
    areas: ['flow'],
    summary: 'A network trained on twelve patient-specific simulations predicts wall shear stress in healthy, grafted and diseased coronary arteries.',
    links: [
      { label: 'DOI', href: 'https://doi.org/10.1063/5.0335500' },
      { label: 'Code', href: 'https://github.com/michaelajao/CABG_WSS_PINN' },
    ],
    isNew: true,
    highlight: true,
    figure: { src: '/images/research/cabg-cfd-pinn.webp', alt: 'Three views of a patient-specific coronary model coloured by wall shear stress: CFD, PINN and the absolute error between them.', width: 1800, height: 419, wide: true },
  },
  {
    id: 'ukci-2026',
    title: 'Physics-informed multi-quantile forecasting for risk-averse NHS critical-care surge allocation',
    authors: [OWN_NAME, 'Babatunde, A.', 'Sadeghimanesh, A.', 'He, F.', 'England, M.'],
    status: 'accepted',
    date: '2026-09',
    venue: 'UKCI 2026, Coventry. Springer proceedings, in press',
    areas: ['hs'],
    summary: 'A physics-informed model that outputs uncertainty ranges feeds a risk-averse optimiser. Unmet demand stays close to simple rules while far fewer patients are moved.',
    note: 'Oral presentation, 10 September 2026',
    links: [{ label: 'Code', href: 'https://github.com/michaelajao/ukci2026' }],
    isNew: true,
    highlight: true,
  },
  {
    id: 'graph-rag',
    title: 'Controlled evaluation of graph and multimodal augmentation in RAG for document question answering',
    authors: ['Jonah, S.', 'Akinseloyin, O.', OWN_NAME, 'Babatunde, A.'],
    status: 'preprint',
    date: '2026-07',
    venue: 'arXiv:2607.16604',
    areas: ['gen'],
    summary: 'Tests when graph and multimodal retrieval really help, with controls for text leakage.',
    links: [{ label: 'arXiv', href: 'https://arxiv.org/abs/2607.16604' }],
    isNew: true,
    figure: { src: '/images/research/rag-architecture.webp', alt: 'Pipeline diagram: document pages are ingested as text passages, a knowledge graph and figures and tables. Each is retrieved for a question, fused late into one prompt and passed to a swappable generator.', width: 1500, height: 640 },
  },
  {
    id: 'weather-hems',
    title: 'Adaptive weather-aware home energy management through large language model-based appliance scheduling',
    authors: ['Jonah, S.', 'Moses, Q.', 'Babatunde, A.', OWN_NAME, 'Bammeke, D.'],
    status: 'preprint',
    date: '2026-08',
    venue: 'SSRN preprint',
    areas: ['gen'],
    summary: 'An agent turns everyday requests into schedules for several household loads, using prices, weather-based solar estimates and household limits. Five language-model controllers are compared with an optimisation benchmark.',
    note: 'Earlier version on arXiv as “LLMs for agentic home energy management”',
    links: [
      { label: 'SSRN', href: 'https://doi.org/10.2139/ssrn.7289632' },
      { label: 'arXiv', href: 'https://arxiv.org/abs/2607.04569' },
    ],
    isNew: true,
  },
  {
    id: 'double-taa',
    title: 'Modeling of double descending thoracic aortic aneurysms using computational fluid dynamics (CFD) and residual-based physics-informed neural networks (ResNets-PINNs)',
    authors: ['Fatima, N.', 'Hamza, M.', 'Farooq, M. A.', OWN_NAME],
    status: 'accepted',
    date: '2026-03',
    venue: 'Pramana – Journal of Physics, in press',
    areas: ['flow'],
    summary: 'A residual-network model for double-bulge aneurysms of 4, 5 and 6 cm, trained on computed wall data and compared with the solver.',
    note: 'Accepted 2 March 2026',
    links: [{ label: 'Code', href: 'https://github.com/michaelajao/Double_pinn_hemodynamics' }],
    isNew: true,
    figure: { src: '/images/research/double-cfd-pinn.webp', alt: 'Double-bulge aneurysms of 4, 5 and 6 cm coloured by wall shear stress, with CFD results above and PINN results below.', width: 1800, height: 696, wide: true },
  },
  {
    id: 'aneurysm-fsi',
    title: 'Fluid–structure interaction analysis of pulsatile flow in arterial aneurysms with physics-informed neural networks and computational fluid dynamics',
    authors: ['Ur Rehman, M. A.', 'Ekici, Ö.', 'Farooq, M. A.', 'Butt, K.', OWN_NAME, 'Wang, Z.', 'Liu, H.'],
    status: 'published',
    date: '2025-03',
    venue: 'Physics of Fluids 37(3), 031913',
    areas: ['flow'],
    summary: 'Simulation of six vascular models, four with Marfan aneurysm and two healthy, combined with physics-informed networks that recover pressure, velocity and wall shear stress at lower cost.',
    note: 'Open access, CC BY 4.0',
    links: [
      { label: 'DOI', href: 'https://doi.org/10.1063/5.0259296' },
      { label: 'Code', href: 'https://github.com/michaelajao/Anuerysm_transientFlow_PINNs' },
    ],
    highlight: true,
    citations: 'Cited 24 times (OpenAlex, November 2026)',
  },
  {
    id: 'hybrid-chapter',
    title: 'A hybrid physics-informed neural network–SEIRD model for forecasting COVID-19 intensive care unit demand in England',
    authors: [OWN_NAME, 'Palade, V.', 'He, F.', 'Wark, P. A.', 'Mukandavire, Z.', 'Mousavi, S.'],
    status: 'published',
    date: '2025',
    venue: 'Recent Advances in Deep Learning Applications, pp. 231–256. Chapman & Hall/CRC (Taylor & Francis)',
    areas: ['hs', 'sci'],
    summary: 'Joins an epidemic compartment model to a physics-informed network to estimate intensive care demand in England.',
    links: [{ label: 'DOI', href: 'https://doi.org/10.1201/9781003570882-15' }],
  },
  {
    id: 'icmla-2023',
    title: 'Deep learning based forecasting of COVID-19 hospitalisation in England: a comparative analysis',
    authors: [OWN_NAME, 'Palade, V.', 'Mousavi, S.', 'He, F.', 'Wark, P. A.'],
    status: 'published',
    date: '2023-12',
    venue: 'IEEE ICMLA 2023, pp. 1344–1349',
    areas: ['hs'],
    summary: 'A like-for-like comparison of deep learning baselines for hospital admissions across England.',
    note: 'Conference paper and poster',
    links: [
      { label: 'DOI', href: 'https://doi.org/10.1109/ICMLA58977.2023.00203' },
      { label: 'Code', href: 'https://github.com/michaelajao/EpiHealthForecast' },
    ],
    figure: { src: '/images/research/icmla-fig4.webp', alt: 'Line chart of actual ventilator bed use against single-step model predictions from January to March 2023.', width: 1500, height: 819 },
  },
  {
    id: 'msagat-net',
    title: 'MSAGAT-Net: multi-scale temporal adaptive graph attention for efficient spatiotemporal epidemic forecasting',
    authors: [OWN_NAME, 'Palade, V.', 'He, F.', 'Wark, P. A.', 'Mousavi, S.', 'Mukandavire, Z.'],
    status: 'preprint',
    date: '2025',
    venue: 'SSRN preprint',
    areas: ['hs'],
    summary: 'A graph attention network that learns how regions influence each other over several time scales, for regional multi-step prediction.',
    note: 'Also under review at a journal',
    links: [
      { label: 'SSRN', href: 'https://doi.org/10.2139/ssrn.5719497' },
      { label: 'Code', href: 'https://github.com/michaelajao/MSAGAT-Net' },
    ],
  },
  {
    id: 'taa-surrogate',
    title: 'Multiphysics fluid–structure interaction modeling and physics-informed neural network surrogate for morphology-dependent stress localization in thoracoabdominal aneurysms',
    authors: ['Ur Rehman, M. A.', 'Temimi, H.', OWN_NAME, 'Laadhari, A.', 'Riahi, M. K.', 'Kissami, I.'],
    status: 'review',
    date: '2026',
    venue: 'Manuscript under review',
    areas: ['flow', 'sci'],
    summary: 'A fast neural surrogate for blood flow and wall stress across six thoracoabdominal aneurysm shapes.',
  },
  {
    id: 'dam-break',
    title: 'Comparative analysis of numerical schemes and physics-informed neural networks for two-dimensional dam-break problems with source terms under different initial dam breaking conditions',
    authors: ['Zahra', OWN_NAME, 'Farooq, M. A.', 'Khan, F.'],
    status: 'submitted',
    date: '2026',
    venue: 'Manuscript submitted',
    areas: ['sci'],
    summary: 'A like-for-like comparison of classical solvers and physics-informed networks across six dam-break starting conditions.',
  },
  {
    id: 'spectral-pinn',
    title: 'On the orthogonality penalty in spectrally parameterised physics-informed neural networks',
    status: 'progress',
    date: '2026',
    areas: ['sci'],
  },
  {
    id: 'ideal-aorta',
    title: 'Hemodynamics of idealised descending thoracic aortic aneurysms and recovery of pressure and wall shear stress from sparse velocity',
    status: 'progress',
    date: '2026',
    areas: ['flow'],
  },
]

const sortKey = (d: string) => d.padEnd(7, '-00')

/** Every output, newest first. Entries with the same date keep their order above. */
export const byDate = (list: Publication[] = PUBLICATIONS) => [...list].sort((a, b) => sortKey(b.date).localeCompare(sortKey(a.date)))

export const yearOf = (p: Publication) => p.date.slice(0, 4)

/** Plain-text citation for the copy button. */
export function citationOf(p: Publication) {
  const who = p.authors?.length ? `${p.authors.join(', ')} ` : ''
  const doi = p.links?.find((l) => l.href.includes('doi.org'))?.href
  return `${who}(${yearOf(p)}). ${p.title}.${p.venue ? ` ${p.venue}.` : ''}${doi ? ` ${doi}` : ''}`
}
