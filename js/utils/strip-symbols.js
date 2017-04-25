
/**
 * Removes symbols character in the given input string.
 * Currently is only replaces "&".
 * @name stripSymbols
 * @param {String} str 
 * 
 * @returns {String}
 */
const stripSymbols = (str) => str.replace(/[&]/g, '');

export default stripSymbols;
