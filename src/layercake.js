/* global MutationObserver */

window.layerCake = {
  zIndex: 0
}

window.addEventListener('load', () => {
  window.layerCake.zIndex = getHighestZIndex()
  observer.observe(document, { childList: true, subtree: true })
})

window.addEventListener('beforeunload', () => {
  observer.disconnect()
})

const observer = new MutationObserver(mutationList => {
  const highestZ = getHighestZIndex()

  for (const mutation of mutationList) {
    for (const child of mutation.addedNodes) {
      if (!child.hasAttribute('data-layercake-layer')) { return }

      let computedStyle = window.getComputedStyle(child)
      if (['absolute', 'fixed', 'relative'].includes(computedStyle.getPropertyValue('position')) &&
          computedStyle.getPropertyValue('display') !== 'none' &&
          computedStyle.getPropertyValue('visibility') !== 'hidden') {
        window.layerCake.zIndex = highestZ + 1
        child.style.zIndex = window.layerCake.zIndex
      }
    }

    for (const child of mutation.removedNodes) {
      if (!child.hasAttribute('data-layercake-layer')) { return }
      window.layerCake.zIndex = highestZ
    }
  }
})

// Helper functions
function isNumeric (val) {
  return !isNaN(parseFloat(val)) && isFinite(val)
}

function getHighestZIndex () {
  const queryObject = document.body.querySelectorAll('*')
  const childNodes = Object.keys(queryObject).map(key => queryObject[key])
  let highest = 0

  childNodes.forEach(node => {
    // Get the calculated CSS z-index value.
    let cssStyles = window.getComputedStyle(node)
    let cssZIndex = cssStyles ? cssStyles.getPropertyValue('z-index') : 0

    // Get any inline z-index value.
    let inlineZIndex = node.style ? node.style.zIndex : 0

    // Coerce the values as integers for comparison.
    cssZIndex = isNumeric(cssZIndex) ? parseInt(cssZIndex, 10) : 0
    inlineZIndex = isNumeric(inlineZIndex) ? parseInt(inlineZIndex, 10) : 0

    // Take the highest z-index for this element, whether inline or from CSS.
    let currentZIndex = cssZIndex > inlineZIndex ? cssZIndex : inlineZIndex

    if (currentZIndex > highest) {
      highest = currentZIndex
    }
  })

  return highest
}
