/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{ts,tsx}',
    './src/content/**/*.{mdx,md}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#050505',
        },
        surface: {
          DEFAULT: '#111111',
          border: 'rgba(57, 255, 20, 0.25)',
        },
        text: {
          primary: '#f8fafc',
          muted: '#94a3b8',
        },
        brand: {
          primary: '#39ff14',
          primaryHover: '#2cd90e',
          secondary: '#00ff88',
          secondaryHover: '#00d26a',
        },
        state: {
          success: '#22c55e',
          warning: '#f59e0b',
          danger: '#ef4444',
          focus: '#39ff14',
        },
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.25rem'
      },
      boxShadow: {
        soft: '0 0 30px rgba(57, 255, 20, 0.12)'
      }
    }
  },
  plugins: []
}
