"use client"
import { useState } from 'react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Button } from '@/components/ui/Button'

export default function ContactPage() {
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle')
  const [error, setError] = useState<string>('')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    setError('')
    const fd = new FormData(e.currentTarget)
    const body = Object.fromEntries(fd.entries())
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
      const data = await res.json()
      if (!res.ok || !data.ok) throw new Error(data.error || 'Failed to send')
      setStatus('success')
      e.currentTarget.reset()
    } catch (err: any) {
      setError(err.message || 'Something went wrong')
      setStatus('error')
    }
  }

  return (
    <Container>
      <Section title="Contact" subtitle="Send a message — I’ll reply soon">
        <form onSubmit={onSubmit} className="max-w-xl space-y-4" aria-describedby={error ? 'form-error' : undefined}>
          <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
          <Input label="Name" name="name" required minLength={2} maxLength={80} />
          <Input label="Email" name="email" type="email" required />
          <Textarea label="Message" name="message" required minLength={10} maxLength={2000} rows={6} />
          <div className="flex items-center gap-3">
            <Button type="submit" disabled={status==='loading'}>{status==='loading' ? 'Sending…' : 'Send Message'}</Button>
            {status==='success' && <span role="status" className="text-green-600">Sent! I’ll get back to you.</span>}
            {status==='error' && <span id="form-error" role="alert" className="text-red-600">{error}</span>}
          </div>
        </form>
      </Section>
    </Container>
  )
}

