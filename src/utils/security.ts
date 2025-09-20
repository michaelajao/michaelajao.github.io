// Security utilities for the contact form

/**
 * Validates if the current domain is authorized
 */
export const validateDomain = (): boolean => {
  if (typeof window === 'undefined') return false
  
  const allowedDomains = [
    'michaelajao.github.io',
    'localhost:3000',
    '127.0.0.1:3000'
  ]
  
  const currentDomain = window.location.hostname + 
    (window.location.port ? ':' + window.location.port : '')
  
  return allowedDomains.includes(currentDomain)
}

/**
 * Checks rate limiting for form submissions
 */
export const checkRateLimit = (): { allowed: boolean; remaining: number } => {
  if (typeof window === 'undefined') return { allowed: true, remaining: 3 }
  
  const now = Date.now()
  const maxSubmissions = 3
  const timeWindow = 10 * 60 * 1000 // 10 minutes
  
  const submissions = JSON.parse(localStorage.getItem('contact_submissions') || '[]')
  const recentSubmissions = submissions.filter((time: number) => now - time < timeWindow)
  
  return {
    allowed: recentSubmissions.length < maxSubmissions,
    remaining: Math.max(0, maxSubmissions - recentSubmissions.length)
  }
}

/**
 * Records a successful submission
 */
export const recordSubmission = (): void => {
  if (typeof window === 'undefined') return
  
  const now = Date.now()
  const timeWindow = 10 * 60 * 1000 // 10 minutes
  
  const submissions = JSON.parse(localStorage.getItem('contact_submissions') || '[]')
  const recentSubmissions = submissions.filter((time: number) => now - time < timeWindow)
  
  const updatedSubmissions = [...recentSubmissions, now]
  localStorage.setItem('contact_submissions', JSON.stringify(updatedSubmissions))
}

/**
 * Basic input sanitization
 */
export const sanitizeInput = (input: string): string => {
  return input
    .trim()
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') // Remove script tags
    .replace(/[<>]/g, '') // Remove < and > characters
    .slice(0, 5000) // Limit length
}

/**
 * Validate email format
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email) && email.length <= 254
}

/**
 * Get EmailJS configuration
 */
export const getEmailJSConfig = () => {
  // Validate that required environment variables are set
  const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID

  if (!userId || !serviceId || !templateId) {
    console.warn('EmailJS configuration missing. Please set environment variables:')
    console.warn('- NEXT_PUBLIC_EMAILJS_USER_ID')
    console.warn('- NEXT_PUBLIC_EMAILJS_SERVICE_ID') 
    console.warn('- NEXT_PUBLIC_EMAILJS_TEMPLATE_ID')
  }

  return {
    userId: userId || 'user_XXXXXXXXXXXXX',
    serviceId: serviceId || 'service_4k3qbu9',
    templateId: templateId || 'template_xxx'
  }
}
