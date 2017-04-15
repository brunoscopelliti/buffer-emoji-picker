
import {
  writingAreaSelector,
  genericWritingAreaSelector,
  uploaderButtonSelector,
  dialogLayerClassName
} from 'selectors';

import createButton from 'picker';

import { pickerButtonSelector, pickerTemplateId } from 'picker/selectors';

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


// TODO should handle the case user does not land in the `Content` tab.
// Useful reference: http://stackoverflow.com/questions/13806307/how-to-insert-content-script-in-google-chrome-extension-when-page-was-changed-vi
const editor = document.querySelector(writingAreaSelector);

if (editor != null) {
  editorObserver.observe(document.querySelector(writingAreaSelector), { childList: true });
}



const layerObserver = new MutationObserver(mutations => {
  const layer = document.getElementsByClassName(dialogLayerClassName)[0];
  if (layer == null){
    return;
  }

  const pivotEl = layer.querySelector(uploaderButtonSelector);
  tryInjectButton(pivotEl);
});

layerObserver.observe(document.body, { childList: true });




/**
 * Inject templates for later usage
 */

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

const pickerTemplatePath = chrome.runtime.getURL('templates/picker.html');

// TODO handle loading failures

injectTemplate(pickerTemplatePath, pickerTemplateId);
