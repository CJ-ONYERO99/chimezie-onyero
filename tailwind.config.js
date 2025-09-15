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
        surface: '#1A1F26',
        border: '#2A313A',
        text: {
          primary: '#E6EAF0',
          muted: '#B6C0CC'
        },
        accent: {
          crimson: '#D9363E',
          crimsonHover: '#F0464E',
          cyan: '#00C4CC',
          cyanHover: '#2AE6ED'
        },
        focus: '#5BE3FF'
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.25rem'
      },
      boxShadow: {
        soft: '0 2px 10px rgba(0,0,0,0.12)'
      }
    }
  },
  plugins: []
}

