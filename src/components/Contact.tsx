'use client'

import { useState } from 'react'

// Extend Window interface for EmailJS
declare global {
  interface Window {
    emailjs?: typeof emailjs
  }
}
import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { validateDomain, checkRateLimit, recordSubmission, sanitizeInput, isValidEmail, getEmailJSConfig } from '@/utils/security'
import emailjs from '@emailjs/browser'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error'
  message: string
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Security validations
    if (!validateDomain()) {
      setStatus({
        type: 'error',
        message: 'Unauthorized domain. Please visit the official site.'
      })
      return
    }

    const rateLimit = checkRateLimit()
    if (!rateLimit.allowed) {
      setStatus({
        type: 'error',
        message: `Too many submissions. Please wait 10 minutes before sending another message. (${rateLimit.remaining} remaining)`
      })
      return
    }

    // Input validation and sanitization
    const sanitizedData = {
      name: sanitizeInput(formData.name),
      email: sanitizeInput(formData.email),
      subject: sanitizeInput(formData.subject),
      message: sanitizeInput(formData.message)
    }

    if (!isValidEmail(sanitizedData.email)) {
      setStatus({
        type: 'error',
        message: 'Please enter a valid email address.'
      })
      return
    }

    if (sanitizedData.name.length < 2 || sanitizedData.message.length < 10) {
      setStatus({
        type: 'error',
        message: 'Please provide a valid name and message (minimum 10 characters).'
      })
      return
    }
    
    // Reset status
    setStatus({ type: 'loading', message: 'Sending message...' })

    try {
      const emailConfig = getEmailJSConfig()
      const currentDomain = window.location.hostname + (window.location.port ? ':' + window.location.port : '')
      
      // Prepare template parameters for EmailJS
      const templateParams = {
        from_name: sanitizedData.name,
        from_email: sanitizedData.email,
        subject: sanitizedData.subject,
        message: sanitizedData.message,
        to_email: 'ajaoolarinoyemichael@gmail.com',
        domain: currentDomain,
        timestamp: new Date().toLocaleString(),
        security_info: `Domain: ${currentDomain} | Timestamp: ${new Date().toISOString()}`
      }

      // Initialize EmailJS (if not already initialized)
      if (!window.emailjs) {
        emailjs.init(emailConfig.userId)
      }

      // Send email using EmailJS
      const response = await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        templateParams
      )

      if (response.status === 200) {
        // Track successful submission for rate limiting
        recordSubmission()
        
        setStatus({
          type: 'success',
          message: '🎉 Message sent successfully! I&rsquo;ll get back to you soon.'
        })
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        })
      } else {
        setStatus({
          type: 'error',
          message: 'Failed to send message. Please try again.'
        })
      }
    } catch {
      setStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.'
      })
    }
  }

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
                  disabled={status.type === 'loading'}
                />
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
                  disabled={status.type === 'loading'}
                />
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
                  disabled={status.type === 'loading'}
                />
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
                  disabled={status.type === 'loading'}
                ></textarea>
              </div>

              {/* Status Message */}
              {status.message && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-center gap-2 p-3 rounded-lg ${
                    status.type === 'success'
                      ? 'bg-green-900/50 text-green-200 border border-green-700'
                      : status.type === 'error'
                      ? 'bg-red-900/50 text-red-200 border border-red-700'
                      : 'bg-blue-900/50 text-blue-200 border border-blue-700'
                  }`}
                >
                  {status.type === 'success' && <CheckCircle size={18} />}
                  {status.type === 'error' && <AlertCircle size={18} />}
                  {status.type === 'loading' && (
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-blue-200 border-t-transparent"></div>
                  )}
                  <span dangerouslySetInnerHTML={{ __html: status.message }} />
                </motion.div>
              )}

              <button
                type="submit"
                disabled={status.type === 'loading'}
                className={`w-full px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 ${
                  status.type === 'loading'
                    ? 'bg-gray-600 cursor-not-allowed'
                    : 'bg-green-600 hover:bg-green-700'
                } text-white`}
              >
                {status.type === 'loading' ? (
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
