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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return writingAreaSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return genericWritingAreaSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return editorInputSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return uploaderButtonSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return dialogLayerClassName; });

// Since I've no control over the HTML
// ... at least want to change DOM ref in the least painful way.

const writingAreaSelector = '#overlay-wrapper:not(.ui-dialog-content) #sharer';
const genericWritingAreaSelector = '#sharer';
const editorInputSelector = '#composer';
const uploaderButtonSelector = '#media-uploader';
const dialogLayerClassName = 'ui-dialog';





/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return pickerButtonClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return pickerButtonSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return pickerTemplateId; });
/* unused harmony export pickerTemplateSelector */

const pickerButtonClassName = 'chrome-ext-emoji-picker-button';
const pickerButtonSelector = '.' + pickerButtonClassName;

const pickerTemplateId = 'chrome-ext-emoji-picker-template';
const pickerTemplateSelector = '#' + pickerTemplateId;



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/**
 * Inject into the main page a template,
 * fetching its content from the provided `path`.
 * @name injectTemplate
 * @param {String} path
 * @param {String} templateId
 * 
 * @return {Promise<undefined>}
 */
const injectTemplate = async (path, templateId) => {
  const template = await fetch(path);

  const templateEl = document.createElement('template');
  templateEl.id = templateId;
  templateEl.innerHTML = await template.text();

  document.body.appendChild(templateEl);
};

/* harmony default export */ __webpack_exports__["a"] = (injectTemplate);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0____ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selectors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_selectors__ = __webpack_require__(0);







/**
 * @name deepClone
 *
 * @param {Element} node
 * @returns {Element}
 */
const deepClone = (node) => node.cloneNode(true);


const createButton = () => {
  const button = document.createElement('button');
  button.className = __WEBPACK_IMPORTED_MODULE_1__selectors__["c" /* pickerButtonClassName */];
  button.textContent = '😃';

  button.addEventListener('click', (event) => {
    const pickerTemplate = document.getElementById(__WEBPACK_IMPORTED_MODULE_1__selectors__["b" /* pickerTemplateId */]);
    const root = deepClone(pickerTemplate.content).firstElementChild;

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0____["a" /* default */])(root, event.target);
  });

  return button;
};

/* harmony default export */ __webpack_exports__["a"] = (createButton);






/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_selectors__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_picker_button__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_inject_template__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_picker_selectors__ = __webpack_require__(1);








/**
 * Determines whether the given `element` already contains
 * the emoji picker button.
 * @name isPickerButtonReady
 * @param {HTMLElment} element
 * 
 * @returns {Boolean}
 */
const isPickerButtonReady = element => element.querySelector(__WEBPACK_IMPORTED_MODULE_3_picker_selectors__["a" /* pickerButtonSelector */]) != null;

/**
 * Inject the emoji picker button in the page.
 * @name tryInjectButton
 * @param {HTMLElement} pivotEl Button will be created just before this element
 */
const tryInjectButton = (pivotEl) => {
  if (pivotEl == null){
    return;
  }

  const directAncestorEl = pivotEl.parentElement;

  if (isPickerButtonReady(directAncestorEl)){
    return;
  }

  const buttonEl = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_picker_button__["a" /* default */])();
  pivotEl.before(buttonEl);
};



/**
 * Since DOM changes out of my control,
 * should use Mutation Observers (http://bit.ly/2o8ZjVd)
 * to assure that when the user enters in editing mode
 * the picker button is injected.
 */


/**
 * Also under some circumstances there're duplicated id in the page.
 * For instance, it happens when I open an already scheduled tweet,
 * in editing mode.
 * So I cannot safely rely on document.getElementById().
 * 
 * That's just to explain the diffuse usage of method such as
 * document.querySelector, or Element#closest, that might otherwise
 * seems strange.
 */



/**
 * Setup mutations observers
 */

const editorObserver = new MutationObserver(mutations => {
  const target = mutations[0].target;
  const pivotEl = target.querySelector(__WEBPACK_IMPORTED_MODULE_0_selectors__["a" /* uploaderButtonSelector */]);
  tryInjectButton(pivotEl);
});

