'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, MapPin } from 'lucide-react'

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ajaoolarinoyemichael@gmail.com",
      href: "mailto:ajaoolarinoyemichael@gmail.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "michael-ajao",
      href: "https://www.linkedin.com/in/michael-ajao"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "michaelajao",
      href: "https://github.com/michaelajao"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Available for Remote Collaboration",
      href: null
    }
  ]

  return (
    <section id="contact" className="py-20 bg-gray-800">
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
            Let&apos;s Collaborate
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            I&apos;m always interested in discussing research opportunities, collaborations, 
            and innovative projects in epidemiological modeling, physics-informed neural networks, and interdisciplinary AI applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Get in Touch
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
              Whether you&apos;re interested in research collaboration, discussing innovative 
              approaches to epidemiological modeling, or exploring opportunities in 
              physics-informed neural networks and interdisciplinary AI applications, I&apos;d love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-900 rounded-lg flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-green-400" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white">
                      {item.label}
                    </h4>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-green-400 hover:text-green-300 transition-colors duration-200"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-gray-300">
                        {item.value}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Research Interests */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-900 p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Research Interests
            </h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  Current Focus Areas
                </h4>
                <ul className="text-gray-300 space-y-2">
                  <li>• Epidemiological Modeling</li>
                  <li>• Physics-Informed Neural Networks</li>
                  <li>• Healthcare Resource Allocation</li>
                  <li>• Interdisciplinary AI Applications</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  Collaboration Opportunities
                </h4>
                <ul className="text-gray-300 space-y-2">
                  <li>• Joint research projects</li>
                  <li>• Conference presentations</li>
                  <li>• Academic partnerships</li>
                  <li>• Industry consulting</li>
                </ul>
              </div>
              
            </div>

              <div className="pt-4">
                <a
                  href="/michael_cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
                >
                  Download CV
                </a>
              </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
