'use client'

import { motion } from 'framer-motion'
import { Briefcase, Award } from 'lucide-react'

export default function Experience() {
  const experiences = [
    {
      title: "Lecturer in Computing",
      company: "QAHE Ltd",
      location: "Birmingham, United Kingdom",
      period: "February 2025 – Present",
      description: [
        "Delivered high-quality teaching in computer science modules including Programming, Data Science and Machine Learning at Ulster University and Southampton Solent University through QAHE's university partnerships.",
        "Designed and implemented course materials, assessments, and interactive learning activities aligned with university curricula and learning outcomes.",
        "Provided academic support and mentorship to diverse student cohorts, employing inclusive teaching strategies to accommodate various learning styles."
      ]
    },
    {
      title: "Postgraduate Researcher",
      company: "Coventry University",
      location: "Coventry, United Kingdom",
      period: "April 2021 – January 2025",
      description: [
        "Authored peer-reviewed publications and presented research at prestigious conferences, including ICMLA, significantly contributing to institutional research output.",
        "Developed and delivered tutorial sessions, workshops, and individual student support for Electrical, Electronics and Computing department.",
        "Served as a Program Committee Member for the 23rd IEEE International Conference on Machine Learning and Applications (ICMLA).",
        "Mentored postgraduate students and collaborated with interdisciplinary teams on AI-driven and healthcare projects."
      ]
    },
    {
      title: "Software Developer",
      company: "Tammy Tech",
      location: "Lagos, Nigeria",
      period: "March 2020 – April 2021",
      description: [
        "Designed and developed web and mobile applications using technologies such as HTML, CSS, JavaScript, and Flutter, enhancing client product offerings by 30%.",
        "Collaborated with clients to translate their needs into robust technical solutions, applying agile methodologies to deliver projects on time.",
        "Integrated various APIs and built databases to support mobile app functionality, improving user experience and engagement."
      ]
    },
    {
      title: "Business Systems Analyst",
      company: "Verificar Compliance",
      location: "Lagos, Nigeria",
      period: "September 2018 – January 2020",
      description: [
        "Conducted business analysis and developed IT solutions to streamline company processes, resulting in a 15% improvement in operational efficiency.",
        "Designed and implemented dashboards and reporting systems to track performance metrics, facilitating data-driven decision-making.",
        "Analysed market trends and emerging technologies to inform product development strategies, positioning the company for future growth."
      ]
    }
  ]

  const awards = [
    {
      title: "PhD Studentship Award",
      organization: "Coventry University",
      date: "May 2021",
      description: "Awarded a fully-funded PhD studentship at the Centre for Computational Science and Mathematical Modelling (CSMM) to research resource allocation during pandemics."
    },
    {
      title: "Best Reviewer Award",
      organization: "CSMM Conference",
      date: "June 2024",
      description: "Received recognition for outstanding contribution in reviewing conference papers and providing high-quality feedback to authors."
    },
    {
      title: "First Prize — Poster Competition",
      organization: "2nd International Conference of Future Algorithms",
      date: "July 2025",
      description: "Won first prize for the poster titled \"Physics-Informed Neural Networks for Fluid-Structure Interaction Analysis of Arterial Aneurysms.\""
    },
    {
      title: "Third Place in Community Development Project",
      organization: "KWASU Entrepreneurship and Innovation Challenge",
      date: "October 2017",
      description: "Achieved third place for leading a community development project focused on youth empowerment through technology."
    }
  ]

  return (
    <section id="experience" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            A comprehensive journey through academia, research, and industry, 
            spanning teaching, software development, and business analysis.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <Briefcase className="text-green-600" size={24} />
            Work Experience
          </h3>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900 p-6 rounded-lg border-l-4 border-green-500"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-1">
                      {exp.title}
                    </h4>
                    <p className="text-green-600 font-medium mb-1">{exp.company}</p>
                    <p className="text-gray-400 text-sm">{exp.location}</p>
                  </div>
                  <span className="bg-green-900 text-green-200 px-3 py-1 rounded-full text-sm font-medium mt-2 md:mt-0">
                    {exp.period}
                  </span>
                </div>
                
                <ul className="text-gray-300 space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-green-600 mr-2 mt-1.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Awards & Recognition */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <Award className="text-green-600" size={24} />
            Awards & Recognition
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900 p-6 rounded-lg"
              >
                <div className="flex justify-between items-start mb-3">
                  <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <span className="text-gray-400 text-sm">
                    {award.date}
                  </span>
                </div>
                
                <h4 className="text-lg font-semibold text-white mb-2">
                  {award.title}
                </h4>
                
                <p className="text-green-600 font-medium mb-3">
                  {award.organization}
                </p>
                
                <p className="text-gray-300 leading-relaxed">
                  {award.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
