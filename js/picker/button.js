
import setupEmojiPicker from 'picker/';

import { pickerButtonClassName, pickerTemplateId } from 'picker/selectors';

import { editorInputSelector } from 'selectors';

/**
 * @name deepClone
 * @private
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
    event.stopPropagation();
  });

  return button;
};

export default createButton;
