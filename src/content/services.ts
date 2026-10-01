import type { IntentValue } from './site'

export type Service = {
  id: string
  title: string
  kick?: string
  text: string
  more: string
  cta: string
  intent: IntentValue
  includes: string[]
  checks: string[]
  note?: string
}

export const SERVICES: Service[] = [
  {
    id: 'systems',
    title: 'Complete automated business systems',
    kick: 'Main service',
    text: 'End-to-end systems where bookings or orders, customer accounts, payments, invoicing, accounting, notifications and reporting all run together automatically, with AI agents where they help. Delivered as web and mobile apps.',
    more: 'Example: Papromakeovers, a booking site where clients book online and invoices are raised automatically. A written scope first, then built and released in stages.',
    cta: 'Request a quote',
    intent: 'project',
    includes: [
      'Bookings or orders, with availability and confirmations.',
      'Customer accounts and sign-in.',
      'Payments through your own payment provider account.',
      'Invoices and accounting records raised automatically.',
      'Notifications by email, and by WhatsApp where it helps.',
      'Reporting you can read without asking anyone.',
      'Web apps and, where you need them, mobile apps.',
    ],
    checks: [
      'A written scope says what is and is not included before any work starts.',
      'Built and released in stages, so you see it working early.',
      'Payments run through your own provider account. I never hold your funds.',
      'A person approves anything that cannot be undone, such as a refund or a deletion.',
      'All code is reviewed and tested before release, including code written with AI tools.',
    ],
    note: 'I build the software. I do not give tax, accounting or regulated financial advice.',
  },
  {
    id: 'agents',
    title: 'AI agents and workflows',
    text: 'Enquiry, document and knowledge agents that work on WhatsApp and your website. A person approves anything that cannot be undone.',
    more: 'Built in small steps around your own documents and tools, and checked on real examples before it goes live.',
    cta: 'Request a quote',
    intent: 'project',
    includes: [
      'Enquiry agents that answer customer questions on your website or WhatsApp and pass hard ones to you with the conversation attached.',
      'Document agents that read invoices, receipts or forms into a record your team checks.',
      'Knowledge assistants that answer staff questions from your own documents, with each person seeing only what they are allowed to see.',
    ],
    checks: [
      'Tested on real examples from your business before it goes live, and checked again afterwards.',
      'A person approves refunds, payments, external emails and deletions.',
      'Access is limited to what the job needs.',
      'You get a short note naming every model used and where your data goes.',
      'Not suitable for health data or for automated decisions about individuals.',
    ],
  },
  {
    id: 'data',
    title: 'Data science and applied ML',
    text: 'Analytics, dashboards and predictive models built on your data, with the findings written up in plain English.',
    more: 'From a first look at what your data can support to a model running inside your workflow.',
    cta: 'Request a quote',
    intent: 'project',
    includes: [
      'A first look at what your data can and cannot support.',
      'Analytics and dashboards that answer a specific business question.',
      'Predictive models, where they beat a simple rule of thumb.',
      'A plain-English report of the methods, the findings and the limits.',
    ],
    checks: [
      'Models are tested on data they have not seen.',
      'Every model is compared with a simple baseline, so you only pay for machine learning that earns its place.',
      'I check for leakage, show the uncertainty and write down where the model fails.',
      'No models that decide credit, hiring, insurance or eligibility for individuals.',
    ],
  },
  {
    id: 'training',
    title: 'Training and workshops',
    text: 'Hands-on sessions for teams on Python, data science, machine learning and working with generative AI and agents.',
    more: "Tailored to your team's level and the tools it already uses.",
    cta: 'Request a quote',
    intent: 'speaking',
    includes: [
      'Half-day briefings, one-day workshops and courses in several short sessions, online or in person.',
      'Topics include evaluating applications built on language models and agents, Python and data science, and checking whether a machine-learning model can be trusted.',
      'Physics-informed machine learning for research groups.',
    ],
    checks: [
      'Exercises use synthetic or public data.',
      'You keep the slides, code and exercises.',
      'No promises about jobs or salaries.',
    ],
  },
  {
    id: 'research',
    title: 'Research partnering and scientific ML',
    text: 'Joint research and funding bids, for example with Innovate UK, and physics-informed and scientific machine learning for research teams.',
    more: 'I can join a bid as a technical partner or build the modelling work inside a project.',
    cta: 'Start a conversation',
    intent: 'research',
    includes: [
      'Modelling and evaluation input to funding bids and work packages.',
      'Feasibility studies for physics-informed networks and faster surrogate models, compared with your reference solver.',
      'Independent technical review of a model or simulation.',
    ],
    checks: [
      'Claims are limited to what my published work supports.',
      'Simulation and synthetic data only; no patient data.',
      'Confidentiality, ownership of code and where your data lives are agreed in writing first.',
      'No promises about funding outcomes.',
    ],
  },
]

export const HOW: { when: string; title: string; text: string }[] = [
  { when: 'First', title: 'Scope', text: 'A call to understand the problem, then a written scope that says what is and is not included.' },
  { when: 'Then', title: 'Build', text: 'Built and released in small steps, with a person approving every step that matters.' },
  { when: 'Finally', title: 'Hand over', text: 'You get the working system, its documentation and a plain-English walkthrough.' },
]

export const TUTOR_GROUPS: { title: string; tag: string; wip?: boolean; text: string; subjects: string }[] = [
  {
    title: 'University and MSc',
    tag: 'UG · MSc',
    text: 'Machine learning, statistics, Python and R, and dissertation-methodology coaching on your own project.',
    subjects: 'Machine learning, deep learning, statistics, Python and R, information retrieval, big data and computer vision. Dissertation methodology coaching: choosing a research question, designing an evaluation and reporting clearly.',
  },
  {
    title: 'PhD and researchers',
    tag: 'Code and method review',
    text: 'Physics-informed neural networks, scientific machine learning, graph networks and reproducible PyTorch workflows.',
    subjects: 'Physics-informed neural networks, scientific machine learning, time-series and spatiotemporal modelling, graph neural networks and reproducible PyTorch workflows. Code and method review of your own work.',
  },
  {
    title: 'Professionals and career changers',
    tag: 'Python · ML · GenAI',
    text: 'Python, data analysis, machine learning and building with generative AI, with a portfolio project you can show.',
    subjects: 'Python, data analysis, machine learning and building applications with generative AI. A structured programme with a portfolio project and a written learning plan.',
  },
  {
    title: 'School',
    tag: 'Coming soon',
    wip: true,
    text: 'GCSE and A-level maths, computing and physics. Opens once my safeguarding checks and policy are in place.',
    subjects: 'GCSE and A-level maths, computing and physics. School tutoring opens only once my safeguarding checks and written policy are in place. Parents can register interest through the contact form; please do not include a child’s name or details.',
  },
]
