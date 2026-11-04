import type { ReactNode } from 'react'

export type TagKind = 'pub' | 'acc' | 'sub' | 'wip'
export const TAG_CLASS: Record<TagKind, string> = {
  pub: 'tag tag-pub',
  acc: 'tag tag-acc',
  sub: 'tag tag-sub',
  wip: 'tag tag-wip',
}

export type LinkRef = { label: string; href: string; aria?: string }

/* ---------- research map ---------- */
export type MapItem = {
  themes: string[]
  tag: string
  kind: TagKind
  title: string
  href: string
  extras?: LinkRef[]
  small: string
}
export type MapArea = {
  id: string
  label: string
  minor?: boolean
  title: string
  desc: string
  with: string
  items: MapItem[]
}

export const AREAS: MapArea[] = [
  {
    id: 'flow',
    label: 'Area 01',
    title: 'Physics-informed models of blood flow',
    desc: 'Neural networks that learn the physics of blood flow from simulation data, so wall shear stress in arteries, aneurysms and bypass grafts can be estimated in seconds rather than hours.',
    with: 'With collaborators at NUST, Pakistan, and colleagues in CSMM, Coventry.',
    items: [
      { themes: ['flow'], tag: 'Published', kind: 'pub', title: 'Wall shear stress in coronary arteries and grafts using computational fluid dynamics and physics-informed neural networks', href: 'https://doi.org/10.1063/5.0335500', extras: [{ label: 'Code', href: 'https://github.com/michaelajao/CABG_WSS_PINN', aria: 'Code for the coronary wall shear stress paper' }], small: 'Physics of Fluids 38(9), 091905, 2026' },
      { themes: ['flow'], tag: 'Published', kind: 'pub', title: 'Fluid–structure interaction analysis of pulsatile flow in arterial aneurysms with physics-informed neural networks and computational fluid dynamics', href: 'https://doi.org/10.1063/5.0259296', extras: [{ label: 'Code', href: 'https://github.com/michaelajao/Anuerysm_transientFlow_PINNs', aria: 'Code for the aneurysm fluid-structure paper' }], small: 'Physics of Fluids 37(3), 031913, 2025' },
      { themes: ['flow'], tag: 'Accepted', kind: 'acc', title: 'Modeling of double descending thoracic aortic aneurysms using computational fluid dynamics and residual-based physics-informed neural networks', href: 'https://github.com/michaelajao/Double_pinn_hemodynamics', small: 'Pramana – Journal of Physics, accepted 2 March 2026, in press' },
      { themes: ['flow', 'sci'], tag: 'Under review', kind: 'acc', title: 'Multiphysics fluid–structure interaction modelling and physics-informed neural network surrogate for morphology-dependent stress localisation in thoracoabdominal aneurysms', href: 'https://github.com/michaelajao/TAA-aneurysm', small: 'Under review, co-author' },
      { themes: ['flow'], tag: 'In progress', kind: 'wip', title: 'Hemodynamics of idealised descending thoracic aortic aneurysms and recovery of pressure and wall shear stress from sparse velocity', href: 'https://github.com/michaelajao/IdealAorta-PINN', small: 'Research project, in progress' },
    ],
  },
  {
    id: 'sci',
    label: 'Area 02',
    title: 'Scientific machine learning',
    desc: 'Comparing classical numerical schemes with physics-informed networks on dam-break and shallow-water flows, to see where each approach works best.',
    with: 'With colleagues at NUST Islamabad.',
    items: [
      { themes: ['sci'], tag: 'Submitted', kind: 'sub', title: 'Comparative analysis of numerical schemes and physics-informed neural networks for two-dimensional dam-break problems', href: 'https://github.com/michaelajao/swe-dambreak', small: 'Manuscript submitted, with NUST colleagues' },
      { themes: ['sci'], tag: 'In progress', kind: 'wip', title: 'On the orthogonality penalty in spectrally parameterised physics-informed neural networks', href: 'https://github.com/michaelajao/spectral-pinn', small: 'First author, in progress' },
    ],
  },
  {
    id: 'gen',
    label: 'Area 03',
    title: 'Applied and generative AI',
    desc: 'Digital health AI through HOPE-MOVE and student engagement modelling through EVOLVE AI. Research also covers language-model agents and retrieval systems for home energy scheduling and document question answering.',
    with: 'Coventry University (HOPE-MOVE and EVOLVE AI) and research co-authors.',
    items: [
      { themes: ['gen'], tag: 'Preprint', kind: 'sub', title: 'LLMs for agentic home energy management', href: 'https://arxiv.org/abs/2607.04569', small: 'arXiv:2607.04569, 2026, co-author' },
      { themes: ['gen'], tag: 'Preprint', kind: 'sub', title: 'Controlled evaluation of graph and multimodal augmentation in retrieval-augmented generation for document question answering', href: 'https://arxiv.org/abs/2607.16604', small: 'arXiv:2607.16604, 2026, co-author' },
      { themes: ['gen'], tag: 'In progress', kind: 'wip', title: 'EVOLVE AI', href: '/about/', small: 'Student engagement and academic risk modelling, Coventry University' },
      { themes: ['gen'], tag: 'Funded', kind: 'acc', title: 'HOPE-MOVE', href: 'https://www.coventry.ac.uk/research/research-directories/projects/2026/hope-move-help-overcome-problems-effectively--movement-and-healthy-lifestyle/', small: 'Innovate UK, Coventry University' },
    ],
  },
  {
    id: 'hs',
    label: 'Area 04 · from my PhD',
    minor: true,
    title: 'Graph and hybrid models for health systems',
    desc: 'Graph attention networks and hybrid physics-informed models, joined to an optimiser that allocates NHS critical-care capacity.',
    with: 'Developed during my PhD at Coventry University.',
    items: [
      { themes: ['hs'], tag: 'Accepted', kind: 'acc', title: 'Physics-informed multi-quantile forecasting for risk-averse NHS critical-care surge allocation', href: 'https://github.com/michaelajao/ukci2026', small: 'UKCI 2026, first author. Presented 10 Sep 2026; proceedings in press' },
      { themes: ['hs', 'sci'], tag: 'Published', kind: 'pub', title: 'A hybrid physics-informed neural network–SEIRD model for forecasting COVID-19 intensive care unit demand in England', href: 'https://doi.org/10.1201/9781003570882-15', small: 'Chapman & Hall/CRC, Taylor & Francis, 2025, first author' },
      { themes: ['hs'], tag: 'Published', kind: 'pub', title: 'Deep learning based forecasting of COVID-19 hospitalisation in England: a comparative analysis', href: 'https://doi.org/10.1109/ICMLA58977.2023.00203', extras: [{ label: 'Code', href: 'https://github.com/michaelajao/EpiHealthForecast', aria: 'Code for the ICMLA 2023 paper' }], small: 'IEEE ICMLA 2023, first author' },
      { themes: ['hs'], tag: 'Under review', kind: 'sub', title: 'MSAGAT-Net: multi-scale temporal adaptive graph attention for efficient spatiotemporal epidemic forecasting', href: 'https://doi.org/10.2139/ssrn.5719497', extras: [{ label: 'Code', href: 'https://github.com/michaelajao/MSAGAT-Net', aria: 'Code for MSAGAT-Net' }], small: 'SSRN, 2025, first author' },
    ],
  },
]

