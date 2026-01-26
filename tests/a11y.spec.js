import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('Homepage Accessibility', async ({page}) => {
    await page.goto('/')

    const a11yResults = await new AxeBuilder({page})
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .exclude('#third-party-chat')
        .analyze()

    console.log({...a11yResults.violations})

    expect(a11yResults.violations).toEqual([])
})