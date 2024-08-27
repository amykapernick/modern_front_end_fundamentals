import { test, expect } from '@playwright/test'

test('Can submit the form', async ({ page }) => {
	await page.goto('http://localhost:4321/add');

	await page.getByLabel('Set ID').fill('10368');
	await page.getByLabel('Set Name').fill('Chrysanthemum');
	await page.getByLabel('Category').fill('Botanical');
	await page.getByLabel('Tags').selectOption(['Adult', 'Flowers']);
	await page.getByLabel('Status').selectOption('Wishlist');
	await page.getByRole('button', { name: 'Add Set' }).click();

	await page.getByRole('button', { name: 'Sets' }).click();
	await page.getByRole('link', { name: 'All' }).click();

	const newSet = page.getByRole('link', { name: 'Chrysanthemum' });

	await expect(newSet).toBeDefined();
})