/* ---------- papers ledger ---------- */
export type Paper = {
  date: string
  venue: string
  tag: string
  kind: TagKind
  title: string
  summary: string
  role: string
  links: LinkRef[]
}

export const PAPERS: Paper[] = [
  {
    date: '09.2026',
    venue: 'UKCI 2026, Coventry',
    tag: 'Accepted',
    kind: 'acc',
    title: 'Physics-informed multi-quantile forecasting for risk-averse NHS critical-care surge allocation',
    summary: 'A physics-informed model that outputs uncertainty ranges feeds a risk-averse optimiser. Unmet demand stays close to simple rules while far fewer patients are moved.',
    role: 'First author. Presented 10 September 2026; proceedings (Springer) in press.',
    links: [{ label: 'Code', href: 'https://github.com/michaelajao/ukci2026', aria: 'Code for the UKCI 2026 paper' }],
  },
  {
    date: '09.2026',
    venue: 'Physics of Fluids 38(9), 091905',
    tag: 'Published',
    kind: 'pub',
    title: 'Wall shear stress in coronary arteries and grafts using computational fluid dynamics and physics-informed neural networks',
    summary: 'A network trained on twelve patient-specific simulations predicts wall shear stress in healthy, grafted and diseased coronary arteries.',
    role: 'Co-author (fourth). With Ur Rehman, Ekici, Erdener, Kuchumov and Jia.',
    links: [
      { label: 'DOI', href: 'https://doi.org/10.1063/5.0335500', aria: 'DOI for the coronary wall shear stress paper' },
      { label: 'Code', href: 'https://github.com/michaelajao/CABG_WSS_PINN', aria: 'Code for the coronary wall shear stress paper' },
    ],
  },
  {
    date: '2026',
    venue: 'Pramana – Journal of Physics',
    tag: 'Accepted',
    kind: 'acc',
    title: 'Modeling of double descending thoracic aortic aneurysms using computational fluid dynamics and residual-based physics-informed neural networks',
    summary: 'A residual-network model for double-bulge aneurysms of 4, 5 and 6 cm, trained on computed wall data and compared with the solver.',
    role: 'Co-author. Accepted 2 March 2026, in press.',
    links: [{ label: 'Code', href: 'https://github.com/michaelajao/Double_pinn_hemodynamics', aria: 'Code for the double aneurysm paper' }],
  },
  {
    date: '03.2025',
    venue: 'Physics of Fluids 37(3), 031913',
    tag: 'Published',
    kind: 'pub',
    title: 'Fluid–structure interaction analysis of pulsatile flow in arterial aneurysms with physics-informed neural networks and computational fluid dynamics',
    summary: 'Simulation of six vascular models, four with Marfan aneurysm and two healthy, combined with physics-informed networks that recover pressure, velocity and wall shear stress at lower cost.',
    role: 'Co-author. Open access, CC BY 4.0.',
    links: [
      { label: 'DOI', href: 'https://doi.org/10.1063/5.0259296', aria: 'DOI for the aneurysm fluid-structure paper' },
      { label: 'Code', href: 'https://github.com/michaelajao/Anuerysm_transientFlow_PINNs', aria: 'Code for the aneurysm fluid-structure paper' },
    ],
  },
]

