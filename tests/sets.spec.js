import { test, expect } from '@playwright/test'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

test('Expect add form to submit and add a new set', async ({ page }) => {
	await page.goto('/add')

	// Fill in form
	await page.getByLabel('Set ID').fill('10333');
	await page.getByLabel('Set Name').fill('The Lord of the Rings: Barad-dûr');
	await page.getByLabel('Category').fill('Lord of the Rings');
	await page.getByLabel('Pieces Number').fill('5471');
	await page.getByLabel('Tags').selectOption(['Adult', 'Landmarks', 'Modular Buildings']);
	await page.getByLabel('Status').selectOption('Wishlist');
	await page.getByLabel('Image').setInputFiles(
		path.join(__dirname, '../../../10333-1.jpg')
	);
	await page.getByRole('button', { name: 'Add Set' }).click();
})

test('Expect new set to exist in the wishlist', async ({ page }) => {
	await page.goto('/')

	await page.getByRole('button', { name: 'Sets' }).click();
	await page.getByRole('link', { name: 'Wishlist' }).click();

	await expect(page.getByRole('heading', { name: /The Lord of the Rings/ })).toHaveText('The Lord of the Rings: Barad-dûr')
})

test('Expect new set page to contain set name', async ({ page }) => {
	await page.goto('/wishlist')

	await page.getByRole('link', { name: 'The Lord of the Rings: Barad-dûr' }).click();

	await expect(page.getByRole('heading', { level: 1 })).toHaveText('The Lord of the Rings: Barad-dûr')
})