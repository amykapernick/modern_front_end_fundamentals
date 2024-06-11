import { test, expect } from '@playwright/test'

test('Expect home page to match screenshot', async ({ page }) => {
	await page.goto('/')

	await expect(page).toHaveScreenshot({ maxDiffPixels: 50 });
})