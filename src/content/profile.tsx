import type { ReactNode } from 'react'
import { PROFILES } from './site'

export type Entry = { title: string; small?: ReactNode; when: string }

export const ROLES: Entry[] = [
  { title: 'Research Fellow', small: 'Centre for Computational Science and Mathematical Modelling, Coventry University. HOPE-MOVE, Innovate UK.', when: 'Jan 2026 – present' },
  { title: 'Lecturer in Computing', small: 'QAHE. Teaching for the Ulster University and Southampton Solent University partnerships.', when: 'Feb 2025 – present' },
  { title: 'Endorsed by the Royal Academy of Engineering', small: 'Exceptional Promise, UK Global Talent.', when: 'Sep 2026' },
]

export const EDUCATION: Entry[] = [
  { title: 'PhD, Computational Science and Mathematical Modelling', small: 'Coventry University. Completed and awarded. Thesis: “Data-Driven Algorithms for Forecasting Critical Care Demand during the COVID-19 Pandemic”.', when: '2021 – 2026' },
  { title: 'MSc Data Science and Computational Intelligence, Distinction', small: 'Coventry University. Dissertation: “Plant Disease Detection: A Cross-Platform Mobile Application Using Artificial Neural Networks”. Modules: Machine Learning, Advanced Machine Learning, Artificial Neural Networks, Deep Learning, Big Data Management and Data Visualisation, Data Management Systems, Information Retrieval, Research Methods, Statistical Methods for Data Science.', when: '2020 – 2021' },
  { title: 'BEng Electrical and Electronics Engineering, Second Class Honours', small: 'Kwara State University (KWASU), Malete, Nigeria. Project: designed and built a 2 km low-power FM transmitter.', when: '2011 – 2016' },
]

export const MEMBERSHIPS: Entry[] = [
  { title: 'Associate Fellow of the Higher Education Academy (AFHEA)', small: 'Advance HE.', when: '2024 – present' },
  { title: 'Chartered Management Institute (CMI)', small: 'Level 7 Certificate in Strategic Management and Leadership; Level 7 Award in Professional Consulting.', when: '2021' },
  { title: 'IEEE Student Member', small: 'Institute of Electrical and Electronics Engineers.', when: '2021 – present' },
  { title: 'Royal Statistical Society e-Student Member', when: '2024 – present' },
  {
    title: 'ORCID',
    small: (
      <a href={PROFILES.orcid} rel="noopener">
        0000-0003-2763-8293
      </a>
    ),
    when: 'iD',
  },
]

export const VOLUNTEERING: Entry[] = [
  { title: 'Software Engineering Team Lead, AI Literacy team', small: 'African Institute for Artificial Intelligence (AI4AI). Volunteer, remote.', when: '2024 – present' },
  { title: 'Lecturer (volunteer)', small: 'CodeYourFuture, Birmingham. Remote.', when: '2020 – present' },
  { title: 'Project Manager, Gender Vanguard CDS', small: 'National Youth Service Corps (NYSC), Nigeria.', when: '2016 – 2017' },
  { title: 'Vice President', small: 'Nigeria Union of Engineering Students Association (NUESA), Kwara State University.', when: '2014 – 2015' },
]

export const CAREER: Entry[] = [
  { title: 'Postgraduate Researcher', small: 'Coventry University, Coventry. Research on physics-informed and graph-based models, with publications and conference outputs; international collaboration with NUST, Pakistan, on cardiovascular modelling; mentoring; Programme Committee member for IEEE ICMLA 2024.', when: 'Apr 2021 – Jan 2025' },
  { title: 'Graduate Teaching Assistant (part-time)', small: 'Coventry University, School of Electrical, Electronics and Computing. Tutorials, workshops and one-to-one support in Information Retrieval, Big Data Analytics, Deep Learning and Computer Vision; assessment marking and feedback.', when: 'Apr 2021 – Jan 2025' },
  { title: 'Software Developer', small: 'Tammy Tech, Lagos, Nigeria. Web and mobile apps with HTML, CSS, JavaScript and Flutter; APIs and databases; work with clients to turn needs into working software.', when: 'Mar 2020 – Apr 2021' },
  { title: 'Business Systems Analyst', small: 'Verificar Compliance, Lagos, Nigeria. Business analysis, dashboards and reporting, including a 15% efficiency improvement.', when: 'Sep 2018 – Jan 2020' },
]
