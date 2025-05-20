import { test, expect } from '@playwright/test'

test('Has "Home" in the title', async ({page}) => {
    await page.goto('/')

    await expect(page).toHaveTitle(/Home/)
})

