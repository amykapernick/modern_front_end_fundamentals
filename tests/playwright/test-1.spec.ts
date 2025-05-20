import { test, expect } from '@playwright/test';

test('test', async ({ page }) =>
{
  await page.goto('http://localhost:4321/');
  await page.getByRole('link', { name: 'UI Testing' }).click();

  await expect(page).toHaveTitle(/UI Testing/);
  await expect(page.getByRole('heading', { name: 'UI Testing' })).toBeVisible();
  await expect(page.locator('main')).toHaveText(/Docs/)
  await expect(page.locator('main')).toHaveText(/Exercises/)


  // await page.getByRole('link', { name: '🔗 Exercises' }).click();
  // await page.getByRole('link', { name: '🔗 Exercises' }).click();
  // await page.getByRole('link', { name: 'Modern Front End Fun-damentals' }).click();
  // await page.getByRole('listitem').filter({ hasText: '- UI Testing 🔗 Docs 🔗 Exercises' }).getByRole('link').first().click();
  // await page.getByRole('link', { name: '🔗 Exercises' }).click();
  // await page.getByRole('link', { name: 'Modern Front End Fun-damentals' }).click();
  // await page.getByRole('listitem').filter({ hasText: '- Semantic HTML 🔗 Docs 🔗 Exercises' }).getByRole('link').nth(1).click();
  // await page.getByRole('link', { name: 'page' }).click();
  // await page.getByRole('textbox', { name: 'Name' }).click();
  // await page.getByRole('textbox', { name: 'Name' }).fill('Amy');
  // await page.getByRole('textbox', { name: 'Email*' }).click();
  // await page.getByRole('textbox', { name: 'Email*' }).fill('amy@realemail.com');
  // await page.getByRole('button', { name: 'Tell me more about Quokkas 🐨' }).click();
});