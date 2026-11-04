import type { AreaId } from './publications'

export type Figure = { src: string; width: number; height: number; source: string; alt: string; caption: string }

/**
 * Research themes: what the work is about, not a list of it. Papers belong in
 * publications.ts. A figure appears once on the page, so a theme's figure must
 * not also be set on a publication. Use published or preprint work only.
 */
export const AREAS: { id: AreaId; title: string; short: string; desc: string; with: string; figures: Figure[] }[] = [
  {
    id: 'flow',
    title: 'Physics-informed models of blood flow',
    short: 'Blood flow',
    desc: 'Neural networks that learn the physics of blood flow from simulation data, so wall shear stress in arteries, aneurysms and bypass grafts can be estimated in seconds rather than hours.',
    with: 'With collaborators at NUST, Pakistan, and colleagues in CSMM, Coventry.',
    figures: [{ src: '/images/research/fsi-fig7-cfd-pinn.webp', width: 2000, height: 728, source: 'Physics of Fluids, 2025, Fig. 7(a, b) · CC BY 4.0', alt: 'CFD and PINN wall shear stress maps side by side for one Marfan aneurysm case, in two views, at systole and diastole.', caption: 'CFD and PINN wall shear stress side by side for one Marfan aneurysm case, at systole and diastole.' }],
  },
  {
    id: 'sci',
    title: 'Scientific machine learning',
    short: 'Scientific ML',
    desc: 'Comparing classical numerical schemes with physics-informed networks on dam-break and shallow-water flows, and joining compartment models to neural networks.',
    with: 'With colleagues at NUST Islamabad and Coventry University.',
    figures: [{ src: '/images/research/hybrid-seird-model.webp', width: 1400, height: 709, source: 'Hybrid PINN–SEIRD model', alt: 'Flow diagram of the compartmental epidemic model, from susceptible through exposed, infectious, hospital and critical care to recovered or deceased.', caption: 'The compartmental model behind the hybrid physics-informed network.' }],
  },
  {
    id: 'gen',
    title: 'Applied and generative AI',
    short: 'Applied and generative AI',
    desc: 'Language-model agents and retrieval systems, and machine learning for student engagement and digital health.',
    with: 'Coventry University and research co-authors.',
    figures: [
      { src: '/images/research/hope-move-architecture.webp', width: 1692, height: 929, source: 'HOPE-MOVE', alt: 'System diagram: the Hope Move platform feeds a facilitator dashboard, which calls a risk engine and a drafting engine. A facilitator reviews, edits and sends each reply.', caption: 'Risk and drafting engines behind a facilitator dashboard. A person reviews and sends every reply.' },
      { src: '/images/research/illustration-digital-health.webp', width: 1300, height: 867, source: 'HOPE-MOVE · Illustration', alt: 'Illustration of a person with a knee brace working at a laptop at home.', caption: 'Digital support for people managing long-term conditions at home.' },
    ],
  },
  {
    id: 'hs',
    title: 'Graph and hybrid models for health systems',
    short: 'Health systems',
    desc: 'Graph attention networks for regional epidemics, and physics-informed models joined to an optimiser that allocates NHS critical-care capacity.',
    with: 'Developed during my PhD at Coventry University.',
    figures: [
      { src: '/images/research/ukci-pipeline.webp', width: 1648, height: 855, source: 'UKCI 2026, in press', alt: 'Pipeline diagram running from regional NHS England data through a physics-informed encoder and a temporal model to an exact regional allocation.', caption: 'From regional NHS data, through a physics-informed encoder, to an exact regional allocation.' },
      { src: '/images/research/msagat-architecture.webp', width: 1500, height: 946, source: 'MSAGAT-Net, Fig. 1', alt: 'Flow diagram of MSAGAT-Net: input and adjacency matrices pass through feature extraction, EAGAM, DMTFM with four dilation rates and PPRM to the output, with a skip connection from input to PPRM.', caption: 'Input and adjacency pass through feature extraction, EAGAM, DMTFM and PPRM, with a skip connection from input to PPRM.' },
    ],
  },
]

export const NEWS: { date: string; text: string }[] = [
  { date: '20 Oct 2026', text: 'Invited talk at the launch of the Centre for Doctoral Training in Artificial Intelligence, Coventry University: “From Student to Success: An AI Alumni Journey”.' },
  { date: 'Sep 2026', text: 'Endorsed by the Royal Academy of Engineering under UK Global Talent, Exceptional Promise.' },
  { date: 'Sep 2026', text: 'Started as Research Fellow on EVOLVE AI at Coventry University.' },
  { date: 'Sep 2026', text: 'New paper in Physics of Fluids on wall shear stress in coronary arteries and grafts.' },
  { date: '10 Sep 2026', text: 'Presented first-author work on NHS critical-care surge allocation at UKCI 2026, Coventry.' },
  { date: 'Jul 2026', text: 'Two new arXiv preprints, on language-model agents for home energy and on retrieval for document question answering.' },
]

export type Talk = { date: string; head: string; sub: string; tag: string; className: string }

const talk = 'tag tag-acc'
const honour = 'tag tag-pub'

/** Talks and awards not already recorded elsewhere on the page. A talk given on a listed paper goes in that paper's `note`. */
export const TALKS: Talk[] = [
  { date: '20 Oct 2026', head: 'Invited talk, Centre for Doctoral Training in AI launch event, Coventry University', sub: 'From Student to Success: An AI Alumni Journey', tag: 'Invited talk', className: talk },
  { date: '29–30 Apr 2026', head: 'Invited speaker, Future Algorithms 2026 (3rd edition, online)', sub: 'Algorithmic training strategies for physics-informed neural network wall shear stress prediction in cardiovascular hemodynamics', tag: 'Invited talk', className: talk },
  { date: '12 Nov 2025', head: 'Research seminar, Centre for Computational Science and Mathematical Modelling, Coventry University', sub: 'Data-Driven Algorithms for Forecasting Critical-Care Demand during the COVID-19 Pandemic', tag: 'Seminar', className: talk },
  { date: '11–12 Jun 2025', head: 'First Prize, poster competition, Future Algorithms 2025 (2nd edition, online)', sub: 'Physics-informed neural networks for fluid–structure interaction analysis of arterial aneurysms', tag: 'Prize', className: honour },
  { date: 'Jun 2024', head: 'Best Reviewer Award, CSMM Conference, Coventry University', sub: 'For reviewing conference papers and giving high-quality feedback to authors', tag: 'Award', className: honour },
  { date: '7–8 May 2024', head: 'Talk, CSMM 2nd Annual Conference, Coventry', sub: 'Physics-informed neural networks for modelling infectious disease dynamics: a case study of COVID-19 in England', tag: 'Talk', className: talk },
  { date: '2023', head: 'Conference presentation, CSMM 1st Annual Conference, Coventry', sub: 'Computational science, mathematical modelling and AI applications', tag: 'Talk', className: talk },
  { date: '26–27 Apr 2022', head: 'Poster, Doctoral Capability and Development Conference (DCAD22), Coventry University', sub: 'Allocating medical resources (vaccine) to control a pandemic', tag: 'Poster', className: talk },
  { date: 'May 2021', head: 'PhD Studentship Award, Coventry University', sub: 'Fully funded studentship at CSMM to research resource allocation during pandemics', tag: 'Award', className: honour },
  { date: 'Oct 2017', head: 'Third Place, Community Development Project, KWASU Entrepreneurship and Innovation Challenge', sub: 'Led a project on youth empowerment through technology', tag: 'Award', className: honour },
]
