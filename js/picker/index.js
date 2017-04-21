
import delegate from 'delegate-handler';

import listen from 'listen-events';

import {
  genericWritingAreaSelector,
  editorInputSelector
} from 'selectors';

import {
  onQueryChange,
  resetQueryField
} from 'picker/query-box';



const listenClicks = listen.bind(null, 'click');

/**
 * @name setupEmojiPicker
 * @param {HTMLElement} root 
 * @param {HTMLElement} button 
 */
const setupEmojiPicker = (root, button) => {





  // That's mostly an advanced POC

  listenClicks(root, delegate(applyEmoji, '.js-clickable-emoji'));



  listen('keyup', root, delegate(onQueryChange, 'input[name="emoji-filter"]'));

  listenClicks(root, delegate(resetQueryField, '.js-clear-input-btn'));




  button.before(root);

};

export default setupEmojiPicker;




const applyEmoji = (event) => {
  const box = event.currentTarget.closest(genericWritingAreaSelector);
  const textarea = box.querySelector(editorInputSelector);
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
