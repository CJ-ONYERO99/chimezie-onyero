import { defineConfig } from '@playwright/test'

export default defineConfig({
  timeout: 60_000,
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry'
  },
  webServer: {
    command: process.env.WEB_SERVER_CMD || 'npm run build && npm start',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
    env: { TEST_MODE: 'true' }
  }
})
