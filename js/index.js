
import {
  writingAreaSelector,
  uploaderButtonSelector,
  dialogLayerClassName
} from 'selectors';

import createButton from 'picker/button';
import injectTemplate from 'inject-template';

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

  const buttonEl = createButton();
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

const editorObserver = new MutationObserver((mutations) => {
  const target = mutations[0].target;
  const pivotEl = target.querySelector(uploaderButtonSelector);
  tryInjectButton(pivotEl);
});

editorObserver.observe(document.querySelector(writingAreaSelector) || document.body, { childList: true });



const layerObserver = new MutationObserver(() => {
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

const pickerTemplatePath = chrome.runtime.getURL('templates/picker.html');

// TODO handle loading failures

injectTemplate(pickerTemplatePath, pickerTemplateId);
