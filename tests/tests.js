// Tests
QUnit.test('add layers', function (assert) {
  var done = assert.async()
  addLayers(4)
  setTimeout(function () {
    assert.ok(window.layerCake.zIndex === 103, 'Top layer should have z-index: 103')
    done()
  }, 0)
})

QUnit.test('remove layer', function (assert) {
  var done = assert.async()
  var singleLayer = Array.from(document.getElementsByClassName('layer')).slice(-1).pop()
  singleLayer.addEventListener('click', function () {
    assert.ok(window.layerCake.zIndex === 103, 'Top layer should have z-index: 103')
    done()
  })
  singleLayer.click()
})

// Helper functions
function getNewLayer (id) {
  const randomInt = getRandomInt(0, 200)
  var newEl = document.createElement('div')
  if (id) {
    newEl.id = 'layer_' + id
  }
  newEl.className = 'layer'
  newEl.style.top = randomInt + 'px'
  newEl.style.left = randomInt + 'px'
  newEl.setAttribute('data-layercake-layer', '')
  newEl.addEventListener('click', function (e) {
    e.target.remove()
  })
  return newEl
}

function addLayers (numOfLayers) {
  for (i = 0; i < numOfLayers; i++) {
    setTimeout(function () {
      document.body.getElementsByTagName('section')[0].appendChild(getNewLayer(getRandomInt(0, 1000)))
    }, 0)
  }
}

function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