export type EarlyItem = {
  meta: string
  title: string
  note: ReactNode
  links: LinkRef[]
}

export const EARLY: EarlyItem[] = [
  {
    meta: '2025 · Chapter',
    title: 'A hybrid physics-informed neural network–SEIRD model for forecasting COVID-19 intensive care unit demand in England',
    note: (
      <>
        First author. Chapman &amp; Hall/CRC, Taylor &amp; Francis, in <i>Recent Advances in Deep Learning Applications</i>. Published.
      </>
    ),
    links: [{ label: 'DOI', href: 'https://doi.org/10.1201/9781003570882-15', aria: 'DOI for the hybrid PINN-SEIRD chapter' }],
  },
  {
    meta: '12.2023 · Conference',
    title: 'Deep learning based forecasting of COVID-19 hospitalisation in England: a comparative analysis',
    note: 'First author. IEEE ICMLA 2023, Jacksonville, Florida. Published; conference paper and poster.',
    links: [
      { label: 'DOI', href: 'https://doi.org/10.1109/ICMLA58977.2023.00203', aria: 'DOI for the ICMLA 2023 paper' },
      { label: 'Code', href: 'https://github.com/michaelajao/EpiHealthForecast', aria: 'Code for the ICMLA 2023 paper' },
    ],
  },
]

export type Preprint = {
  tag: string
  kind: TagKind
  meta: string
  title: string
  text: string
  link?: LinkRef
}

export const PREPRINTS: Preprint[] = [
  { tag: 'Preprint', kind: 'sub', meta: 'arXiv 2026 · Co-author', title: 'LLMs for agentic home energy management', text: 'Five language-model backends compared against an optimisation benchmark using real tariff, weather and solar data. Not yet peer reviewed.', link: { label: 'Read on arXiv', href: 'https://arxiv.org/abs/2607.04569' } },
  { tag: 'Preprint', kind: 'sub', meta: 'arXiv 2026 · Co-author', title: 'Controlled evaluation of graph and multimodal augmentation in retrieval-augmented generation for document question answering', text: 'Tests when graph and multimodal retrieval really help, with controls for text leakage. Not yet peer reviewed.', link: { label: 'Read on arXiv', href: 'https://arxiv.org/abs/2607.16604' } },
  { tag: 'Submitted', kind: 'acc', meta: 'With NUST colleagues', title: 'Comparative analysis of numerical schemes and physics-informed neural networks for two-dimensional dam-break problems', text: 'A like-for-like comparison of classical solvers and physics-informed networks across six dam-break starting conditions.' },
  { tag: 'In progress', kind: 'wip', meta: 'First author', title: 'On the orthogonality penalty in spectrally parameterised physics-informed neural networks', text: 'Does a published training method still help when the flow contains shocks? Testing it on shock-dominated shallow-water problems.' },
  { tag: 'Preprint', kind: 'sub', meta: 'SSRN 2025 · First author · Under review', title: 'MSAGAT-Net: multi-scale temporal adaptive graph attention for efficient spatiotemporal epidemic forecasting', text: 'A graph attention network that learns how regions influence each other over several time scales, for regional multi-step prediction.', link: { label: 'Read on SSRN', href: 'https://doi.org/10.2139/ssrn.5719497' } },
  { tag: 'Under review', kind: 'acc', meta: 'Co-author', title: 'Multiphysics fluid–structure interaction modelling and physics-informed neural network surrogate for morphology-dependent stress localisation in thoracoabdominal aneurysms', text: 'A fast neural surrogate for blood flow and wall stress across six thoracoabdominal aneurysm shapes.' },
  { tag: 'In progress', kind: 'wip', meta: 'Research project', title: 'Hemodynamics of idealised descending thoracic aortic aneurysms and recovery of pressure and wall shear stress from sparse velocity', text: 'How much hidden pressure and wall shear stress can be recovered from velocity measured at a small fraction of points, across twelve idealised aneurysm models.' },
]