editorObserver.observe(document.querySelector(__WEBPACK_IMPORTED_MODULE_0_selectors__["b" /* writingAreaSelector */]) || document.body, { childList: true });



const layerObserver = new MutationObserver(mutations => {
  const layer = document.getElementsByClassName(__WEBPACK_IMPORTED_MODULE_0_selectors__["c" /* dialogLayerClassName */])[0];
  if (layer == null){
    return;
  }

  const pivotEl = layer.querySelector(__WEBPACK_IMPORTED_MODULE_0_selectors__["a" /* uploaderButtonSelector */]);
  tryInjectButton(pivotEl);
});

layerObserver.observe(document.body, { childList: true });




/**
 * Inject templates for later usage
 */

const pickerTemplatePath = chrome.runtime.getURL('templates/picker.html');

// TODO handle loading failures

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_inject_template__["a" /* default */])(pickerTemplatePath, __WEBPACK_IMPORTED_MODULE_3_picker_selectors__["b" /* pickerTemplateId */]);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_delegate_handler__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_listen_events__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_selectors__ = __webpack_require__(0);











const setupEmojiPicker = (root, button) => {

  // That's mostly an advanced POC

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_listen_events__["a" /* default */])('click', root, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_delegate_handler__["a" /* default */])(applyEmoji, '.js-clickable-emoji'));


  button.before(root);

};

/* harmony default export */ __webpack_exports__["a"] = (setupEmojiPicker);




const applyEmoji = (event) => {
  const box = event.currentTarget.closest(__WEBPACK_IMPORTED_MODULE_2_selectors__["d" /* genericWritingAreaSelector */]);
  const textarea = box.querySelector(__WEBPACK_IMPORTED_MODULE_2_selectors__["e" /* editorInputSelector */]);
  const emoji = event.target.textContent.trim();
  updateValue(textarea, emoji)
};

const updateValue = (input, emoji) => {
    input.value = format(input.value, input.selectionStart, emoji);
    input.dispatchEvent(new Event('keyup', { bubbles: true, cancelable: true }));
    focus(input);
};

const format = (str, insertAt, emoji) =>
    str.substring(0, insertAt) + emoji + str.substring(insertAt);

const focus = (input) =>
  setTimeout(() => input.focus(), 100);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/**
 * Assure that the provided function, `fn`,
 * is executed only when its wrapping function is called on a target that matches the `selector`.
 *
 * @name delegate
 * @param {function} fn
 * @param {string} selector
 * 
 * @returns {function}
 */
const delegate = (fn, selector) => {
  return function handler(event) {
    const matchingEl = matches(event.target, selector, this);
    if(matchingEl != null){
      fn.call(matchingEl, event);
    }
  };
};

/* harmony default export */ __webpack_exports__["a"] = (delegate);

/**
 * @name matches
 * @private
 */
const matches = (target, selector, boundElement) => {
  if (target === boundElement){
    return null;
  }
  if (target.matches(selector)){
    return target;
  }
  if (target.parentNode){
    return matches(target.parentNode, selector, boundElement);
  }
  return null;
};


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/**
 * Register event listener.
 * @name listen
 * 
 * @param {String} eventName
 * @param {Element} target
 * @param {Function} fn
 * @param {Object} options
 */
const listen = (eventName, target, fn, options = {}) => {

  const { useCapture = false } = options;

  const cancelListener = () => {
    target.removeEventListener(eventName, handler, useCapture);
  };

  const handler = options.once ? once(fn, cancelListener) : fn;

  target.addEventListener(eventName, handler, useCapture);

  return cancelListener;
};

/* harmony default export */ __webpack_exports__["a"] = (listen);

/**
 * @name once
 * @private
 */
function once(fn, cancel) {
  return function(...args) {
    cancel();
    fn.apply(this, args);
  }
};


/***/ })
/******/ ]);