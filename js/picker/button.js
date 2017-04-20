
import setupEmojiPicker from './';

import { pickerButtonClassName, pickerTemplateId } from './selectors';

import { editorInputSelector } from 'selectors';

/**
 * @name deepClone
 *
 * @param {Element} node
 * @returns {Element}
 */
const deepClone = (node) => node.cloneNode(true);


const createButton = () => {
  const button = document.createElement('button');
  button.className = pickerButtonClassName;
  button.textContent = '😃';

  button.addEventListener('click', (event) => {
    const pickerTemplate = document.getElementById(pickerTemplateId);
    const root = deepClone(pickerTemplate.content).firstElementChild;

    setupEmojiPicker(root, event.target);
  });

  return button;
};

export default createButton;




