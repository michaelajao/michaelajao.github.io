'use client'

import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="text-green-400" size={24} />
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-white">
              Research statement
            </h2>
          </div>
          <div className="w-24 h-1 bg-green-600 mb-8"></div>

          <p className="text-lg text-gray-200 leading-relaxed mb-6">
            My research asks a practical question: <span className="text-green-400 font-semibold">how do we make scientific
            machine learning trustworthy enough to inform real decisions in health and public policy?</span> I work
            where physics-informed neural networks, graph attention models, and generative AI meet the messy data of
            clinical haemodynamics and epidemic surveillance.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Two threads run through the work. The first is <span className="text-cyan-400 font-semibold">PINN surrogates
            for cardiovascular flow</span> — cutting the cost of patient-specific wall-shear-stress prediction so
            clinicians and engineers can iterate on designs in hours rather than days. The second is{' '}
            <span className="text-blue-400 font-semibold">spatiotemporal forecasting of infectious disease</span> —
            graph-attention models that give public-health teams defensible short-horizon forecasts with clear
            uncertainty.
          </p>

          <p className="text-base text-gray-400 leading-relaxed">
            I&rsquo;m open to collaboration on applied ML for health systems, funded projects in scientific computing,
            PhD supervision, and industry consulting around data-quality, ethical-AI assurance, and PINN/Graph-NN
            deployment. <a href="#contact" className="text-green-400 hover:text-green-300 underline underline-offset-4">Get in touch</a>.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
