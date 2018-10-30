<p align="center">
  <img alt="Layercake.js" src="https://svgshare.com/i/95f.svg" />
</p>

----

**Layercake.js** is a zero dependency javascript plugin that automatically manages the `z-index` css property of the elements on your page. Layercake.js will automatically determine which element should have the higher z-index based on user interaction and increment and decrement it accordingly.

## Installation
Include the following script before the closing `</body>` tag:
```html
<script src="https://cdn.jsdelivr.net/npm/layercake-js/dist/layercake.min.js"></script>
```

## Usage
Add the `data-layercake-layer` data attribute, as well as a `position` property of `absolute`, `relative` or `fixed` to each html element you want to be managed by Layercake.js.

> Note: Elements with CSS computed properties of  `display: none;` or `visibility: hidden;` will not be tracked by Layercake.js.

Example:
```html
<style>
  #popup {
    position: absolute;
  }
</style>

<div id="popup" data-layercake-layer>
  Hi! I am a popup overlay managed by Layercake.js!
</div>
```
