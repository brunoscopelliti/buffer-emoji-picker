
/**
 * Limits the number of recent entries
 * in local storage.
 */
const limit = 12;


/**
 * Retrieves the list of the latest used emojis.
 * @name readRecentlyUsedEmojis
 * @returns {Array}
 */
const readRecentlyUsedEmojis = () => {
  const storage = localStorage.getItem('BEP_latest-emoji');
  return storage != null ? JSON.parse(storage) : [];
};

export { readRecentlyUsedEmojis };



/**
 * Memorize the `emoji` it receives as input parameter
 * in the localstorage.
 * The key is `BEP_latest-emoji`.
 * @name storeEmoji
 * @param {Object} emoji 
 */
const storeEmoji = (emoji) => {
  const storage = localStorage.getItem('BEP_latest-emoji');
  const list = storage != null ? JSON.parse(storage) : [];

  const index = list.findIndex(x => x.name == emoji.name);

  if (index >= 0){
    list.splice(index, 1);
  }

  list.unshift(emoji);

  const latest = list.slice(0, limit);

  localStorage.setItem('BEP_latest-emoji', JSON.stringify(latest));
};

export { storeEmoji };



/**
 * Delete data about used emoji from local storage.
 * @name clearHistory
 */
const clearHistory = () => localStorage.removeItem('BEP_latest-emoji');

export { clearHistory };
