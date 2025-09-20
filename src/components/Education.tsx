'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Calendar, MapPin } from 'lucide-react'

export default function Education() {
  const education = [
    {
      degree: "Doctor of Philosophy (PhD)",
      field: "Computational Science and Mathematical Modelling",
      institution: "Coventry University",
      location: "Coventry, United Kingdom",
      period: "May 2021 – Present",
      status: "Expected Graduation: July 2026",
      thesis: "Data-Driven Algorithms for Forecasting Critical Care Demand during the COVID-19 Pandemic",
      highlights: [
        "Fully-funded PhD studentship at the Centre for Computational Science and Mathematical Modelling (CSMM)",
        "Research focus on epidemiological modeling using Physics-Informed Neural Networks",
        "Published in high-impact journals including Physics of Fluids and IEEE conferences"
      ]
    },
    {
      degree: "Master of Science (MSc)",
      field: "Data Science and Computational Intelligence",
      institution: "Coventry University",
      location: "Coventry, United Kingdom",
      period: "January 2020 – January 2021",
      status: "Graduated with Distinction",
      thesis: "Plant Disease Detection: A Cross-Platform Mobile Application Using Artificial Neural Networks",
      highlights: [
        "Key Modules: Machine Learning, Big Data Management, Advanced Machine Learning, Artificial Neural Networks",
        "Achieved distinction in dissertation project",
        "Developed cross-platform mobile application using deep learning"
      ]
    },
    {
      degree: "Bachelor of Engineering (BEng)",
      field: "Electrical and Electronics Engineering",
      institution: "Kwara State University (KWASU)",
      location: "Malete, Nigeria",
      period: "September 2011 – July 2016",
      status: "Second Class Honours",
      thesis: "Designed and built a 2km Low-Power FM Transmitter",
      highlights: [
        "Key Modules: Engineering Mathematics, Digital Signal Processing, Control Engineering, Power Electronics",
        "Vice President of Nigeria Union of Engineering Students Association (NUESA)",
        "Strong foundation in electrical engineering principles and applied mathematics"
      ]
    }
  ]

  const conferences = [
    {
      name: "International Conference on Machine Learning and Applications (ICMLA)",
      years: ["2023", "2024"],
      role: "Presenter & Program Committee Member",
      link: "https://www.icmla-conference.org/"
    },
    {
      name: "The Julia Language Conference (JuliaCon)",
      years: ["2022", "2023"],
      role: "Attendee",
      link: "https://juliacon.org/"
    },
    {
      name: "Computational Science and Mathematical Modelling Conference (CSMM)",
      years: ["2023", "2024"],
      role: "Presenter & Best Reviewer Award Winner",
      link: "https://sites.google.com/view/csmconference/"
    }
  ]

  const volunteerWork = [
    {
      organization: "African Institute for Artificial Intelligence (AIAI)",
      role: "Group Head of AI Literacy",
      period: "January 2024 – Present",
      location: "Remote",
      description: "Leading AI literacy initiatives across African communities, developing educational programs and resources."
    },
    {
      organization: "CodeYourFuture",
      role: "Lecturer",
      period: "December 2020 – Present",
      location: "Birmingham, United Kingdom (Remote)",
      description: "Teaching programming and software development to underrepresented communities."
    },
    {
      organization: "National Youth Service Corps (NYSC)",
      role: "Project Manager for Gender Vanguard CDS",
      period: "November 2016 – October 2017",
      location: "Nigeria",
      description: "Managed community development projects focused on gender equality and youth empowerment."
    }
  ]

  return (
    <section id="education" className="py-20 bg-gray-800">
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
            Education & Development
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Academic journey spanning engineering, data science, and computational research, 
            complemented by active participation in professional development and community service.
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <GraduationCap className="text-green-600" size={24} />
            Academic Qualifications
          </h3>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900 p-6 rounded-lg shadow-lg border-l-4 border-blue-500"
              >
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-white mb-2">
                      {edu.degree}
                    </h4>
                    <p className="text-blue-600 font-medium mb-2">{edu.field}</p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-300 mb-3">
                      <div className="flex items-center gap-1">
                        <GraduationCap size={16} />
                        <span>{edu.institution}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                    <p className="text-green-600 font-medium mb-3">{edu.status}</p>
                    {edu.thesis && (
                      <p className="text-gray-300 mb-3">
                        <strong>Thesis/Project:</strong> {edu.thesis}
                      </p>
                    )}
                  </div>
                </div>
                
                <div>
                  <h5 className="font-semibold text-white mb-2">Key Highlights:</h5>
                  <ul className="text-gray-300 space-y-1">
                    {edu.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-green-600 mr-2 mt-1.5">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Conference Participation */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-8">
            Conference Participation
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conferences.map((conf, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900 p-6 rounded-lg shadow-lg"
              >
                <h4 className="text-lg font-semibold text-white mb-3">
                  {conf.name}
                </h4>
                <div className="flex flex-wrap gap-2 mb-3">
                  {conf.years.map((year, i) => (
                    <span key={i} className="bg-green-900 text-green-200 px-2 py-1 rounded text-sm">
                      {year}
                    </span>
                  ))}
                </div>
                <p className="text-gray-300 mb-3">{conf.role}</p>
                <a 
                  href={conf.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 text-sm"
                >
                  Conference Website →
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Volunteer Experience */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8">
            Volunteer Experience
          </h3>
          
          <div className="space-y-6">
            {volunteerWork.map((vol, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900 p-6 rounded-lg shadow-lg"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">
                      {vol.role}
                    </h4>
                    <p className="text-green-600 font-medium mb-1">{vol.organization}</p>
                    <p className="text-gray-400 text-sm">{vol.location}</p>
                  </div>
                  <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm mt-2 sm:mt-0">
                    {vol.period}
                  </span>
                </div>
                <p className="text-gray-300">{vol.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
