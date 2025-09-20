'use client'

import { motion } from 'framer-motion'
import { BookOpen, ExternalLink, FileText } from 'lucide-react'

export default function Publications() {
  const publications = [
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
    },
    {
      title: "A hybrid physics-informed neural network - SEIRD model for forecasting COVID-19 intensive care unit demand in England",
      authors: "Michael Ajao-Olarinoye, Vasile Palade, Fei He, Penny A. Wark, Zindoga Mukandavire, Seyedeh Mousavi",
      venue: "Recent advances in deep learning applications - Taylor Francis",
      year: "2024",
      type: "Book Chapter",
      abstract: "This work presents a novel hybrid approach combining physics-informed neural networks with the SEIRD epidemiological model to forecast COVID-19 intensive care unit demand in England, bridging traditional mathematical modeling with modern AI approaches.",
      link: "#",
      pdf: "#"
    }
  ]

  const presentations = [
    {
      title: "Physics-Informed Neural Networks for Fluid-Structure Interaction Analysis of Arterial Aneurysms",
      venue: "2nd International Conference of Future Algorithms",
      date: "July 2025",
      type: "Poster Presentation - First Prize Winner"
    },
    {
      title: "Deep Learning Based Forecasting of COVID-19 Hospitalisation in England",
      venue: "International Conference on Machine Learning and Applications (ICMLA)",
      date: "December 2023",
      type: "Conference Presentation"
    },
    {
      title: "Epidemiological Modeling and Resource Allocation",
      venue: "Computational Science and Mathematical Modelling Conference (CSMM)",
      date: "2024",
      type: "Research Presentation"
    }
  ]

  return (
    <section id="publications" className="py-20 bg-gray-900">
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
            Publications & Presentations
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Research contributions to the scientific community in biomedical engineering, 
            physics-informed neural networks, and healthcare analytics applications.
          </p>
        </motion.div>

        {/* Publications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <BookOpen className="text-green-600" size={24} />
            Publications
          </h3>
          
          <div className="space-y-6">
            {publications.map((pub, index) => (
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
                  <span className="text-gray-400 text-sm">
                    {pub.year}
                  </span>
                </div>
                
                <h4 className="text-xl font-semibold text-white mb-2">
                  {pub.title}
                </h4>
                
                <p className="text-gray-300 mb-2">
                  <strong>Authors:</strong> {pub.authors}
                </p>
                
                <p className="text-gray-300 mb-3">
                  <strong>Venue:</strong> {pub.venue}
                </p>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {pub.abstract}
                </p>
                
                <div className="flex gap-4">
                  <a
                    href={pub.link}
                    className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors duration-200"
                  >
                    <ExternalLink size={16} />
                    View Publication
                  </a>
                  <a
                    href={pub.pdf}
                    className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors duration-200"
                  >
                    <FileText size={16} />
                    PDF
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Presentations */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <FileText className="text-green-600" size={24} />
            Conference Presentations
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {presentations.map((pres, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800 p-6 rounded-lg"
              >
                <div className="flex justify-between items-start mb-3">
                  <span className="bg-blue-900 text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                    {pres.type}
                  </span>
                </div>
                
                <h4 className="text-lg font-semibold text-white mb-2">
                  {pres.title}
                </h4>
                
                <p className="text-gray-300 mb-1">
                  {pres.venue}
                </p>
                
                <p className="text-gray-400 text-sm">
                  {pres.date}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
