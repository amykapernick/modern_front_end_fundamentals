import { test, expect } from '@playwright/test'

const websiteUrl = 'http://localhost:4321'

test('Snapshot Test - Homepage', async ({page}) => {
    await page.goto(websiteUrl)
    await expect(page).toHaveScreenshot('homepage.png')
})