'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm, ValidationError } from '@formspree/react'
import { Mail, Linkedin, Github, Youtube, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { sanitizeInput, isValidEmail } from '@/utils/security'

interface FormFields {
  name: string
  email: string
  subject: string
  message: string
  _gotcha: string
}

// Formspree form ID is a required public identifier. Set it in .env.local
// (locally) or as a GitHub Actions secret (production).
const FORMSPREE_FORM_ID = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID ?? ''

export default function Contact() {
  const [state, submitToFormspree] = useForm(FORMSPREE_FORM_ID)
  const [formData, setFormData] = useState<FormFields>({
    name: '',
    email: '',
    subject: '',
    message: '',
    _gotcha: ''
  })
  const [clientError, setClientError] = useState<string>('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setClientError('')

    if (!FORMSPREE_FORM_ID) {
      setClientError('Contact form is not configured. Please email me directly at ajaoolarinoyemichael@gmail.com')
      return
    }

    const sanitized = {
      name: sanitizeInput(formData.name),
      email: sanitizeInput(formData.email),
      subject: sanitizeInput(formData.subject),
      message: sanitizeInput(formData.message),
      _gotcha: formData._gotcha
    }

    if (!isValidEmail(sanitized.email)) {
      setClientError('Please enter a valid email address.')
      return
    }

    if (sanitized.name.length < 2 || sanitized.message.length < 10) {
      setClientError('Please provide a valid name and message (minimum 10 characters).')
      return
    }

    await submitToFormspree(sanitized)
  }

  const serverErrorCount =
    state.errors && 'getAllFieldErrors' in state.errors
      ? state.errors.getAllFieldErrors().length + state.errors.getFormErrors().length
      : 0
  const hasServerError = serverErrorCount > 0
  const showError = Boolean(clientError) || hasServerError
  const errorMessage = clientError || 'Something went wrong. Please try again or email me directly at ajaoolarinoyemichael@gmail.com'

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
      icon: Youtube,
      label: "YouTube",
      value: "@miolajtech2439",
      href: "https://www.youtube.com/@miolajtech2439/featured"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Available for Remote Collaboration",
      href: null
    }
  ]

  return (
    <section id="contact" className="py-20 bg-gray-900">
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
            I&apos;m always interested in discussing research opportunities, collaborations, and teaching partnerships
            across applied machine learning, generative AI, physics-informed neural networks, and data-driven modelling for healthcare and scientific computing.
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
              Whether you&apos;d like to collaborate on a research problem, explore joint work in
              generative AI, physics-informed neural networks, or spatiotemporal epidemic forecasting,
              or discuss teaching and supervision, I&apos;d love to hear from you.
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

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-800 p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Honeypot field — hidden from users, filled only by bots. Formspree ignores submissions with _gotcha set. */}
              <input
                type="text"
                name="_gotcha"
                value={formData._gotcha}
                onChange={handleInputChange}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="absolute -left-[9999px] w-px h-px opacity-0 pointer-events-none"
              />

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors duration-200"
                  placeholder="Your name"
                  required
                  disabled={state.submitting}
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-400 text-sm mt-1" />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors duration-200"
                  placeholder="your.email@example.com"
                  required
                  disabled={state.submitting}
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-sm mt-1" />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors duration-200"
                  placeholder="Research collaboration, project inquiry, etc."
                  required
                  disabled={state.submitting}
                />
                <ValidationError prefix="Subject" field="subject" errors={state.errors} className="text-red-400 text-sm mt-1" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors duration-200 resize-none"
                  placeholder="Tell me about your project, collaboration ideas, or questions..."
                  required
                  disabled={state.submitting}
                ></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-sm mt-1" />
              </div>

              {state.succeeded && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-3 rounded-lg bg-green-900/50 text-green-200 border border-green-700"
                >
                  <CheckCircle size={18} />
                  <span>Message sent — I&rsquo;ll get back to you soon.</span>
                </motion.div>
              )}

              {!state.succeeded && showError && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-3 rounded-lg bg-red-900/50 text-red-200 border border-red-700"
                >
                  <AlertCircle size={18} />
                  <span>{errorMessage}</span>
                </motion.div>
              )}

              <button
                type="submit"
                disabled={state.submitting || state.succeeded}
                className={`w-full px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 ${
                  state.submitting || state.succeeded
                    ? 'bg-gray-600 cursor-not-allowed'
                    : 'bg-green-600 hover:bg-green-700'
                } text-white`}
              >
                {state.submitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
