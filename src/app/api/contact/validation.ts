import { z } from 'zod'
import { sanitize } from '@/lib/sanitize'

export const ContactSchema = z.object({
  name: z.string().min(2).max(80),
  email: z.string().email().max(200),
  message: z.string().min(10).max(2000),
  website: z.string().optional().default(''),
})

export type ContactInput = z.infer<typeof ContactSchema>

export function validateContact(input: unknown) {
  const parsed = ContactSchema.safeParse(input)
  if (!parsed.success) {
    return { ok: false as const, error: 'Invalid input', issues: parsed.error.flatten() }
  }
  if (parsed.data.website) {
    return { ok: false as const, error: 'Bot detected' }
  }
  const data = {
    name: sanitize(parsed.data.name),
    email: sanitize(parsed.data.email),
    message: sanitize(parsed.data.message),
  }
  return { ok: true as const, data }
}

