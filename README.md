<p align="center">
  <img alt="Layercake.js" src="./layercake.svg" />
</p>

----

**Layercake.js** is a zero dependency javascript plugin that automatically manages the z-index of elements on your page! Layercake.js will automatically determine which element should have the higher z-index based on user interaction.

## Installation
Include the following script before the closing `</body>` tag:
```html
<script src="https://cdn.jsdelivr.net/npm/layercake-js@1.0.0/layercake.min.js"></script>
```

## Usage
Add the `data-layercake-layer` html attribute to each html element you want to be managed by Layercake. Ex:

```html
<div id="popup" data-layercake-layer>
  Hi! I am a popup overlay managed by Layercake!
</div>
```
