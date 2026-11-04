import type { ReactNode } from 'react'
import { PROFILES } from './site'

export type Entry = { title: string; small?: ReactNode; when: string }

export const ABOUT_TEXT =
  'I’m a research fellow at Coventry University and a lecturer in computing. My current work spans digital health AI through HOPE-MOVE and student engagement and academic risk modelling through EVOLVE AI. I also collaborate on physics-informed cardiovascular modelling. Through miolajtech I offer digital tools, AI development, training and tutoring for businesses, students, researchers and professionals.'

export const ROLES: Entry[] = [
  { title: 'Research Fellow, EVOLVE AI', small: 'Strategic Planning and Insight Office, Coventry University. Models for student engagement, academic risk and course withdrawal; institutional data integration and stakeholder reporting.', when: 'Sep 2026 – present' },
  { title: 'Research Fellow, HOPE-MOVE', small: 'Centre for Computational Science and Mathematical Modelling, Coventry University. Innovate UK-funded digital health research: deployed participant dropout prediction and language models for facilitator support.', when: 'Jan 2026 – present' },
  { title: 'Lecturer in Computing', small: 'QAHE. Programming, data science and machine learning for the Ulster University and Southampton Solent University partnerships; supervision of more than 10 MSc dissertations.', when: 'Feb 2025 – present' },
  { title: 'Endorsed by the Royal Academy of Engineering', small: 'Exceptional Promise, UK Global Talent.', when: 'Sep 2026' },
]

export const EDUCATION: Entry[] = [
  { title: 'PhD, Computational Science and Mathematical Modelling', small: 'Coventry University. Completed and awarded. Thesis: “Data-Driven Algorithms for Forecasting Critical Care Demand during the COVID-19 Pandemic”. Developed neural and physics-informed models for hospital and intensive care demand; established a cardiovascular modelling collaboration with NUST, Pakistan, and mentored postgraduate students.', when: 'May 2021 – Mar 2025' },
  { title: 'MSc Data Science and Computational Intelligence, Distinction', small: 'Coventry University. Dissertation: “Plant Disease Detection: A Cross-Platform Mobile Application Using Artificial Neural Networks”.', when: 'Jan 2020 – Jan 2021' },
  { title: 'BEng Electrical and Electronics Engineering, Second Class Honours', small: 'Kwara State University (KWASU), Malete, Nigeria. Project: designed and built a 2 km low-power FM transmitter.', when: 'Sep 2011 – Jul 2016' },
]

export const MEMBERSHIPS: Entry[] = [
  { title: 'Associate Fellow of the Higher Education Academy (AFHEA)', small: 'Advance HE.', when: '2024 – present' },
  { title: 'Chartered Management Institute (CMI)', small: 'Level 7 Certificate in Strategic Management and Leadership; Level 7 Award in Professional Consulting.', when: '2021' },
  { title: 'IEEE Student Member', small: 'Institute of Electrical and Electronics Engineers.', when: '2021 – present' },
  { title: 'Royal Statistical Society e-Student Member', when: '2024 – present' },
  { title: 'Programme Committee member, IEEE ICMLA', small: 'Peer review for the International Conference on Machine Learning and Applications.', when: '2024' },
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
  { title: 'Graduate Teaching Assistant (part-time)', small: 'The Futureworks (Coventry University Group), Coventry. Developed and delivered tutorials and workshops in information retrieval, big data analytics, deep learning and computer vision; assessment feedback and individual academic support.', when: 'Apr 2021 – Jan 2025' },
  { title: 'Software Developer', small: 'Tammy Tech, Lagos, Nigeria. Developed web and mobile applications using JavaScript and Flutter, expanding client product offerings by 30%. Worked with clients using agile methods to deliver projects on time; integrated APIs and databases.', when: 'Mar 2020 – Apr 2021' },
  { title: 'Business Systems Analyst', small: 'Verificar Compliance, Lagos, Nigeria. Business analysis and IT solutions that improved operational efficiency by 15%; dashboards, reporting and coordination with technical teams and stakeholders.', when: 'Sep 2018 – Jan 2020' },
]
