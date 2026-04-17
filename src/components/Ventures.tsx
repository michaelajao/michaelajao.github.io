'use client'

import { motion } from 'framer-motion'
import { Briefcase, Youtube, Globe, MapPin, Rocket, Leaf, ExternalLink } from 'lucide-react'

export default function Ventures() {
  const company = {
    name: 'miolajtech',
    role: 'Founder & CEO',
    registration: 'RC KW10815',
    registered: '30 April 2013',
    hq: 'No. 32 Funsho Ajao Street, Offin-Ile, Igbogbo, Ikorodu, Lagos State, Nigeria',
    website: 'https://miolajtech.co.uk/',
    youtube: 'https://www.youtube.com/@miolajtech2439/featured',
    mission:
      'miolajtech builds tech and AI services for Nigerian and African SMEs and agricultural businesses — tax and accounting tools, client products, and custom AI-driven engineering.',
  }

  const products = [
    {
      icon: Rocket,
      name: 'TaxPadi',
      status: 'Coming soon',
      statusTone: 'bg-amber-900/60 text-amber-200',
      summary:
        'Accounting and tax-management mobile app for Nigerian SMEs. VAT (7.5%), CIT (0/20/30%), PAYE, Capital Gains, and Development Levy calculators aligned with the Tax Reform Acts 2025 and Tax Administration Act 2026.',
      stack: 'React Native · Expo · Supabase · Gemini (OCR)',
      link: null,
    },
    {
      icon: Leaf,
      name: 'Agriculture platform',
      status: 'In development',
      statusTone: 'bg-emerald-900/60 text-emerald-200',
      summary:
        'Software for Nigerian and African agricultural operators — tackling data and tooling gaps across smallholder and enterprise agribusinesses.',
      stack: 'Stack details to be announced',
      link: null,
    },
    {
      icon: Briefcase,
      name: 'Papromakeovers',
      status: 'Live · Case study',
      statusTone: 'bg-sky-900/60 text-sky-200',
      summary:
        'Next.js booking website with availability management, admin passcode protection, EmailJS notifications, and draft-invoice generation via Zoho.',
      stack: 'Next.js App Router · Tailwind · Supabase · EmailJS · Zoho',
      link: null,
    },
  ]

  return (
    <section id="ventures" className="py-20 bg-gray-900">
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
            Ventures
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Alongside research, I run miolajtech — a Nigerian tech and AI services company building products for SMEs,
            agriculture, and selected client engagements.
          </p>
        </motion.div>

        {/* Company Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-800 p-8 rounded-lg shadow-lg border-l-4 border-amber-500 mb-12"
        >
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <Briefcase className="text-amber-400" size={24} />
                <h3 className="text-2xl font-bold text-white">{company.name}</h3>
              </div>
              <p className="text-amber-400 font-medium mb-4">{company.role}</p>
              <p className="text-gray-300 leading-relaxed mb-6 max-w-2xl">{company.mission}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-300 text-sm">
                <div>
                  <span className="text-gray-500 block mb-1">Registration</span>
                  <span>{company.registration} · {company.registered}</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin size={16} className="mt-0.5 text-gray-500 flex-shrink-0" />
                  <span>{company.hq}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 lg:min-w-[200px]">
              <a
                href={company.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-5 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                <Globe size={18} />
                miolajtech.co.uk
              </a>
              <a
                href={company.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border border-amber-600 text-amber-400 hover:bg-amber-600 hover:text-white px-5 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                <Youtube size={18} />
                YouTube channel
              </a>
            </div>
          </div>
        </motion.div>

        {/* Products */}
        <h3 className="text-2xl font-bold text-white mb-8">Product suite</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-amber-900/60 rounded-lg flex items-center justify-center">
                  <product.icon className="w-6 h-6 text-amber-300" />
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${product.statusTone}`}>
                  {product.status}
                </span>
              </div>

              <h4 className="text-xl font-semibold text-white mb-3">{product.name}</h4>
              <p className="text-gray-300 leading-relaxed mb-4 flex-grow">{product.summary}</p>
              <p className="text-gray-500 text-xs mb-4">{product.stack}</p>

              {product.link && (
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors duration-200 text-sm font-medium"
                >
                  <ExternalLink size={14} />
                  Visit
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
