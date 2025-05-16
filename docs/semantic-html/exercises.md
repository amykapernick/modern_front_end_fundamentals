---
title: Semantic HTML
---
All Semantic HTML exercises are done based off the following [page](/semantic-html/quokkas).

## 1.1 Landmark Elements

Add the relevant landmark elements.

## 1.2 Forms

### 1.2.1 Form Fields and Labels

Write a simple contact form that takes a full name, email address and phone number. Each field should have a label which is linked to it.

### 1.2.2 Datalists

Add a `datalist` field to the form that asks for the method of transport to get here today.

### 1.2.3 Range Sliders

Add a range field to find out how important Semantic HTML is in web development, ranging from *Not at all important* to *Most important part*, with a description in the middle for neutral views

## 1.3 Media Elements

### 1.3.1 Text Alternatives

Choose one of the images below and add it to the page with appropriate alt text. You can use your own image URL if you like

- https://assets.codepen.io/707165/image_300.jpg
- https://assets.codepen.io/707165/image_600.jpg
- https://assets.codepen.io/707165/image_900.jpg
- https://assets.codepen.io/707165/image_1200.jpg

### 1.3.2 Figures and Captions

Add a figure element around our image and give it a caption for people to see. The caption doesn’t need to describe the image but should be an add-on to it.

### 1.3.3 Picture Element

#### 1.3.3.1 Different Image Sizes

Add a `picture` element to service the following images (in order, smallest to widest) at the following screen sizes: `400px`, `600px`, `900px` (one of them will be a fallback). The `picture` should be enclosed in a `figure` with a caption

- https://assets.codepen.io/707165/image_300.jpg
- https://assets.codepen.io/707165/image_600.jpg
- https://assets.codepen.io/707165/image_900.jpg
- https://assets.codepen.io/707165/image_1200.jpg

#### 1.3.3.4 Different Image Formats

Add new file formats to the `picture` element, `avif` should be rendered if it’s supported, otherwise `webp` and `jpg` if those aren’t supported. There’s some additional images to use:

- https://assets.codepen.io/707165/image_300.webp
- https://assets.codepen.io/707165/image_600.webp
- https://assets.codepen.io/707165/image_900.webp
- https://assets.codepen.io/707165/image_1200.webp
- https://assets.codepen.io/707165/image_300.avif
- https://assets.codepen.io/707165/image_600.avif
- https://assets.codepen.io/707165/image_900.avif
- https://assets.codepen.io/707165/image_1200.avif

**Note**: Normally the picture element is used to render different sizes/formats of the same image, we’re just using different images here to make it easier to see the different images being loaded in.

### 1.3.4 Image Maps

Add the above image map to the page and see how it works, try adjusting the coordinates or removing the fixed `width` on the image to see how that changes it.

### 1.3.5 Video

Add a `video` to the page, inside a `figure` element, with a fallback linking to download the video

- https://assets.codepen.io/707165/video.mp4

#### 1.3.5.1 Subtitles, Captions and Descriptions

Add a captions track to the video, these are in British/Australian English. You’ll also have to add the `crossorigin` attribute to the `video` element to get them to load in to the Codepen (this may or may not be needed when you use this elsewhere).

- https://assets.codepen.io/707165/subtitles.vtt

## 1.4 Other Elements

### 1.4.1 Definition List

Replace the stats section elements to use the definition list elements instead.

### 1.4.2 Collapsible Sections

Replace the FAQ section with collapsible sections using the `details` and `summary` elements

#### 1.4.2.1 Exclusive Collapsible Sections

Update the FAQ section so that only one section can be open at a time.