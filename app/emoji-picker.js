/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return writingAreaSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return genericWritingAreaSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return editorInputId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return editorInputIdSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return uploaderButtonId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return uploaderButtonIdSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return dialogLayerClassName; });
/* unused harmony export dialogLayerClassSelector */

// ... Since I've no control over the HTML

const writingAreaSelector = '#overlay-wrapper:not(.ui-dialog-content) #sharer';
const genericWritingAreaSelector = '#sharer';

const editorInputId = 'composer';
const editorInputIdSelector = '#composer';

const uploaderButtonId = 'media-uploader';
const uploaderButtonIdSelector = '#media-uploader';

const dialogLayerClassName = 'ui-dialog';
const dialogLayerClassSelector = '.ui-dialog';





/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__selectors__ = __webpack_require__(0);

// I'm using Mutation Observers
// https://developers.google.com/web/updates/2012/02/Detect-DOM-changes-with-Mutation-Observers

// Emoji https://github.com/scotch-io/All-Github-Emoji-Icons





const observer = new MutationObserver(mutations => {
  const isComposing = document.getElementById(__WEBPACK_IMPORTED_MODULE_0__selectors__["a" /* editorInputId */]) != null;

  if (isComposing){
    const siblingRef = document.getElementById(__WEBPACK_IMPORTED_MODULE_0__selectors__["b" /* uploaderButtonId */]);

    const directAncestor = siblingRef.parentElement;

    if (isPickerButtonReady(directAncestor)){
      return;
    }


    const PARENT_SHARER = parentEditor(directAncestor);
    siblingRef.before(createButton(PARENT_SHARER));
  }
});

observer.observe(document.querySelector(__WEBPACK_IMPORTED_MODULE_0__selectors__["c" /* writingAreaSelector */]), { childList: true });






const layerObserver = new MutationObserver(mutations => {
  const layer = document.getElementsByClassName(__WEBPACK_IMPORTED_MODULE_0__selectors__["d" /* dialogLayerClassName */])[0];
  
  if (layer == null){
    return;
  }

  const siblingRef = layer.querySelector(__WEBPACK_IMPORTED_MODULE_0__selectors__["e" /* uploaderButtonIdSelector */]);

  if (siblingRef == null){
    return;
  }

  const directAncestor = siblingRef.parentElement;


  if (isPickerButtonReady(directAncestor)){
    return;
  }

  const PARENT_SHARER = parentEditor(directAncestor);


  siblingRef.before(createButton(PARENT_SHARER));
  
});

layerObserver.observe(document.body, { childList: true });








const pickerButtonClassName = 'chrome-ext-emoji-picker-button';
const pickerButtonSelector = '.' + pickerButtonClassName;





// I cannot safely rely on document.getElementById,
// because under some circumstances there are duplicated id in the page.


/**
 * Returns the first parent of the given `element` that
 * does match the query `selector`.
 * @name parent
 * @param {String} selector
 * @param {HTMLElement} element
 * 
 * @return {HTMLElement|null}
 */
const parent = (selector, element) => {
  if (element == null){
    return null;
  }
  if (element.matches(selector)){
    return element;
  }
  return parent(selector, element.parentElement);
}

/**
 * Returns the editing area element that contains the given
 * `element`.
 * @name parent
 * @param {HTMLElement} element
 * 
 * @return {HTMLElement|null}
 */
const parentEditor = parent.bind(null, __WEBPACK_IMPORTED_MODULE_0__selectors__["f" /* genericWritingAreaSelector */]);






const createButton = (parentEl, id) => {
  
  const button = document.createElement('button');
  button.className = pickerButtonClassName;
  button.textContent = '😃';

  button.addEventListener('click', () => {
    const input = parentEl.querySelector(__WEBPACK_IMPORTED_MODULE_0__selectors__["g" /* editorInputIdSelector */]);

    input.value = input.value + ' 🚀';
    input.dispatchEvent(new KeyboardEvent('keyup', { bubbles: true, cancelable: true }));
  });

  return button;
};


/**
 * Determines whether the given `element` already contains
 * the emoji picker button.
 * @name isPickerButtonReady
 * @param {HTMLElment} element
 * 
 * @returns {Boolean}
 */
const isPickerButtonReady = (element) => element.querySelector(pickerButtonSelector) != null;





// const injectTemplate = async (path) => {
//   const template = await fetch(path);

//   const templateEl = document.createElement('template');

//   templateEl.id = 'poc';
//   templateEl.innerHTML = await template.text();

//   document.body.appendChild(templateEl);
// };


// injectTemplate(chrome.runtime.getURL('templates/picker.html'));








/***/ })
/******/ ]);