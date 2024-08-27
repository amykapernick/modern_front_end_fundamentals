import { test, expect } from '@playwright/test'

test('Has "Home" in the title', async ({ page }) => {
	await page.goto('http://localhost:4321/')

	await expect(page).toHaveTitle(/Home/)
})

test('Can click on a card', async ({ page }) => {
	await page.goto('http://localhost:4321/');

	await page.getByRole('link', { name: 'Natural History Museum' }).click();

	await expect(page).toHaveURL(/sets\/10326/)
})

test('Header contains site title', async ({ page }) => {
	await page.goto('http://localhost:4321/');

	const header = page.getByTestId('header')

	await expect(header).toContainText('Modern Front End Fun-damentals')
})