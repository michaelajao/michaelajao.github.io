'use client'

import { useEffect, useRef, useState } from 'react'
import { useForm } from '@formspree/react'
import { Arr } from './Brand'
import { INTENTS, PROFILES, type IntentValue } from '@/content/site'
import { cleanInput, isValidEmail, MAX_MESSAGE } from '@/utils/security'

// Formspree form ID is a public identifier. Set it in .env.local (locally)
// or as a GitHub Actions secret (production).
const FORMSPREE_FORM_ID = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID ?? ''

type Field = 'name' | 'email' | 'message' | 'consent'
type Errors = Partial<Record<Field, boolean>>

const ERR_TEXT: Record<Field, string> = {
  name: 'Please enter your name.',
  email: 'Please enter a valid email address.',
  message: 'Please write a short message.',
  consent: 'Please tick the box so I can reply.',
}
const FIELD_ID: Record<Field, string> = { name: 'f-name', email: 'f-mail', message: 'f-msg', consent: 'f-consent' }

export default function ContactForm() {
  const [state, submit, reset] = useForm(FORMSPREE_FORM_ID || 'unconfigured')
  const [intent, setIntent] = useState<IntentValue>('research')
  const [values, setValues] = useState({ name: '', email: '', message: '', consent: false, _gotcha: '' })
  const [errors, setErrors] = useState<Errors>({})
  const [note, setNote] = useState('')
  const [unavailable, setUnavailable] = useState(false)
  const successRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (state.succeeded) successRef.current?.focus()
  }, [state.succeeded])

  const validate = (v = values): Errors => ({
    name: cleanInput(v.name).length < 2,
    email: !isValidEmail(cleanInput(v.email)),
    message: cleanInput(v.message).length < 10,
    consent: !v.consent,
  })

  const update = <K extends keyof typeof values>(k: K, val: (typeof values)[K]) => {
    const next = { ...values, [k]: val }
    setValues(next)
    if (k in errors && errors[k as Field]) setErrors((e) => ({ ...e, [k]: validate(next)[k as Field] }))
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setUnavailable(false)
    const errs = validate()
    setErrors(errs)
    const first = (Object.keys(errs) as Field[]).find((k) => errs[k])
    if (first) {
      setNote('Some fields need attention.')
      document.getElementById(FIELD_ID[first])?.focus()
      return
    }
    setNote('')
    if (!FORMSPREE_FORM_ID) {
      setUnavailable(true)
      return
    }
    const label = INTENTS.find((i) => i.value === intent)?.label ?? intent
    await submit({
      intent: label,
      name: cleanInput(values.name),
      email: cleanInput(values.email),
      message: cleanInput(values.message),
      consent: 'Agreed to be contacted about this message',
      _subject: `Academic site enquiry: ${label}`,
      _gotcha: values._gotcha,
    })
  }

  const serverFailed = Boolean(state.errors)
  const busy = state.submitting

  if (state.succeeded) {
    return (
      <div className="c-done" ref={successRef} tabIndex={-1} role="status">
        <h2>Thank you, your message is on its way.</h2>
        <p>I read every message and reply personally. If you do not hear back within a few working days, please check your spam folder or send it again.</p>
        <button
          type="button"
          className="btn btn-line"
          onClick={() => {
            reset()
            setValues({ name: '', email: '', message: '', consent: false, _gotcha: '' })
            setNote('')
          }}
        >
          Send another message
        </button>
      </div>
    )
  }

  const invalid = (k: Field) => (errors[k] ? true : undefined)

  return (
    <form id="cform" noValidate onSubmit={onSubmit} aria-busy={busy}>
      <fieldset disabled={busy}>
        <legend>What is this about?</legend>
        <div className="chips">
          {INTENTS.map((i) => (
            <label key={i.value}>
              <input type="radio" name="intent" value={i.value} checked={intent === i.value} onChange={() => setIntent(i.value)} />
              <span>{i.label}</span>
            </label>
          ))}
        </div>
      </fieldset>
      <div className="two">
        <div className="field">
          <label htmlFor="f-name">Your name</label>
          <input id="f-name" name="name" autoComplete="name" required value={values.name} onChange={(e) => update('name', e.target.value)} aria-describedby="e-name" aria-invalid={invalid('name')} disabled={busy} />
          <span className="err" id="e-name" hidden={!errors.name}>
            {ERR_TEXT.name}
          </span>
        </div>
        <div className="field">
          <label htmlFor="f-mail">Email</label>
          <input id="f-mail" name="email" type="email" autoComplete="email" required value={values.email} onChange={(e) => update('email', e.target.value)} aria-describedby="e-mail" aria-invalid={invalid('email')} disabled={busy} />
          <span className="err" id="e-mail" hidden={!errors.email}>
            {ERR_TEXT.email}
          </span>
        </div>
      </div>
      <div className="field">
        <label htmlFor="f-msg">Message</label>
        <textarea id="f-msg" name="message" required maxLength={MAX_MESSAGE} value={values.message} onChange={(e) => update('message', e.target.value)} aria-describedby="h-msg e-msg" aria-invalid={invalid('message')} disabled={busy} />
        <span className="hint" id="h-msg">
          Up to 5,000 characters. Please leave out passwords and confidential documents.
        </span>
        <span className="err" id="e-msg" hidden={!errors.message}>
          {ERR_TEXT.message}
        </span>
      </div>
      {/* Honeypot: hidden from people, filled only by bots. Formspree discards submissions where it is set. */}
      <input type="text" name="_gotcha" className="hp" tabIndex={-1} autoComplete="off" aria-hidden="true" value={values._gotcha} onChange={(e) => update('_gotcha', e.target.value)} />
      <label className="consent">
        <input type="checkbox" name="consent" id="f-consent" required checked={values.consent} onChange={(e) => update('consent', e.target.checked)} aria-describedby="e-consent" aria-invalid={invalid('consent')} disabled={busy} />
        <span>
          I agree to my details being used to reply to this message. See the <a href="#privacy">privacy notice</a>.
        </span>
      </label>
      <span className="err" id="e-consent" hidden={!errors.consent}>
        {ERR_TEXT.consent}
      </span>
      <div className="form-foot">
        <button className="btn btn-fill" type="submit" disabled={busy}>
          {busy ? 'Sending…' : 'Send message'} {busy ? null : <Arr />}
        </button>
      </div>
      <div id="form-note" role="status" aria-live="polite">
        {note}
      </div>
      {unavailable || serverFailed ? (
        <p className="form-error" role="alert">
          {unavailable ? 'The contact form is not available just now.' : 'Something went wrong, and your message was not sent.'} Please try again in a moment, or message me on{' '}
          <a href={PROFILES.linkedin} rel="noopener">
            LinkedIn
          </a>
          .
        </p>
      ) : null}
    </form>
  )
}
