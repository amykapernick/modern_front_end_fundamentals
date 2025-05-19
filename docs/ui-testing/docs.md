---
title: UI Testing
---

When making changes to large codebases, at some point a change will inevitably bleed out to somewhere we didn't intend it to, which is why UI testing is really useful. With these tests we can ensure that our application's parts still exist and can be interacted with.

## 5.1 UI Testing in Playwright

Playwright tests are written with [assertions](https://playwright.dev/docs/test-assertions) the same as a lot of other testing tools, where we can find sections and information on the page and check whether the values/content exists that is supposed to.

```js
const { test, expect } = require('@playwright/test')

test('Has "My Website" in the title', async ({ page }) => {
	await page.goto('/')

	await expect(page).toHaveTitle(/My Website/)
})
```

We can then run the tests we''ve written using the `npx playwright test` command, depending on the options being used we can also use a [test runner](https://playwright.dev/docs/test-ui-mode) to more easily visualise what is being tested.

### 5.1.1 Playwright Test Runner

Playwright also has a [test generator](https://playwright.dev/docs/codegen) to make it easier to write the tests by interacting with the website.

## 5.2 Accessibility Testing in Playwright

Playwright now has built in support for automated Accessibility testing using the Axe testing library. This is a great way to integrate some automated accessibility tests to your existing testing workflow.

```js
const { test, expect } = require('@playwright/test');
const AxeBuilder = require('@axe-core/playwright').default;

test.describe('Homepage', () => {
  test('Should not have any Accessibility issues', async ({ page }) => {
    await page.goto('http://localhost:3000')

    const results = await new AxeBuilder({ page }).analyze()

    expect(results.violations).toEqual([])
  })
})
```

### 5.2.1 Testing against WCAG

If we need to meet a certain WCAG standard, we can check against a [specific standard and version](https://playwright.dev/docs/accessibility-testing#scanning-for-wcag-violations) using the `withTags()` function.


```js
const results = await new AxeBuilder({ page })
	.withTags(['wcag21a', 'wcag21aa'])
	.analyze()
```