export function generateNonce(size = 16) {
  const bytes = new Uint8Array(size)
  if (typeof crypto !== 'undefined' && 'getRandomValues' in crypto) {
    crypto.getRandomValues(bytes)
  } else {
    for (let i = 0; i < size; i++) bytes[i] = Math.floor(Math.random() * 256)
  }
  // Convert to base64 without Buffer to be Edge-safe
  const bin = Array.from(bytes)
    .map((b) => String.fromCharCode(b))
    .join('')
  if (typeof btoa !== 'undefined') {
    return btoa(bin)
  }
  // Node fallback without require (avoid ESLint plugin rule dependency)
  if (typeof (globalThis as any).Buffer !== 'undefined') {
    return (globalThis as any).Buffer.from(bytes).toString('base64')
  }
  // Last resort: simple base64 polyfill
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
  let str = bin
  let output = ''
  for (let block = 0, charCode: number, i = 0, map = chars;
       str.charAt(i | 0) || ((map = '='), i % 1);
       output += map.charAt(63 & (block >> (8 - (i % 1) * 8)))) {
    charCode = str.charCodeAt((i += 3 / 4))
    if (charCode > 0xff) throw new Error('Invalid character for base64')
    block = (block << 8) | charCode
  }
  return output
}

export function buildCsp(nonce: string) {
  const directives = [
    `default-src 'self'`,
    `script-src 'self' 'nonce-${nonce}'`,
    `style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net https://cdnjs.cloudflare.com`,
    `img-src 'self' data: https://cdn.jsdelivr.net`,
    `connect-src 'self'`,
    `font-src 'self' https://cdn.jsdelivr.net https://cdnjs.cloudflare.com`,
    `frame-ancestors 'none'`,
    `base-uri 'self'`,
    `form-action 'self'`
  ]
  return directives.join('; ')
}
