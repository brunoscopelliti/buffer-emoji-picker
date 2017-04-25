
/**
 * Replaces spaces character in the given input string
 * with a single dash.
 * @name collapseWhiteSpaces
 * @param {String} str 
 * 
 * @returns {String}
 */
const collapseWhiteSpaces = (str) => str.replace(/\s+/g, '-');

export default collapseWhiteSpaces;
