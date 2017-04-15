
import { pickerButtonClassName } from './selectors';
import { editorInputSelector } from 'selectors';

const createButton = (parentEl) => {
  const button = document.createElement('button');
  button.className = pickerButtonClassName;
  button.textContent = '😃';

  button.addEventListener('click', () => {
    // TODO: that's mostly a POC
    updateValue(parentEl.querySelector(editorInputSelector), '🚀');
  });

  return button;
};

export default createButton;


const updateValue = (input, emoji) => {
    input.value = format(input.value, input.selectionStart, emoji);
    input.dispatchEvent(new Event('keyup', { bubbles: true, cancelable: true }));
};

const format = (str, insertAt, emoji) => 
    str.substring(0, insertAt) + emoji + str.substring(insertAt);

