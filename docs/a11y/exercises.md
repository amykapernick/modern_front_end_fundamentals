---
name: Accessibility
---

## 3.2 Colour Contrast
Using one of these (or another) tools, find some non-passing colour combinations.

🏆 *Worst Combination (must be on the internet somewhere)* and *Best "Technically" Passes but sucks for vision impairments*

## 3.3 Keyboard Accessibility

Try using your keyboard alone to navigate around a few websites, can you do everything you normally would? Do you know where you are?

🏆 *Best **WTF** messing with focus indicators and/or tabindex*

## 3.5 Manual Testing

Check out the [WAVE](https://wave.webaim.org/) and [axe](https://www.deque.com/axe/) browser extensions or dev tools integrations, run over a few different websites and use it to identify some of the accessibility issues.

## 3.6 Screen Readers

Plug in some headphones and try out using the screen reader to navigate around some webpages. See if you can ignore your mouse altogether and close your eyes.

*Hint*: Make sure you remember how to turn the screen reader on and off, otherwise once it's on you may struggle to turn it off again

Watch [this video of someone using a screen reader](https://youtu.be/WSEe2zxjslw), consider the difference between their use and yours.

## 3.7 Automated Testing

### 3.7.1 Pa11y

Create a pa11y test that runs against the local server (will probably be http://localhost:3000) and logs the results to the console.

We can also save the results to a file and make it easier to read through and access them using the `file-system` package.

```jsx
const pa11y = require('pa11y');
const fs = require('file-system')

pa11y('https://mywebsite.com')
	.then((results) => {
		fs.writeFileSync(
			`results.json`, 
			JSON.stringify(res, null, 4)
		)
	})
	.catch((err) => {
		console.log({ err });
	})
```

Update the test to save the results in a JSON file in the tests/a11y/results folder.

#### 3.7.1.1 Interpreting Pa11y Results

Find 2 errors that exist on your page, and work out what the issue is. If you can fix it, do so, otherwise make a note of what the fix needs to be.

#### 3.7.1.2 Pa11y Configuration

There are some default options in the `tests/a11y/pa11y.config` file, import them and add them to the test. Then try adding your own.