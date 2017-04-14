
import {
  writingAreaSelector,
  genericWritingAreaSelector,
  uploaderButtonSelector,
  dialogLayerClassName
} from 'selectors';

import createButton from 'picker';

import { pickerButtonSelector } from 'picker/selectors';


/**
 * Determines whether the given `element` already contains
 * the emoji picker button.
 * @name isPickerButtonReady
 * @param {HTMLElment} element
 * 
 * @returns {Boolean}
 */
const isPickerButtonReady = element => element.querySelector(pickerButtonSelector) != null;

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

  const editorContainerEl = parentEditor(directAncestorEl);
  const buttonEl = createButton(editorContainerEl);
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
 * ... so should always determine which is the context in which user
 * is using the picker.
 */


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
const parentEditor = parent.bind(null, genericWritingAreaSelector);




/**
 * Setup mutations observers
 */

const editorObserver = new MutationObserver(mutations => {
  const target = mutations[0].target;
  const pivotEl = target.querySelector(uploaderButtonSelector);
  tryInjectButton(pivotEl);
});

editorObserver.observe(document.querySelector(writingAreaSelector), { childList: true });



const layerObserver = new MutationObserver(mutations => {
  const layer = document.getElementsByClassName(dialogLayerClassName)[0];
  if (layer == null){
    return;
  }

  const pivotEl = layer.querySelector(uploaderButtonSelector);
  tryInjectButton(pivotEl);
});

layerObserver.observe(document.body, { childList: true });







// const injectTemplate = async (path) => {
//   const template = await fetch(path);

//   const templateEl = document.createElement('template');

//   templateEl.id = 'poc';
//   templateEl.innerHTML = await template.text();

//   document.body.appendChild(templateEl);
// };


// injectTemplate(chrome.runtime.getURL('templates/picker.html'));






