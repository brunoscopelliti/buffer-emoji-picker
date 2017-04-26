
import {
  writingAreaSelector,
  actionsButtonBoxSelector,
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
 * @param {HTMLElement} parentEl Button will be created as first child of this element
 */
const tryInjectButton = (parentEl) => {
  if (parentEl == null){
    return;
  }

  if (isPickerButtonReady(parentEl)){
    return;
  }

  const buttonEl = createButton();
  parentEl.prepend(buttonEl);
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
  const buttonBox = target.querySelector(actionsButtonBoxSelector);
  tryInjectButton(buttonBox);
});

editorObserver.observe(document.querySelector(writingAreaSelector) || document.body, { childList: true });



const layerObserver = new MutationObserver(() => {
  const layer = document.getElementsByClassName(dialogLayerClassName)[0];
  if (layer == null){
    return;
  }

  const buttonBox = layer.querySelector(actionsButtonBoxSelector);
  tryInjectButton(buttonBox);
});

layerObserver.observe(document.body, { childList: true });




/**
 * Inject templates for later usage
 */

const pickerTemplatePath = chrome.runtime.getURL('templates/picker.html');

// TODO handle loading failures

injectTemplate(pickerTemplatePath, pickerTemplateId);
