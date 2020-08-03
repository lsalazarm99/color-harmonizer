# color-harmonizer

`color-harmonizer` is a tool that, given a main color and an array of unique colors, returns a list of those colors
 ordered relatively to the main color.
 
 ```js
const harmonizedColors = {
  mainColor: [88, 24, 69],
  additionalColors: [
    [255, 195, 0],
    [255, 87, 51],
    [199, 0, 57]
  ]
};
```

How to get array of unique colors from an image? Take a look at:
- [`main-colors-picker`](https://www.npmjs.com/package/main-colors-picker)
- [`image-to-colors`](https://www.npmjs.com/package/image-to-colors)
 
## Installation
Just run:
```bash
npm install color-harmonizer
```

## Usage

It is pretty straightforward:
```js
import ImageToColors from "iamge-to-colors"; // Using image-to-colors to get all the colors from an image
import MainColorsPicker from "main-colors-picker"; // Using main-colors-picker to get an array of unique main colors
import ColorHarmonizer from "color-harmonizer";

const image = document.getElementById('myImage');
const colors = ImageToColors.get(image);
const mainColors = MainColorsPicker.get(colors);

const harmonizedColors = ColorHarmonizer.get(mainColors);
```

## Parameters

By default, the first color in the array of colors is taken as the main color. You can specify another main color by
 indicating its index in the array.

```js
const harmonizedColors = ColorHarmonizer.get(colors, 2); // This will the color in the index 2 (position 3)
```
