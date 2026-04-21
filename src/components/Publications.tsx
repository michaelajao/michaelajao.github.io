'use client'

import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { BookOpen, ExternalLink, FileText, FlaskConical, Copy, Check, Mic } from 'lucide-react'

function roleChipClass(role: string): string {
  const r = role.toLowerCase()
  if (r.includes('prize') || r.includes('award')) return 'bg-amber-900 text-amber-200'
  if (r.includes('committee') || r.includes('reviewer')) return 'bg-purple-900 text-purple-200'
  if (r.includes('attendee')) return 'bg-gray-700 text-gray-300'
  if (r.includes('poster')) return 'bg-blue-900 text-blue-200'
  return 'bg-green-900 text-green-200'
}

type FilterKey = 'all' | 'journal' | 'conference' | 'preprint' | 'talk'

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'journal', label: 'Journal' },
  { key: 'conference', label: 'Conference' },
  { key: 'preprint', label: 'Preprint' },
  { key: 'talk', label: 'Talks' },
]

type PublicationEntry = {
  title: string
  authors: string
  venue: string
  year: string
  type: string
  abstract: string
  link: string
  pdf: string
}

function classify(type: string): Exclude<FilterKey, 'all' | 'preprint' | 'talk'> {
  const t = type.toLowerCase()
  if (t.includes('conference')) return 'conference'
  return 'journal'
}

function isDoiLink(url: string): boolean {
  return /doi\.org|ieeexplore|pubs\.aip\.org|springer|sciencedirect|elsevier|nature\.com|mdpi\.com/.test(url)
}

function toBibtex(p: { authors: string; title: string; venue: string; year: string; type?: string; link?: string }) {
  const firstAuthorSurname =
    (p.authors.split(',')[0] ?? 'anon').trim().split(/\s+/).pop() ?? 'anon'
  const firstWord = (p.title.split(/\s+/)[0] ?? 'work').toLowerCase().replace(/[^a-z0-9]/g, '')
  const key = `${firstAuthorSurname.toLowerCase().replace(/[^a-z0-9]/g, '')}${p.year}${firstWord}`
  const t = (p.type ?? '').toLowerCase()
  const entryType = t.includes('conference') ? 'inproceedings' : t.includes('book') ? 'incollection' : 'article'
  const venueField = entryType === 'article' ? 'journal' : 'booktitle'
  const urlLine = p.link && p.link !== '#' ? `  url = {${p.link}},\n` : ''
  return `@${entryType}{${key},
  author = {${p.authors}},
  title = {${p.title}},
  ${venueField} = {${p.venue}},
  year = {${p.year}},
${urlLine}}`
}

function CopyBibtex({ entry }: { entry: Parameters<typeof toBibtex>[0] }) {
  const [copied, setCopied] = useState(false)
  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(toBibtex(entry))
          setCopied(true)
          setTimeout(() => setCopied(false), 1500)
        } catch {
          /* clipboard blocked — ignore */
        }
      }}
      className="flex items-center gap-2 text-gray-400 hover:text-green-300 transition-colors duration-200 text-sm"
      aria-label="Copy BibTeX citation"
    >
      {copied ? <Check size={16} /> : <Copy size={16} />}
      {copied ? 'Copied' : 'BibTeX'}
    </button>
  )
}

