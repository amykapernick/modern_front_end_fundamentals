import { test, expect } from '@playwright/test'

test('Expect homepage screenshot to match snapshot', async ({ page }) => {
	await page.goto('http://localhost:4321/')

	await expect(page).toHaveScreenshot()
})