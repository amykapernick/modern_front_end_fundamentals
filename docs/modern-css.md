# Modern CSS Layouts

## Flexbox

[Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout), using the `display: flex` property allows laying out and re-ordering it’s children. This comes along with a bunch of [different properties](https://css-tricks.com/snippets/css/a-guide-to-flexbox/), and is really useful for laying items out in a flowing direction. Once the container is using flexbox, the [`justify-content`](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content) property defines how the items lay out along the main axis (most of the time this is horizontally across the page) and how the space is allocated between them. In the cross axis (most of the time this is vertical), the [`align-items`](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items) property will define how the flex children line up against one another.

![[https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-justify-content](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-justify-content)](/docs/img/Untitled.png)

[https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-justify-content](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-justify-content)

![[https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-align-items](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-align-items)](/docs/img/Untitled%201.png)

[https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-align-items](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-align-items)

```css
.container {
	display: flex;
	align-items: center;
}
```

> 👩🏾‍💻 Use flexbox to align the menu items next to one another
> 
> ![image.png](/docs/img/image.png)


Using the `gap` property, we can add spaces between each of the items.

```css
.container {
	gap: 10px;
}
```

> 👩🏾‍💻 Add space between each of the menu items


When there are more items than fit in one row, they will overflow by default. You can use the [`flex-wrap`](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap) property to allow wrapping onto one line.

```css
.container {
	display: flex;
	flex-wrap: wrap;
}
```

> 👩🏾‍💻 `/sets`
> Align the categories
> 
> ![image.png](/docs/img/image%201.png)


By default flex items will adjust size where necessary, growing and shrinking as defined. The [`flex-grow`](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow) and [`flex-shrink`](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink) property defines if an item will grow or shrink by giving it a positive number, any additional space is then allocated/removed depending on the value (eg. an item with a `flex-grow` value of `4` will get four times as much space as one with a value of `1`). The [`flex-basis`](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis) property defines the initial size of an item (by default it’ll inherit the item width, or you can give it a pixel value).

![[https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-flex-grow](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-flex-grow)](/docs/img/Untitled%202.png)

[https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-flex-grow](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-flex-grow)

```css
.item {
	flex-grow: 4;
	flex-shrink: 1;
	flex-basis: 300px;
}
```

> 👩🏾‍💻 `/sets`
> Align the cards and make sure they’re at least 200px wide but will stretch/shrink as required and have space between each item.
> 
> ![image.png](/docs/img/1f208ea3-92ae-4f5e-8edf-b4775104ae04.png)


> 👩🏾‍💻 `/`
> Use flexbox to align all the different sections next to one another
> 
> ![image.png](/docs/img/e25afbe6-5d40-4876-9c63-8ba05a679b29.png)


Flexbox is useful for vertically centring content, like aligning labels next to checkboxes.

> 👩🏾‍💻 Use the `align-items`, `align-content` and `justify-content` properties to vertically centre the items in the header and put horizontal spacing between them.
> 
> ![image.png](/docs/img/image%202.png)


We can change the order the flex children appear on the page without changing their source order using the [`order`](https://developer.mozilla.org/en-US/docs/Web/CSS/order) property. By default each item has an implicit value of `0`, a negative number will bring it to the start and a positive number will put it at the end. Based on these numbers they’ll then be sorted.

![Untitled](/docs/img/Untitled%203.png)

```css
.container {
	display: flex;
	flex-direction: column;
}

.item {
	order: -1;
}
```

> 👩🏾‍💻 `/`
> Use the order property to put the stored selection last and the wishlist section first.
> *Hint*: there’s a data attribute on each section with the section name, eg. `.status[data-status="assembled"]` would select the assembled section


## CSS Grid

[CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) (`display: grid`) is more powerful than Flexbox and has greater control over items in both vertical and horizontal directions. Using the `grid-template-columns` and `grid-template-rows` properties we can define the columns the grid layout uses, with spaces between each defined size (any CSS unit is valid).

```css
.container {
	display: grid;
	grid-template-columns: 200px 20% 10vw;
}
```

To reduce code, we can use the [`repeat()`](https://developer.mozilla.org/en-US/docs/Web/CSS/repeat) function to repeat columns a certain number of times.

```css
.container {
	/* 200px 200px 200px */
	grid-template-columns: repeat(3, 200px);
	/* 100px auto 100px auto */
	grid-template-rows: repeat(2, 100px auto);
}
```

There is a new responsive unit as part of CSS Grid as well, the [`fr`](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout#the_fr_unit) unit. This unit allocates empty space between elements (similar to `flex-grow`), eg. twice as much space will be allocated to the `2fr` column than to the `1fr` column.

```css
.container {
	display: grid;
	grid-template-columns: 100px 1fr 50px 2fr;
}
```

> 👩🏾‍💻 `/sets`
> Define a CSS Grid layout for the sets feed (overwriting the flexbox styles), there should be equal width columns.
> *Hint*: Keep the flexbox code there, we’ll use it later, but comment it out or write the grid code separately


To automate the layout further, we can use the [`auto-fit` and `auto-fill` properties](https://css-tricks.com/snippets/css/complete-guide-grid/#aa-the-repeat-function-and-keywords) to [create columns depending](https://codepen.io/SaraSoueidan/pen/JrLdBQ) on the screen size:

- [`auto-fill`](https://developer.mozilla.org/en-US/docs/Web/CSS/repeat#auto-fill): Create as many columns as it can fit, even if there’s not enough grid-items
- [`auto-fit`](https://developer.mozilla.org/en-US/docs/Web/CSS/repeat#auto-fit): Create as many columns as it can fit, but no more than the number of grid items

![[https://codepen.io/SaraSoueidan/pen/JrLdBQ](https://codepen.io/SaraSoueidan/pen/JrLdBQ)](/docs/img/Untitled%204.png)

[https://codepen.io/SaraSoueidan/pen/JrLdBQ](https://codepen.io/SaraSoueidan/pen/JrLdBQ)

We can also use the [`minmax()`](https://css-tricks.com/snippets/css/complete-guide-grid/#aa-sizing-functions) function to create a flexible column that resizes as needed.

```css
.container {
	display: grid;
	grid-template-columns: 
		repeat(
			auto-fill, 
			minmax(200px, 1fr)
		);
}
```

> 👩🏾‍💻 `/sets` 
> Update the feed to have more responsive columns that are at least 250px wide


To add a gap between the items, the [`column-gap` and `row-gap`](https://css-tricks.com/snippets/css/complete-guide-grid/#aa-gapgrid-gap) properties.

```css
.container {
	display: grid;
	column-gap: 20px;
	row-gap: 10px;
}
```

> 👩🏾‍💻 Replace the existing `gap` with a different gap between columns and rows.


As well as auto-allocating items to spots on the grid, we can define areas and assign elements manually for greater control. Using the [`grid-template-areas`](https://css-tricks.com/snippets/css/complete-guide-grid/#aa-grid-template-areas) property we can add name labels to the different areas of the grid, these can spread across different sections to form a larger area. The definition of these areas is fairly forgiving on white space, so it’s good practice to line these up to easier visualise the grid layout. Each row is a separate string inside quotes and each column is separated by at least one space, with any string value being a valid area name (even emojis).

```css
.container {
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-template-rows: 100px 1fr 50px;
	grid-template-areas:
		'header   header   header   header   header'
		'sidebar  content  content  content   .    '
		'footer   footer   footer   footer   footer';
}
```

![grid-template-areas.gif](/docs/img/grid-template-areas.gif)

Once the areas are named, you can assign items to the areas using the [`grid-area`](https://css-tricks.com/snippets/css/complete-guide-grid/#prop-grid-area) property.

```css
.header_item {
	grid-area: header;
}
```

> 👩🏾‍💻 `/sets`
> Use grid areas to lay out the cards so they match the design
> 
> ![image.png](/docs/img/image%203.png)


> 👩🏾‍💻 `/add`
> Use grid areas to lay out the labels for the range slider, and the number input next to it.
> 
> ![image.png](/docs/img/image%204.png)


If you’re having to support [older browsers that don’t support](https://caniuse.com/css-grid) CSS Grid, you can use the [`@supports` query](https://developer.mozilla.org/en-US/docs/Web/CSS/@supports) to check for browser support first, and use flexbox or another layout method.

```css
@supports(grid-template-columns: 20px) {
	/* CSS Grid code goes here */
} 
```

> 👩🏾‍💻 Wrap all the grid code in a `@supports` query, keeping the original flexbox code as a fallback


## Floats

Although previously misused for layout techniques, [`float`](https://developer.mozilla.org/en-US/docs/Web/CSS/float) is a useful CSS property to this day, as it allows us to *float* an element (typically an image) on one side of the page (`left` or `right`) and to have text content flow around it.

This is often used along with the [`clear`](https://developer.mozilla.org/en-US/docs/Web/CSS/clear) property to ensure that the floated element doesn’t escape the container you want it to stay within.

```css
.image {
	float: left;
}

.container {
	clear: left;
	overflow: hidden;
}
```

```html
<div class="container">
	<img class="image" src="/img/quokka.jpg" alt="A Quokka smiling at the camera" />
	<p>Quokkas are the happiest animal in Australia that surprisingly isn't trying to kill you. They're Australian marsupials (related to kangaroos and wallabies), only found on a small island called Rottnest Island, off the coast of Perth. They're herbivores (although will eat most food you leave lying around) and have no natural predators therefore aren't afraid of humans.</p>
</div>
```

> 👩🏾‍💻 `/about`
> On the about page, float the main image to the right hand side of the page.


## Shiny New CSS

### Styleable Select

*Note: this currently only works on Chromium based browsers, and needs the [`#enable-experimental-web-platform-features`](about://flags/#enable-experimental-web-platform-features) flag enabled*

```html
<selectlist>
  <button type="selectlist">
    <span class="label">Where</span>
    <selectedoption></selectedoption>
  </button>
  <listbox>
    <p class="header">Search by region</p>
    <div class="option-container">
      <option value="" hidden>
        <span>Search destinations</span>
      </option>
      <option value="anywhere">
        <img src="/img/globe.png" alt="" />
        <span class="text">Everywhere</span>
      </option>
      <option value="europe">
        <img src="/img/europe.png" alt="" />
        <span class="text">Europe</span>
      </option>
      ...
    </div>
  </listbox>
</selectlist>
```

We can target the elements used here via CSS, allowing us to style all parts of the select field.

> 👩🏾‍💻 `/add`
> In the `_data/status.astro` file, replace the `select` field with `selectlist` field and style it using CSS.
