import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

test('Homepage should not have issues', async ({ page }) => {
	await page.goto('http://localhost:4321/')

	const results = await new AxeBuilder({ page }).analyze()

	await expect(results.violations).toHaveLength(0)
})

test('Header should not have issues', async ({ page }) => {
	await page.goto('http://localhost:4321/')

	await page.getByTestId('header').waitFor()

	const results = await new AxeBuilder({ page })
		.include('header[data-testId="header"]')
		.analyze()

	await expect(results.violations).toHaveLength(0)
})