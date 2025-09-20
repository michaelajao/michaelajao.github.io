'use client'

import { motion } from 'framer-motion'
import { Brain, Activity, BarChart3, Microscope } from 'lucide-react'

export default function ResearchFocus() {
  const researchAreas = [
    {
      icon: Brain,
      title: "Epidemiological Modeling with Neural Networks",
      description: "Developing advanced neural network architectures for epidemiological modeling, specifically focusing on predicting mechanical ventilator demand during pandemic scenarios and integrating physics-based constraints with data-driven learning."
    },
    {
      icon: Activity,
      title: "Physics-Informed Neural Networks",
      description: "Advanced implementation and research in PINNs, bridging traditional mathematical modeling with modern AI approaches for healthcare applications, including fluid-structure interaction analysis in arterial aneurysms."
    },
    {
      icon: BarChart3,
      title: "Healthcare Resource Allocation",
      description: "Applying deep learning and machine learning techniques for healthcare forecasting, including COVID-19 hospitalization prediction and critical care demand forecasting to improve pandemic preparedness."
    },
    {
      icon: Microscope,
      title: "Interdisciplinary AI Applications",
      description: "Leveraging computational methods across multiple domains including agricultural technology (plant disease detection), natural language processing (topic modeling), and health data science for comprehensive AI solutions."
    }
  ]

  return (
    <section id="research" className="py-20 bg-gray-900">
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
            Current Research Focus
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Advancing epidemiological modeling through physics-informed neural networks and 
            computational science, with applications in pandemic preparedness, healthcare resource 
            allocation, and interdisciplinary AI solutions across multiple domains.
          </p>
        </motion.div>

        {/* Research Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {researchAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="research-card bg-gray-800 p-8 rounded-xl"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-900 rounded-lg flex items-center justify-center">
                    <area.icon className="w-6 h-6 text-green-400" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {area.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-300 mb-6">
            Explore my{' '}
            <a href="#projects" className="text-green-600 hover:text-green-700 font-semibold">
              Research & Projects
            </a>{' '}
            to see my work in action.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
