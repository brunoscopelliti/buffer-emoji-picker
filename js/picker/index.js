
import delegate from 'delegate-handler';

import listen from 'listen-events';

import {
  genericWritingAreaSelector,
  editorInputSelector
} from 'selectors';





const setupEmojiPicker = (root, button) => {

  // That's mostly an advanced POC

  listen('click', root, delegate(applyEmoji, '.js-clickable-emoji'));


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
