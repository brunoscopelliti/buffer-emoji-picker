
import delegate from 'delegate-handler';

import listen from 'listen-events';

import {
  genericWritingAreaSelector,
  editorInputSelector
} from 'selectors';

import tokenize from 'utils/tokenize';

import {
  storeEmoji,
  readRecentlyUsedEmojis,
  clearHistory
} from 'picker/history';

import {
  onQueryChange,
  resetQueryField
} from 'picker/query-box';

import {
  listenScroll,
  scrollTo
} from 'picker/scroll';



const listenClicks = listen.bind(null, 'click');




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


  // scrollable

  listenScroll(root);

  listenClicks(root, delegate(scrollTo, '.js-selectable-category'));


  listenClicks(root, delegate(applyEmoji, '.js-clickable-emoji'));



  // TODO listen click on body, and remove picker

  button.before(root);
};

export default setupEmojiPicker;




const applyEmoji = (event) => {
  const box = event.currentTarget.closest(genericWritingAreaSelector);
  const textarea = box.querySelector(editorInputSelector);
  const emoji = event.target.textContent.trim();
  updateValue(textarea, emoji);
  storeEmojiAndUpdateView({ emoji: emoji, name: event.target.title }, event.currentTarget);
  event.preventDefault();
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







/**
 * It updates the view, so that it always the latest used emojis.
 * @name updateRecentlyUsedEmojis
 * @param {HTMLElement} root 
 */
const updateRecentlyUsedEmojis = (root) => {
  const latestEmojis = readRecentlyUsedEmojis();

  const hasRecentlyUsedEmojis = latestEmojis.length > 0;

  root.querySelector('.js-clear-latest-btn').classList.toggle('is-hidden', !hasRecentlyUsedEmojis);

  root.querySelector('.js-latest-target').innerHTML = hasRecentlyUsedEmojis ?
    latestEmojis
      .map(({ emoji, name }) => `<a class='emoji js-clickable-emoji' href='#${tokenize(name)}-emoji' title='${name}'>${emoji}</a>`)
      .join('') :
    '<span class="no-emojis">Nothing yet.</span>';
}

/**
 * Clear the history, and refresh the 'recent emoji' view.
 * @name clearHistoryAndUpdateView
 * @param {Event} event 
 */
const clearHistoryAndUpdateView = (event) => {
  clearHistory();
  updateRecentlyUsedEmojis(event.currentTarget);
};

/**
 * Store a new emoji in the persisted history,
 * and refresh the 'recent emoji' view.
 * @name storeEmojiAndUpdateView
 * @param {Object} emoji 
 * @param {HTMLElement} root 
 */
const storeEmojiAndUpdateView = (emoji, root) => {
  storeEmoji(emoji);
  updateRecentlyUsedEmojis(root);
};
