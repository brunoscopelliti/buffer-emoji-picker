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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0____ = __webpack_require__(6);
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return readRecentlyUsedEmojis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return storeEmoji; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return clearHistory; });

/**
 * Limits the number of recent entries
 * in local storage.
 */
const limit = 12;


/**
 * Retrieves the list of the latest used emojis.
 * @name readRecentlyUsedEmojis
 * @returns {Array}
 */
const readRecentlyUsedEmojis = () => {
  const storage = localStorage.getItem('BEP_latest-emoji');
  return storage != null ? JSON.parse(storage) : [];
};





/**
 * Memorize the `emoji` it receives as input parameter
 * in the localstorage.
 * The key is `BEP_latest-emoji`.
 * @name storeEmoji
 * @param {Object} emoji 
 */
const storeEmoji = (emoji) => {
  const storage = localStorage.getItem('BEP_latest-emoji');
  const list = storage != null ? JSON.parse(storage) : [];

  const index = list.findIndex(x => x.name == emoji.name);

  if (index >= 0){
    list.splice(index, 1);
  }

  list.unshift(emoji);

  const latest = list.slice(0, limit);

  localStorage.setItem('BEP_latest-emoji', JSON.stringify(latest));
};





/**
 * Delete data about used emoji from local storage.
 * @name clearHistory
 */
const clearHistory = () => localStorage.removeItem('BEP_latest-emoji');




/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_delegate_handler__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_listen_events__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_selectors__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_utils_tokenize__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_picker_history__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_picker_query_box__ = __webpack_require__(7);
















const listenClicks = __WEBPACK_IMPORTED_MODULE_1_listen_events__["a" /* default */].bind(null, 'click');


const updateRecentlyUsedEmojis = (root) => {
  const latestEmojis = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_picker_history__["a" /* readRecentlyUsedEmojis */])();

  const hasRecentlyUsedEmojis = latestEmojis.length > 0;

  root.querySelector('.js-clear-latest-btn').classList.toggle('is-hidden', !hasRecentlyUsedEmojis);

  root.querySelector('.js-latest-target').innerHTML = hasRecentlyUsedEmojis ?
    latestEmojis
      .map(({ emoji, name }) => `<a class='emoji js-clickable-emoji' href='#${__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_utils_tokenize__["a" /* default */])(name)}-emoji' title='${name}'>${emoji}</a>`)
      .join('') :
    '<span class="no-emojis">Nothing yet.</span>';
}

const clearHistoryAndUpdateView = (event) => {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_picker_history__["b" /* clearHistory */])();
  updateRecentlyUsedEmojis(event.currentTarget);
};

const storeEmojiAndUpdateView = (emoji, root) => {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_picker_history__["c" /* storeEmoji */])(emoji);
  updateRecentlyUsedEmojis(root);
};

/**
 * @name setupEmojiPicker
 * @param {HTMLElement} root 
 * @param {HTMLElement} button 
 */
const setupEmojiPicker = (root, button) => {

  updateRecentlyUsedEmojis(root);

  // TODO empty .js-latest-target
  // TODO clear button should be visible only when history is not empty
  listenClicks(root, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_delegate_handler__["a" /* default */])(clearHistoryAndUpdateView, '.js-clear-latest-btn'));


  // That's mostly an advanced POC

  listenClicks(root, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_delegate_handler__["a" /* default */])(applyEmoji, '.js-clickable-emoji'));



  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_listen_events__["a" /* default */])('keyup', root, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_delegate_handler__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_5_picker_query_box__["a" /* onQueryChange */], 'input[name="emoji-filter"]'));

  listenClicks(root, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_delegate_handler__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_5_picker_query_box__["b" /* resetQueryField */], '.js-clear-input-btn'));




  button.before(root);

};

/* harmony default export */ __webpack_exports__["a"] = (setupEmojiPicker);




const applyEmoji = (event) => {
  const box = event.currentTarget.closest(__WEBPACK_IMPORTED_MODULE_2_selectors__["d" /* genericWritingAreaSelector */]);
  const textarea = box.querySelector(__WEBPACK_IMPORTED_MODULE_2_selectors__["e" /* editorInputSelector */]);
  const emoji = event.target.textContent.trim();
  updateValue(textarea, emoji);
  storeEmojiAndUpdateView({ emoji: emoji, name: event.target.title }, event.currentTarget);
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
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return onQueryChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return resetQueryField; });

/**
 * Toggle visibility emojis on the base of the
 * user search keyword
 * @name filterEmojis
 * @private
 * @param {HTMLElement} root 
 * @param {String} query 
 */
const filterEmojis = (root, query) => {
  const rx = new RegExp(query, 'gi');
  [...root.querySelectorAll('.js-filterable-emoji')]
    .forEach((emoji) => emoji.classList.toggle('is-hidden', !rx.test(emoji.title)));
};

/**
 * Toggle visibility on the button that permits to
 * reset the query input field.
 * It should not be visible when the input is empty.
 * @name toggleResetFilterButton
 * @private
 * @param {Boolean} isActive 
 * @param {HTMLElement} root 
 */
const toggleResetFilterButton = (isActive, root) => {
  const button = root.querySelector('.js-clear-input-btn');
  button.classList.toggle('is-hidden', !isActive);
  button.setAttribute('aria-hidden', isActive);
};


/**
 * It's the handler invoked when the user enter a keyword
 * in the query input field.
 * It updates the view accordingly to the query.
 * @name onQueryChange
 * @param {Event} event 
 */
const onQueryChange = (event) => {
  const root = event.currentTarget;
  const query = event.target.value;
  filterEmojis(root, query);
  toggleResetFilterButton(query.length > 0, root);
};






/**
 * Hide the button that permits to reset the query input field.
 * It should not be visible when the input is empty.
 * @name toggleResetFilterButton
 * @private
 * @param {HTMLElement} root 
 */
const hideResetFilterButton = toggleResetFilterButton.bind(null, false);


/**
 * Reset the query input field, and updates the view
 * accordingly.
 * @name resetQueryField
 * @param {Event} event 
 */
const resetQueryField = (event) => {
  const root = event.currentTarget;
  const searchInput = root.querySelector('input[name="emoji-filter"]');

  searchInput.value = '';

  hideResetFilterButton(root);
  [...root.querySelectorAll('.js-filterable-emoji')]
    .forEach((emoji) => emoji.classList.remove('is-hidden'));
};




/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

const collapseWhiteSpaces = (str) => str.replace(/\s+/g, '-');

/* harmony default export */ __webpack_exports__["a"] = (collapseWhiteSpaces);


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

const compose =
  (...fns) => 
    (result) => {
      let list = fns.slice();
      while (list.length > 0) {
        result = list.pop()( result );
      }
      return result;
    };

/* harmony default export */ __webpack_exports__["a"] = (compose);


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

const lowercase = (str) => str.toLowerCase();

/* harmony default export */ __webpack_exports__["a"] = (lowercase);


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

const stripSymbols = (str) => str.replace(/[&]/g, '');

/* harmony default export */ __webpack_exports__["a"] = (stripSymbols);


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_utils_compose__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_utils_lowercase__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_utils_collapse_white_spaces__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_utils_strip_symbols__ = __webpack_require__(11);







const tokenize = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_utils_compose__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1_utils_lowercase__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2_utils_collapse_white_spaces__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3_utils_strip_symbols__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (tokenize);


/***/ }),
/* 13 */
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
/* 14 */
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