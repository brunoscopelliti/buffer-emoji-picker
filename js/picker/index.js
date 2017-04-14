
import { pickerButtonClassName } from './selectors';
import { editorInputSelector } from 'selectors';

const createButton = (parentEl) => {
  const button = document.createElement('button');
  button.className = pickerButtonClassName;
  button.textContent = '😃';

  button.addEventListener('click', () => {
    // TODO: that's mostly a POC
    const input = parentEl.querySelector(editorInputSelector);
    input.value = input.value + ' 🚀';
    input.dispatchEvent(new KeyboardEvent('keyup', { bubbles: true, cancelable: true }));
  });

  return button;
};

export default createButton;
