import { useState } from 'react'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState({ state: 'idle', message: '' })

  const onChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus({ state: 'loading', message: 'Sending…' })
    try {
      const res = await fetch(`${BACKEND_URL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'website' }),
      })
      if (!res.ok) throw new Error('Failed to send')
      const data = await res.json()
      setStatus({ state: 'success', message: 'Message sent! I will get back to you soon.' })
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      setStatus({ state: 'error', message: 'Something went wrong. Please try again.' })
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <input
        name="name"
        type="text"
        placeholder="Name"
        value={form.name}
        onChange={onChange}
        required
        className="w-full bg-zinc-900/80 border border-white/10 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={onChange}
        required
        className="w-full bg-zinc-900/80 border border-white/10 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
      />
      <textarea
        name="message"
        rows="5"
        placeholder="Message"
        value={form.message}
        onChange={onChange}
        required
        className="w-full bg-zinc-900/80 border border-white/10 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
      />
      <button
        type="submit"
        disabled={status.state === 'loading'}
        className="px-6 py-3 rounded-md bg-gradient-to-r from-red-600 to-amber-500 text-white font-semibold shadow-lg shadow-red-900/30 disabled:opacity-60"
      >
        {status.state === 'loading' ? 'Sending…' : 'Send'}
      </button>
      {status.state !== 'idle' && (
        <p className={
          status.state === 'success'
            ? 'text-green-400'
            : status.state === 'error'
            ? 'text-red-400'
            : 'text-zinc-400'
        }>
          {status.message}
        </p>
      )}
    </form>
  )
}
