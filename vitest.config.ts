import { defineConfig } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsconfigPaths()],
  esbuild: {
    jsx: 'automatic',
    jsxImportSource: 'react'
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    css: true,
    globals: true,
    include: ['tests/unit/**/*.test.ts?(x)', 'tests/integration/**/*.test.ts?(x)'],
    exclude: ['tests/e2e/**']
  }
})
