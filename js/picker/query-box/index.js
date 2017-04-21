
/**
 * Toggle visibility emojis on the base of the
 * user search keyword
 * @name filterEmojis
 * @private
 * @param {HTMLElement} root 
 * @param {String} query 
 */
const filterEmojis = (root, query) => {
  const rx = new RegExp(query, 'gi');
  [...root.querySelectorAll('.js-filterable-emoji')]
    .forEach((emoji) => emoji.classList.toggle('is-hidden', !rx.test(emoji.title)));
};

/**
 * Toggle visibility on the button that permits to
 * reset the query input field.
 * It should not be visible when the input is empty.
 * @name toggleResetFilterButton
 * @private
 * @param {Boolean} isActive 
 * @param {HTMLElement} root 
 */
const toggleResetFilterButton = (isActive, root) => {
  const button = root.querySelector('.js-clear-input-btn');
  button.classList.toggle('is-hidden', !isActive);
  button.setAttribute('aria-hidden', isActive);
};


/**
 * It's the handler invoked when the user enter a keyword
 * in the query input field.
 * It updates the view accordingly to the query.
 * @name onQueryChange
 * @param {Event} event 
 */
const onQueryChange = (event) => {
  const root = event.currentTarget;
  const query = event.target.value;
  filterEmojis(root, query);
  toggleResetFilterButton(query.length > 0, root);
};

export { onQueryChange };




/**
 * Hide the button that permits to reset the query input field.
 * It should not be visible when the input is empty.
 * @name toggleResetFilterButton
 * @private
 * @param {HTMLElement} root 
 */
const hideResetFilterButton = toggleResetFilterButton.bind(null, false);


/**
 * Reset the query input field, and updates the view
 * accordingly.
 * @name resetQueryField
 * @param {Event} event 
 */
const resetQueryField = (event) => {
  const root = event.currentTarget;
  const searchInput = root.querySelector('input[name="emoji-filter"]');

  searchInput.value = '';

  hideResetFilterButton(root);
  [...root.querySelectorAll('.js-filterable-emoji')]
    .forEach((emoji) => emoji.classList.remove('is-hidden'));
};

export { resetQueryField };
