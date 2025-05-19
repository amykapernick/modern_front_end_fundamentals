---
title: UI Testing
---

## 5.1 UI Testing in PLaywright

Create a test file in `tests/ui/tests/home.spec.js` and check that the page title is what it's supposed to be on one of the pages.

### 5.1.1 Playwright Test Runner

Use the test generator to create more tests for the website, including:

- Accessing one of the sections from the homepage
- Navigating from the Docs page to the Exercises page
- Filling in the contact form on the about page
- Returning to the homepage by clicking the header logo

## 5.2 Accessibility Testing in Playwright

Create a test file in `tests/ui/tests/accessibility.spec.js` and check that the homepage and another page has no accessibility issues.

### 5.2.1 Testing against WCAG

Adjust the specific WCAG standard and see the differences in the results.

Once you've found an issue, try and fix it, then run the tests again.