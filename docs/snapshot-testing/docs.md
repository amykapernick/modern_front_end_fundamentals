---
title: Snapshot Testing
---

Snapshot testing (or visual comparison, or visual regression testing) is a type of testing used to compare the visual state of a component or page against a previous state.

This is typically done as a pixel by pixel comparison, a visual version of a git diff.

## 4.1 Snapshot Testing in Playwright

Playwright makes it really easy to do [snapshot testing](https://playwright.dev/docs/test-snapshots). The first time the test runs it will take an initial reference screenshot, each subsequent run it will take a new screenshot and compare it to the reference.

```js
test('Snapshot Test - Homepage', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page).toHaveScreenshot('homepage.png');
});
```

The Playwright tests are then run using the bekow command (or using the [Playwright VS Code extension](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright)).

```bash
npx playwright test
```

If a test fails, but it's expected (ie, the styles changed, the screenshot is different and everything looks the way you intended it to), you can update the reference screenshot using the `--update-snapshots` flag.

```bash
npx playwright test --update-snapshots
```