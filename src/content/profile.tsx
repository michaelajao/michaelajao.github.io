import type { ReactNode } from 'react'

export type Entry = { title: string; small?: ReactNode; when: string }

export const ABOUT_PARAGRAPHS = [
  'I lead AI research on EVOLVE AI, which models student engagement and academic risk to support early intervention. Before that I led machine learning and generative AI research on HOPE-MOVE, an Innovate UK digital health project, building participant dropout prediction and language models for facilitator support.',
  'I also collaborate on physics-informed neural networks for cardiovascular blood flow, work that began during my PhD in Computational Science and Mathematical Modelling at Coventry.',
]

export const ROLES: Entry[] = [
  { title: 'Research Fellow, EVOLVE AI', small: 'Strategic Planning and Insight Office, Coventry University.', when: 'Sep 2026 – present' },
  { title: 'Research Fellow, HOPE-MOVE', small: (
      <>
        Centre for Computational Science and Mathematical Modelling, Coventry University. Innovate UK-funded{' '}
        <a href="https://www.coventry.ac.uk/research/research-directories/projects/2026/hope-move-help-overcome-problems-effectively--movement-and-healthy-lifestyle/" rel="noopener">
          digital health project
        </a>
        .
      </>
    ), when: 'Jan 2026 – Aug 2026' },
  { title: 'Software Developer', small: 'Tammy Tech, Lagos, Nigeria. Web and mobile applications with JavaScript and Flutter.', when: 'Mar 2020 – Apr 2021' },
  { title: 'Business Systems Analyst', small: 'Verificar Compliance, Lagos, Nigeria. Business analysis, dashboards and reporting.', when: 'Sep 2018 – Jan 2020' },
]

export const EDUCATION: Entry[] = [
  { title: 'PhD, Computational Science and Mathematical Modelling', small: 'Coventry University. Thesis: “Data-Driven Algorithms for Forecasting Critical Care Demand during the COVID-19 Pandemic”.', when: 'May 2021 – Mar 2025' },
  { title: 'MSc Data Science and Computational Intelligence, Distinction', small: 'Coventry University. Dissertation: “Plant Disease Detection: A Cross-Platform Mobile Application Using Artificial Neural Networks”.', when: 'Jan 2020 – Jan 2021' },
  { title: 'BEng Electrical and Electronics Engineering, Second Class Honours', small: 'Kwara State University (KWASU), Malete, Nigeria. Project: designed and built a low-power FM transmitter with a 2 km range.', when: 'Sep 2011 – Jul 2016' },
]

export const MEMBERSHIPS: Entry[] = [
  { title: 'Programme Committee member, 23rd IEEE ICMLA', when: '2024' },
  { title: 'Associate Fellow of the Higher Education Academy (AFHEA)', when: '2024 – present' },
  { title: 'Royal Statistical Society e-Student Member', when: '2024 – present' },
  { title: 'IEEE Student Member', when: '2021 – present' },
  { title: 'Chartered Management Institute (CMI)', small: 'Level 7 Certificate in Strategic Management and Leadership; Level 7 Award in Professional Consulting.', when: '2021' },
]

export const TEACHING: Entry[] = [
  { title: 'Lecturer in Computing, QAHE, Birmingham', small: 'Programming, data science and machine learning through partnerships with Ulster University and Southampton Solent University. Teaching materials, assessment and curriculum development.', when: 'Feb 2025 – present' },
  { title: 'Dissertation supervision', small: 'More than 10 MSc dissertations at Ulster University, supporting research design, methodology and thesis completion.', when: '2025 – present' },
  { title: 'Graduate Teaching Assistant (part-time), The Futureworks, Coventry University Group', small: 'Tutorials and workshops in information retrieval, big data analytics, deep learning and computer vision; assessment feedback and individual academic support.', when: 'Apr 2021 – Jan 2025' },
  { title: 'Volunteer lecturer, CodeYourFuture', small: 'Teaching software development to learners from under-represented backgrounds. Remote.', when: 'Dec 2020 – present' },
  { title: 'Software Engineering Team Lead, AI Literacy team', small: 'African Institute for Artificial Intelligence (AI4AI). Volunteer, remote.', when: 'Jan 2024 – present' },
]
