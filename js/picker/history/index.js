
import {
  storeEmoji,
  clearHistory,
  readRecentlyUsedEmojis
} from 'picker/history/storage';

import tokenize from 'utils/tokenize';

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

export { updateRecentlyUsedEmojis };


/**
 * Clear the history, and refresh the 'recent emoji' view,
 * in the next free queue slot.
 * @name deferUpdateRecentlyUsedEmojis
 * @param {HTMLElement} root 
 */
const deferUpdateRecentlyUsedEmojis = (root) => setTimeout(updateRecentlyUsedEmojis, 0, root);


/**
 * Clear the history, and refresh the 'recent emoji' view.
 * @name clearHistoryAndUpdateView
 * @param {Event} event 
 */
const clearHistoryAndUpdateView = (event) => {
  clearHistory();
  deferUpdateRecentlyUsedEmojis(event.currentTarget);
};

export { clearHistoryAndUpdateView };


/**
 * Store a new emoji in the persisted history,
 * and refresh the 'recent emoji' view.
 * @name storeEmojiAndUpdateView
 * @param {Object} emoji 
 * @param {HTMLElement} root 
 */
const storeEmojiAndUpdateView = (emoji, root) => {
  storeEmoji(emoji);
  deferUpdateRecentlyUsedEmojis(root);
};

export { storeEmojiAndUpdateView };
