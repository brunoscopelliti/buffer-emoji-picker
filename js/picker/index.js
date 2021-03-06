
import delegate from 'delegate-handler';

import listen from 'listen-events';

const listenClicks = listen.bind(null, 'click');

import {
  genericWritingAreaSelector,
  editorInputSelector
} from 'selectors';

import {
  updateRecentlyUsedEmojis,
  clearHistoryAndUpdateView,
  storeEmojiAndUpdateView
} from 'picker/history/';

import {
  onQueryChange,
  resetQueryField
} from 'picker/query-box';

import {
  listenScroll,
  scrollTo
} from 'picker/scroll';

import updateValue from 'picker/textarea';

/**
 * @name getPlatformCssClass
 * @returns {String}
 */
const getPlatformCssClass = () => {
  if (navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i)){
    return 'is-apple';
  }
  return 'is-window';
};

/**
 * @name setupEmojiPicker
 * @param {HTMLElement} root 
 * @param {HTMLElement} button 
 */
const setupEmojiPicker = (root, button) => {

  updateRecentlyUsedEmojis(root);

  listenClicks(root, delegate(clearHistoryAndUpdateView, '.js-clear-latest-btn'));

  listen('keyup', root, delegate(onQueryChange, 'input[name="emoji-filter"]'));

  listenClicks(root, delegate(resetQueryField, '.js-clear-input-btn'));

  listenScroll(root);

  listenClicks(root, delegate(scrollTo, '.js-selectable-category'));


  const applyEmoji = (event) => {
    const box = event.currentTarget.closest(genericWritingAreaSelector);
    const textarea = box.querySelector(editorInputSelector);
    const emoji = event.target.textContent.trim();
    updateValue(textarea, emoji);
    storeEmojiAndUpdateView({ emoji: emoji, name: event.target.title }, event.currentTarget);
    destroyPicker();
    event.preventDefault();
    event.stopPropagation();
  };

  listenClicks(root, delegate(applyEmoji, '.js-clickable-emoji'));


  const tryDestroyPicker = (event) => {
    if (isClickOnPicker(event.target)){
      return event.stopPropagation();
    }
    destroyPicker();
  };

  const stopListenClicksOnBody = listenClicks(document.body, tryDestroyPicker);

  /**
   * @name isClickOnPicker
   * @param {HTMLElement} element 
   * 
   * @returns {Boolean}
   */
  const isClickOnPicker = (element) => {
    if (element == null){
      return false;
    }
    return element.matches('.chrome-ext-emoji-picker') || (element == document.body ? false : isClickOnPicker(element.parentElement));
  };

  /**
   * @name destroyPicker
   */
  const destroyPicker = () => {
    root.remove();
    stopListenClicksOnBody();
  };

  root.classList.add(getPlatformCssClass());
  button.before(root);
  setTimeout(() => root.focus(), 50);
};

export default setupEmojiPicker;
