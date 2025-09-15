export function sanitize(input: string) {
  return input.replace(/[\u0000-\u001F\u007F]/g, '').trim()
}

