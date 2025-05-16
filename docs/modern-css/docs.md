---
title: Modern CSS
---

## 2.1 Flexbox

[Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout), using the `display: flex` property allows laying out and re-ordering it’s children. This comes along with a bunch of [different properties](https://css-tricks.com/snippets/css/a-guide-to-flexbox/), and is really useful for laying items out in a flowing direction. 

```css
.container {
	display: flex;
}
```

### 2.1.1 Aligning & Justifying Flex Items

Once the container is using flexbox, the [`justify-content`](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content) property defines how the items lay out along the main axis (most of the time this is horizontally across the page) and how the space is allocated between them. In the cross axis (most of the time this is vertical), the [`align-items`](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items) property will define how the flex children line up against one another.

![https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-justify-content](./img/Untitled.png)

![https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-align-items](./img/Untitled%201.png)

```css
.container {
	display: flex;
	align-items: center;
}
```

### 2.1.2 Gaps

Using the `gap` property, we can add spaces between each of the items.

```css
.container {
	gap: 10px;
}
```