export default function Publications() {
  const [filter, setFilter] = useState<FilterKey>('all')

  const publications: PublicationEntry[] = [
    {
      title: "Modeling of Double Descending Thoracic Aortic Aneurysms Using Computational Fluid Dynamics (CFD) and Residual-Based Physics-Informed Neural Networks (ResNets-PINNs)",
      authors: "N. Fatima, M. Hamza, M. A. Farooq, Michael Ajao-Olarinoye",
      venue: "Pramana — Journal of Physics (Accepted for publication)",
      year: "2026",
      type: "Journal Article — Accepted",
      abstract: "Accepted study combining computational fluid dynamics with residual-based physics-informed neural networks to model haemodynamics in double descending thoracic aortic aneurysms, advancing PINN surrogates for patient-specific vascular modelling.",
      link: "#",
      pdf: "#"
    },
    {
      title: "A hybrid physics-informed neural network - SEIRD model for forecasting COVID-19 intensive care unit demand in England",
      authors: "Michael Ajao-Olarinoye, Vasile Palade, Fei He, Penny A. Wark, Zindoga Mukandavire, Seyedeh Mousavi",
      venue: "Recent advances in deep learning applications - Taylor Francis",
      year: "2026",
      type: "Book Chapter",
      abstract: "This work presents a novel hybrid approach combining physics-informed neural networks with the SEIRD epidemiological model to forecast COVID-19 intensive care unit demand in England, bridging traditional mathematical modeling with modern AI approaches.",
      link: "#",
      pdf: "#"
    },
    {
      title: "Fluid–structure interaction analysis of pulsatile flow in arterial aneurysms with physics-informed neural networks and computational fluid dynamics",
      authors: "M. Abaid Ur Rehman, Ozgur Ekici, M. Asif Farooq, Khayam Butt, Michael Ajao-Olarinoye, Zhen Wang, Haipeng Liu",
      venue: "Physics of Fluids - AIP Publishing",
      year: "2025",
      type: "Journal Article",
      abstract: "This study analyzes fluid–structure interaction in arterial aneurysms using physics-informed neural networks. We examined six vascular models (four diseased aortas with Marfan syndrome aneurysms and two healthy models) to evaluate wall shear stress and von Mises stress. Physics-informed neural networks demonstrated strong agreement with CFD results while significantly reducing computational cost.",
      link: "https://pubs.aip.org/aip/pof/article/37/3/031913/3339473",
      pdf: "https://pubs.aip.org/aip/pof/article/37/3/031913/3339473"
    },
    {
      title: "Deep Learning Based Forecasting of COVID-19 Hospitalisation in England: A Comparative Analysis",
      authors: "Michael Ajao-Olarinoye, Vasile Palade, Seyedeh Mousavi, Fei He, Penny A. Wark",
      venue: "2023 International Conference on Machine Learning and Applications (ICMLA)",
      year: "2023",
      type: "Conference Paper",
      abstract: "A comprehensive comparative analysis of deep learning approaches for forecasting COVID-19 hospitalizations in England, evaluating various neural network architectures and their predictive performance for healthcare resource planning.",
      link: "https://ieeexplore.ieee.org/abstract/document/10459821",
      pdf: "https://ieeexplore.ieee.org/abstract/document/10459821"
    }
  ]

  const preprints = [
    {
      title: "Comparative CFD Analysis of Wall Shear Stress in Healthy and Diseased Coronary Arteries and Saphenous Vein Grafts Using Physics-Informed Neural Network Surrogates",
      authors: "M. Ur Rehman, O. Ekici, S. Erdener, Michael Ajao-Olarinoye, A. G. Kuchumov, F. Jia",
      venue: "Submitted to Physics of Fluids",
      status: "Under Review",
      year: "2025"
    },
    {
      title: "Morphology-Dependent Stress Localization in Thoracoabdominal Aneurysms: FSI Modeling with a Physics-Informed Neural Network Surrogate",
      authors: "M. Ur Rehman, H. Temimi, Michael Ajao-Olarinoye, A. Laadhari, M. Riahi, I. Kissami",
      venue: "Submitted to Physics of Fluids",
      status: "Under Review",
      year: "2025"
    },
    {
      title: "MSAGAT-Net: Multi-Scale Temporal Adaptive Graph Attention for Efficient Spatiotemporal Epidemic Forecasting",
      authors: "Michael Ajao-Olarinoye, Vasile Palade, Fei He, Penny A. Wark, Seyedeh Mousavi, Zindoga Mukandavire",
      venue: "Submitted to Artificial Intelligence in Medicine (AIM) · Preprint on SSRN",
      status: "Preprint · Under Review",
      year: "2025"
    }
  ]

  const conferenceActivity: {
    name: string
    years: string
    latestYear: number
    link: string | null
    roles: string[]
    contributions: string[]
  }[] = [
    {
      name: "International Conference of Future Algorithms",
      years: "2025, 2026",
      latestYear: 2026,
      link: null,
      roles: ["Invited Talk", "First Prize (Poster)"],
      contributions: [
        "Algorithmic Training Strategies for PINN Wall-Shear-Stress Prediction in Cardiovascular Hemodynamics — Invited Talk (3rd Conf., online, 29–30 April 2026)",
        "Physics-Informed Neural Networks for Fluid-Structure Interaction Analysis of Arterial Aneurysms — Poster (2nd Conf., July 2025, First Prize)"
      ]
    },
    {
      name: "International Conference on Machine Learning and Applications (ICMLA)",
      years: "2023, 2024",
      latestYear: 2024,
      link: "https://www.icmla-conference.org/",
      roles: ["Presenter", "Program Committee"],
      contributions: [
        "Deep Learning Based Forecasting of COVID-19 Hospitalisation in England — Conference Paper (December 2023)"
      ]
    },
    {
      name: "Computational Science and Mathematical Modelling Conference (CSMM), Coventry University",
      years: "2023, 2024",
      latestYear: 2024,
      link: "https://sites.google.com/view/csmconference/",
      roles: ["Presenter", "Best Reviewer Award"],
      contributions: [
        "Physics-Informed Neural Networks for Modelling Infectious Disease Dynamics: A Case Study of COVID-19 in England (2024)"
      ]
    },
    {
      name: "The Julia Language Conference (JuliaCon)",
      years: "2022, 2023",
      latestYear: 2023,
      link: "https://juliacon.org/",
      roles: ["Attendee"],
      contributions: []
    }
  ]

  const sortedPublications = useMemo(
    () => [...publications].sort((a, b) => Number(b.year) - Number(a.year)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  )
  const sortedPreprints = useMemo(
    () => [...preprints].sort((a, b) => Number(b.year) - Number(a.year)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  )
  const sortedActivity = useMemo(
    () => [...conferenceActivity].sort((a, b) => b.latestYear - a.latestYear),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  )

  const visiblePublications = sortedPublications.filter((p) => {
    if (filter === 'all') return true
    if (filter === 'journal' || filter === 'conference') return classify(p.type) === filter
    return false
  })
  const showPreprints = filter === 'all' || filter === 'preprint'
  const showActivity = filter === 'all' || filter === 'talk'
  const showPublications = filter === 'all' || filter === 'journal' || filter === 'conference'

  return (
    <section id="publications" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4">
            Publications & Presentations
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Peer-reviewed publications, preprints, and conference outputs across physics-informed neural networks,
            cardiovascular hemodynamics, and spatiotemporal epidemic forecasting.
          </p>
        </motion.div>

        {/* Filter chips */}
        <div
          aria-label="Filter publications"
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {FILTERS.map(({ key, label }) => {
            const active = filter === key
            return (
              <button
                key={key}
                type="button"
                aria-pressed={active ? 'true' : 'false'}
                onClick={() => setFilter(key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 border ${
                  active
                    ? 'bg-green-600 border-green-600 text-white'
                    : 'bg-transparent border-gray-700 text-gray-300 hover:border-green-500 hover:text-green-300'
                }`}
              >
                {label}
              </button>
            )
          })}
        </div>

        {/* Publications */}
        {showPublications && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <BookOpen className="text-green-600" size={24} />
              Publications
              <span className="text-sm text-gray-400 font-normal">({visiblePublications.length})</span>
            </h3>

            {visiblePublications.length === 0 ? (
              <p className="text-gray-400 italic">No publications match this filter.</p>
            ) : (
              <div className="space-y-6">
                {visiblePublications.map((pub, index) => {
                  const hasLink = pub.link && pub.link !== '#'
                  const linkLabel = hasLink && isDoiLink(pub.link) ? 'DOI' : 'View Publication'
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="publication-card"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <span className="bg-green-900 text-green-200 px-3 py-1 rounded-full text-sm font-medium">
                          {pub.type}
                        </span>
                        <span className="text-gray-400 text-sm">{pub.year}</span>
                      </div>

                      <h4 className="text-xl font-semibold text-white mb-2">{pub.title}</h4>

                      <p className="text-gray-300 mb-2">
                        <strong>Authors:</strong> {pub.authors}
                      </p>

                      <p className="text-gray-300 mb-3">
                        <strong>Venue:</strong> {pub.venue}
                      </p>

                      <p className="text-gray-300 mb-4 leading-relaxed">{pub.abstract}</p>

                      <div className="flex flex-wrap gap-4 items-center">
                        {hasLink && (
                          <a
                            href={pub.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors duration-200"
                          >
                            <ExternalLink size={16} />
                            {linkLabel}
                          </a>
                        )}
                        {pub.pdf && pub.pdf !== '#' && pub.pdf !== pub.link && (
                          <a
                            href={pub.pdf}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors duration-200"
                          >
                            <FileText size={16} />
                            PDF
                          </a>
                        )}
                        {!hasLink && (
                          <a
                            href="#contact"
                            className="flex items-center gap-2 text-gray-400 hover:text-green-300 transition-colors duration-200 text-sm italic"
                          >
                            <FileText size={16} />
                            In preparation — request a draft
                          </a>
                        )}
                        <CopyBibtex entry={pub} />
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            )}
          </div>
        )}

        {/* Preprints & Under Review */}
        {showPreprints && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <FlaskConical className="text-green-600" size={24} />
              Preprints & Under Review
              <span className="text-sm text-gray-400 font-normal">({sortedPreprints.length})</span>
            </h3>

            <div className="space-y-6">
              {sortedPreprints.map((pre, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="publication-card"
                >
                  <div className="flex justify-between items-start mb-3">
                    <span className="bg-purple-900 text-purple-200 px-3 py-1 rounded-full text-sm font-medium">
                      {pre.status}
                    </span>
                    <span className="text-gray-400 text-sm">{pre.year}</span>
                  </div>

                  <h4 className="text-xl font-semibold text-white mb-2">{pre.title}</h4>

                  <p className="text-gray-300 mb-2">
                    <strong>Authors:</strong> {pre.authors}
                  </p>

                  <p className="text-gray-300 mb-3">
                    <strong>Venue:</strong> {pre.venue}
                  </p>

                  <div className="flex flex-wrap gap-4 items-center">
                    <CopyBibtex entry={{ ...pre, type: 'preprint' }} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Conference activity */}
        {showActivity && (
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Mic className="text-green-600" size={24} />
              Conference Activity
              <span className="text-sm text-gray-400 font-normal">({sortedActivity.length})</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sortedActivity.map((conf, index) => (
                <motion.div
                  key={conf.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800 p-6 rounded-lg flex flex-col"
                >
                  <div className="flex justify-between items-start gap-3 mb-3">
                    <h4 className="text-lg font-semibold text-white">{conf.name}</h4>
                    <span className="shrink-0 text-gray-400 text-sm whitespace-nowrap">{conf.years}</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {conf.roles.map((role) => (
                      <span
                        key={role}
                        className={`${roleChipClass(role)} px-3 py-1 rounded-full text-xs font-medium`}
                      >
                        {role}
                      </span>
                    ))}
                  </div>

                  {conf.contributions.length > 0 && (
                    <ul className="text-gray-300 text-sm space-y-2 mb-4 list-disc list-outside pl-5">
                      {conf.contributions.map((c, i) => (
                        <li key={i}>{c}</li>
                      ))}
                    </ul>
                  )}

                  {conf.link && (
                    <a
                      href={conf.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors duration-200 text-sm"
                    >
                      <ExternalLink size={14} />
                      Conference website
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
