<p align="center">
  <img alt="Layercake.js" src="https://svgshare.com/i/95f.svg" />
</p>

----

<p align="center">
  <img alt="npm version" src="https://img.shields.io/npm/v/layercake-js.svg?style=flat-square" />
  <img alt="minified size" src="https://img.shields.io/bundlephobia/min/layercake-js.svg?style=flat-square" />
  <img alt="gzipped size" src="https://img.shields.io/bundlephobia/minzip/layercake-js.svg?style=flat-square" />
  <img alt="hits per month" src="https://data.jsdelivr.com/v1/package/npm/layercake-js/badge" />
  <img alt="gzipped size" src="https://img.shields.io/npm/l/layercake-js.svg?style=flat-square" />
  <a href="https://twitter.com/intent/tweet?text=Layercake.js%20-%20an%20automated%20z-index%20manager%20%0A&url=https://mcarlucci.github.io/layercake&via=mcarlucci515&hashtags=javascript,css,zindex" target="_blank"><img alt="share on twitter" src="https://img.shields.io/twitter/url/http/shields.io.svg?style=social" /></a>
</p>

----

<p align="center">
  <h3>Demo</h3>
  <a href="https://codepen.io/mcarlucci-1471848194/pen/gBKMOX" target="_blank">
    <img alt="Layercake.js" src="https://media.giphy.com/media/9xcpU8tX4YE1d0GHyc/giphy.gif" />
  </a>
</p>

**Layercake.js** is a zero dependency javascript plugin that automatically manages the z-index css property of the elements on your page based on user interaction (mutations to the DOM). Layercake.js will determine which element should have the higher z-index and increment/decrement it accordingly.

## Installation
Include the following script before the closing `</body>` tag:
```html
<script src="https://cdn.jsdelivr.net/npm/layercake-js@latest/dist/layercake.min.js"></script>
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
