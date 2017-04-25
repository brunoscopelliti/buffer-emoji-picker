
/**
 * Update the value of the input parameter.
 * @name updateValue
 * @param {HTMLElement} input 
 * @param {String} emoji 
 */
const updateValue = (input, emoji) => {
  input.value = format(input.value, input.selectionStart, emoji);
  input.dispatchEvent(new Event('keyup', { bubbles: true, cancelable: true }));
  focus(input);
};

export default updateValue;


/**
 * Add the `emoji` in the input `str`.
 * @name format
 * @param {String} str 
 * @param {Number} insertAt 
 * @param {String} emoji 
 * 
 * @returns {String}
 */
const format = (str, insertAt, emoji) =>
  str.substring(0, insertAt) + emoji + str.substring(insertAt);

/**
 * Trigger focus on the `input` element.
 * @name focus
 * @param {HTMLElement} input 
 */
const focus = (input) =>
  setTimeout(() => input.focus(), 100);
