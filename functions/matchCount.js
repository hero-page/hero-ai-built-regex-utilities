/* eslint-disable */ 

/**
 * Counts the number of occurrences of a pattern in a given text.
 *
 * @param {string} text - The text to search in.
 * @param {string} pattern - The pattern to search for.
 * @param {boolean} [caseSensitive=false] - If true, the search will be case sensitive.
 * @return {number} The number of times the pattern appears in the text.
 * @example
 * // returns 3
 * matchCount('apple, APPLE, AppLe', 'apple', true);
 */
function matchCount(text, pattern, caseSensitive = false) {
    const regexFlags = caseSensitive ? "g" : "gi";
    const regexPattern = new RegExp(pattern, regexFlags);
    const matches = text.match(regexPattern);

    return matches ? matches.length : 0;
}

module.exports = {
    matchCount
};