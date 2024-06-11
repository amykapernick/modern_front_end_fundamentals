import { test, expect } from '@playwright/test'

test('Has "Home" in the title', async ({ page }) => {
	await page.goto('/')

	await expect(page).toHaveTitle("Home")
})

test('Does the header have a link to the Add Set page', async ({ page }) => {
	await page.goto('/')

	await page
		.getByTestId('header')
		.getByRole('link', {
			name: "Add Set"
		})
		.click()

	await expect(page).toHaveURL('/add')
})