/* ---------- talks, prizes and service ---------- */
export type Talk = { date: string; head: string; sub: string; tag: string; kind: TagKind }

export const TALKS: Talk[] = [
  { date: '10 Sep 2026', head: 'Oral presentation, UKCI 2026, Coventry', sub: 'Physics-informed multi-quantile forecasting for risk-averse NHS critical-care surge allocation', tag: 'Talk', kind: 'acc' },
  { date: '29–30 Apr 2026', head: 'Invited speaker, Future Algorithms 2026 (3rd edition, online)', sub: 'Algorithmic training strategies for physics-informed neural network wall shear stress prediction in cardiovascular hemodynamics', tag: 'Invited talk', kind: 'acc' },
  { date: 'Jun–Jul 2025', head: 'First Prize, poster competition, Future Algorithms 2025 (2nd edition)', sub: 'Physics-informed neural networks for fluid–structure interaction analysis of arterial aneurysms', tag: 'Prize', kind: 'pub' },
  { date: 'Dec 2024', head: 'Programme Committee member, 23rd IEEE ICMLA', sub: 'Reviewing for the International Conference on Machine Learning and Applications', tag: 'Service', kind: 'acc' },
  { date: 'Jun 2024', head: 'Best Reviewer Award, CSMM Conference, Coventry University', sub: 'For reviewing conference papers and giving high-quality feedback to authors', tag: 'Award', kind: 'pub' },
  { date: '7–8 May 2024', head: 'Talk, CSMM 2nd Annual Conference, Coventry', sub: 'Physics-informed neural networks for modelling infectious disease dynamics: a case study of COVID-19 in England', tag: 'Talk', kind: 'acc' },
  { date: 'CSMM, Coventry', head: 'Research seminar, Centre for Computational Science and Mathematical Modelling (Kestral Room, Elm Bank)', sub: 'Data-driven algorithms for forecasting critical-care demand during the COVID-19 pandemic: deep learning baselines for hospital admissions, a hybrid PINN–SEIR model, and the MSAGAT-Net graph approach', tag: 'Seminar', kind: 'acc' },
  { date: 'Dec 2023', head: 'Poster, IEEE ICMLA 2023, Jacksonville, Florida', sub: 'Deep learning based forecasting of COVID-19 hospitalisation in England: a comparative analysis', tag: 'Poster', kind: 'pub' },
  { date: '2023', head: 'Conference presentation, CSMM 1st Annual Conference, Coventry', sub: 'Computational science, mathematical modelling and AI applications', tag: 'Talk', kind: 'acc' },
  { date: '26–27 Apr 2022', head: 'Poster, Doctoral Capability and Development Conference (DCAD22), Coventry University', sub: 'Allocating medical resources (vaccine) to control a pandemic', tag: 'Poster', kind: 'pub' },
  { date: 'May 2021', head: 'PhD Studentship Award, Coventry University', sub: 'Fully funded studentship at CSMM to research resource allocation during pandemics', tag: 'Award', kind: 'pub' },
  { date: 'Oct 2017', head: 'Third Place, Community Development Project, KWASU Entrepreneurship and Innovation Challenge', sub: 'Led a project on youth empowerment through technology', tag: 'Award', kind: 'pub' },
]

export const APPEARED_IN: { name: string; sub?: string }[] = [
  { name: 'Physics of Fluids' },
  { name: 'IEEE ICMLA' },
  { name: 'Pramana', sub: 'Journal of Physics' },
  { name: 'Taylor & Francis', sub: 'Chapman & Hall/CRC' },
  { name: 'UKCI 2026' },
  { name: 'Future Algorithms', sub: 'First Prize, Poster' },
]
