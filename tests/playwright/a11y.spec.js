import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

test('Homepage Accessibility', async ({page}) => {
    await page.goto('/')

    const results = await new AxeBuilder({page}).analyze()

    console.log({results})

    expect(results.violations).toEqual([])
})