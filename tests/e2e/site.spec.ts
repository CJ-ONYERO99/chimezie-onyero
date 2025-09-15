import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

test('nav flow + a11y', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { name: 'Chimezie Joshua Onyero' })).toBeVisible()

  // a11y home
  let accessibilityScanResults = await new AxeBuilder({ page }).analyze()
  expect(accessibilityScanResults.violations.filter(v => ['critical','serious'].includes(v.impact || '')).length).toBe(0)

  await page.getByRole('link', { name: 'My Portfolio' }).click()
  await expect(page).toHaveURL(/\/portfolio/)
  await expect(page.getByRole('heading', { name: 'My Portfolio' })).toBeVisible()

  // a11y projects
  accessibilityScanResults = await new AxeBuilder({ page }).analyze()
  expect(accessibilityScanResults.violations.filter(v => ['critical','serious'].includes(v.impact || '')).length).toBe(0)

  await page.getByRole('link', { name: 'Contact' }).click()
  await expect(page).toHaveURL(/\/contact/)

  // invalid email
  await page.getByLabel('Name').fill('Alice')
  await page.getByLabel('Email').fill('not-an-email')
  await page.getByLabel('Message').fill('Hello from Playwright test message!')
  await page.getByRole('button', { name: 'Send Message' }).click()
  await expect(page.getByText('Invalid input')).toBeVisible()

  // fix email and submit successfully (mocked by TEST_MODE)
  await page.getByLabel('Email').fill('alice@example.com')
  await page.getByRole('button', { name: 'Send Message' }).click()
  await expect(page.getByText('Sent!', { exact: false })).toBeVisible()

  // a11y contact
  accessibilityScanResults = await new AxeBuilder({ page }).analyze()
  expect(accessibilityScanResults.violations.filter(v => ['critical','serious'].includes(v.impact || '')).length).toBe(0)
})
