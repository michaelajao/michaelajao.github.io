'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, FileText } from 'lucide-react'
import Image from 'next/image'
import TechIcon from '@/components/TechIcon'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 to-gray-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-6xl font-bold font-heading text-white"
              >
                Michael{' '}
                <span className="gradient-text">
                  Ajao-Olarinoye
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-200 font-medium"
              >
                PhD Researcher | Computational Science & Epidemiological Modeling
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-lg text-gray-300 leading-relaxed max-w-2xl"
              >
                Advancing epidemiological modeling through{' '}
                <span className="text-green-600 font-semibold">Physics-Informed Neural Networks</span>{' '}
                and computational science. My research spans pandemic preparedness, healthcare resource
                allocation, and developing interdisciplinary AI solutions including{' '}
                <span className="text-blue-400 font-semibold">computational fluid dynamics (CFD)</span>,{' '}
                <span className="text-cyan-400 font-semibold">deep learning architectures</span>,{' '}
                <span className="text-cyan-400 font-semibold">graph neural networks</span>, and{' '}
                <span className="text-orange-400 font-semibold">hybrid frameworks</span>{' '}
                across diverse domains and applications.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="text-base text-gray-400 leading-relaxed max-w-2xl"
              >
                Currently focused on{' '}
                <span className="text-blue-400 font-medium">PINNs for aneurysm modeling</span>,
                including wall shear stress (WSS) analysis, and developing{' '}
                <span className="text-purple-400 font-medium">surrogate and digital twin models</span>.
                Leveraging{' '}
                <span className="text-cyan-400 font-medium">time series analysis</span>,{' '}
                <span className="text-cyan-400 font-medium">deep learning</span>, and{' '}
                <span className="text-orange-400 font-medium">hybrid prediction frameworks</span>{' '}
                to integrate physics-based constraints with data-driven learning for healthcare forecasting,
                COVID-19 hospitalization prediction, and critical care demand modeling to improve pandemic
                preparedness and clinical decision-making.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2"
              >
                View Projects
                <ArrowDown size={18} />
              </a>
              <a
                href="/michael_cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2"
              >
                <FileText size={18} />
                Download CV
              </a>
            </motion.div>

            {/* Technology Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-gray-200">
                Technology Stack
              </h3>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 bg-gray-800/70 px-3 py-2 rounded-lg">
                  <TechIcon name="python" size={24} />
                  <span className="text-gray-200 font-medium">Python</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-800/70 px-3 py-2 rounded-lg">
                  <TechIcon name="flutter" size={24} />
                  <span className="text-gray-200 font-medium">Flutter</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-800/70 px-3 py-2 rounded-lg">
                  <TechIcon name="r" size={24} />
                  <span className="text-gray-200 font-medium">R</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-800/70 px-3 py-2 rounded-lg">
                  <TechIcon name="julia" size={24} />
                  <span className="text-gray-200 font-medium">Julia</span>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex gap-4"
            >
              <a
                href="https://github.com/michaelajao"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/michael-ajao"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:ajaoolarinoyemichael@gmail.com"
                className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-200"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Profile Image with subtle glow */}
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-gray-700 shadow-2xl relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-600/10 to-blue-600/10 animate-pulse"></div>
                <Image
                  src="/profile-image.jpg"
                  alt="Michael Ajao-Olarinoye"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              {/* Animated Decorative Bubbles */}
              <motion.div 
                className="absolute -top-4 -right-4 w-24 h-24 bg-green-900/30 rounded-full"
                animate={{
                  y: [0, -15, 0],
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-900/30 rounded-full"
                animate={{
                  y: [0, 20, 0],
                  x: [0, 10, 0],
                  scale: [1, 0.9, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
              <motion.div 
                className="absolute -top-8 -left-8 w-16 h-16 bg-purple-900/25 rounded-full"
                animate={{
                  y: [0, -10, 0],
                  x: [0, -5, 0],
                  scale: [1, 1.2, 1],
                  opacity: [0.25, 0.4, 0.25]
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              />
              <motion.div 
                className="absolute -bottom-8 -right-6 w-20 h-20 bg-cyan-900/25 rounded-full"
                animate={{
                  y: [0, 12, 0],
                  x: [0, -8, 0],
                  scale: [1, 1.15, 1],
                  opacity: [0.25, 0.45, 0.25]
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
              <motion.div 
                className="absolute top-12 -right-12 w-12 h-12 bg-yellow-900/20 rounded-full"
                animate={{
                  y: [0, -8, 0],
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.35, 0.2]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5
                }}
              />
              <motion.div 
                className="absolute bottom-16 -left-10 w-14 h-14 bg-pink-900/20 rounded-full"
                animate={{
                  y: [0, 15, 0],
                  x: [0, 5, 0],
                  scale: [1, 0.85, 1],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 3
                }}
              />
              
              {/* Micro bubbles for extra ambience */}
              <motion.div 
                className="absolute top-6 -left-4 w-6 h-6 bg-indigo-900/15 rounded-full"
                animate={{
                  y: [0, -6, 0],
                  opacity: [0.15, 0.3, 0.15]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.8
                }}
              />
              <motion.div 
                className="absolute bottom-6 -right-2 w-8 h-8 bg-teal-900/15 rounded-full"
                animate={{
                  y: [0, 8, 0],
                  x: [0, -3, 0],
                  opacity: [0.15, 0.25, 0.15]
                }}
                transition={{
                  duration: 3.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2.5
                }}
              />
              <motion.div 
                className="absolute top-20 left-2 w-4 h-4 bg-orange-900/12 rounded-full"
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.12, 0.25, 0.12]
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.2
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
