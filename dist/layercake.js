/**
  layercake-js: A deliciously automated z-index manager
  @version v1.0.1
  @link https://github.com/mcarlucci/layercake#readme
  @author Matt Carlucci <matthewcarlucci09@gmail.com> (mcarlucci.com)
  @license ISC
**/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (factory());
}(this, (function () { 'use strict';

  window.layerCake = {
    zindex: 0
  };
  window.addEventListener("load", function () {
    window.layerCake.zIndex = getHighestZIndex();
    observer.observe(document, {
      childList: true,
      subtree: true
    });
  });
  window.addEventListener("beforeunload", function () {
    observer.disconnect();
  });

  function isNumeric(val) {
    return !isNaN(parseFloat(val)) && isFinite(val);
  }

  function getHighestZIndex() {
    var queryObject = document.querySelectorAll("*");
    var childNodes = Object.keys(queryObject).map(function (key) {
      return queryObject[key];
    });
    var highest = 0;
    childNodes.forEach(function (node) {
      // Get the calculated CSS z-index value.
      var cssStyles = document.defaultView.getComputedStyle(node);
      var cssZIndex = cssStyles.getPropertyValue("z-index"); // Get any inline z-index value.

      var inlineZIndex = node.style.zIndex; // Coerce the values as integers for comparison.

      cssZIndex = isNumeric(cssZIndex) ? parseInt(cssZIndex, 10) : 0;
      inlineZIndex = isNumeric(inlineZIndex) ? parseInt(inlineZIndex, 10) : 0; // Take the highest z-index for this element, whether inline or from CSS.

      var currentZIndex = cssZIndex > inlineZIndex ? cssZIndex : inlineZIndex;

      if (currentZIndex > highest) {
        highest = currentZIndex;
      }
    });
    return highest;
  }

  var observer = new MutationObserver(function (mutationList) {
    var highestZ = getHighestZIndex();
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = mutationList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var mutation = _step.value;
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = mutation.addedNodes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var child = _step2.value;
            var computedStyle = document.defaultView.getComputedStyle(child);

            if (!child.hasAttribute("data-layercake-layer") || computedStyle.getPropertyValue("display") === 'none' || computedStyle.getPropertyValue("visibility") === 'hidden') {
              return;
            }

            if (highestZ > window.layerCake.zIndex) {
              window.layerCake.zIndex = highestZ + 1;
            } else {
              window.layerCake.zIndex++;
            }

            child.style.zIndex = window.layerCake.zIndex;
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = mutation.removedNodes[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var _child = _step3.value;

            if (!_child.hasAttribute("data-layercake-layer")) {
              return;
            }

            window.layerCake.zIndex--;
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
              _iterator3.return();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  });

})));
