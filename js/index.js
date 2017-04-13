
// I'm using Mutation Observers
// https://developers.google.com/web/updates/2012/02/Detect-DOM-changes-with-Mutation-Observers

// Emoji https://github.com/scotch-io/All-Github-Emoji-Icons

import {
  writingAreaSelector,
  genericWritingAreaSelector,
  editorInputId,
  editorInputIdSelector,
  uploaderButtonId,
  uploaderButtonIdSelector,
  dialogLayerClassName,
  dialogLayerClassSelector
} from './selectors';



const observer = new MutationObserver(mutations => {
  const isComposing = document.getElementById(editorInputId) != null;

  if (isComposing){
    const siblingRef = document.getElementById(uploaderButtonId);

    const directAncestor = siblingRef.parentElement;

    if (isPickerButtonReady(directAncestor)){
      return;
    }


    const PARENT_SHARER = parentEditor(directAncestor);
    siblingRef.before(createButton(PARENT_SHARER));
  }
});

observer.observe(document.querySelector(writingAreaSelector), { childList: true });






const layerObserver = new MutationObserver(mutations => {
  const layer = document.getElementsByClassName(dialogLayerClassName)[0];
  
  if (layer == null){
    return;
  }

  const siblingRef = layer.querySelector(uploaderButtonIdSelector);

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
const parentEditor = parent.bind(null, genericWritingAreaSelector);






const createButton = (parentEl, id) => {
  
  const button = document.createElement('button');
  button.className = pickerButtonClassName;
  button.textContent = '😃';

  button.addEventListener('click', () => {
    const input = parentEl.querySelector(editorInputIdSelector);

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






