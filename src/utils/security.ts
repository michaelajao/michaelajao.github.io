// Client-side helpers for the contact form. Spam protection and domain limits
// are handled by Formspree. Submissions are sent as data and never rendered as
// HTML here, so characters such as < and > are kept as the person typed them.

export const MAX_MESSAGE = 5000

export const cleanInput = (input: string): string => input.trim()

export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email) && email.length <= 254
}
