/* eslint-disable */ 

/**
 * Splits a given text into an array of strings based on a pattern.
 *
 * @param {string} text - The text to split.
 * @param {string} pattern - The pattern to split the text by.
 * @param {boolean} [caseSensitive=false] - Whether to consider case sensitivity or not.
 * @return {string[]} An array of strings split by the pattern.
 * @example
 * // Returns ['apple', 'APPLE', 'AppLe']
 * splitByPattern('apple#123#APPLE#456#AppLe', '#\\d+#');
 */
function splitByPattern(text, pattern, caseSensitive = false) {
    const regex = new RegExp(pattern, caseSensitive ? '' : 'i');
    const result = [];
    let split;

    while ((split = regex.exec(text)) !== null) {
        let textPart = text.slice(0, split.index);
        if (textPart) {
            result.push(textPart);
        }
        text = text.slice(split.index + split[0].length);
    }
    if (text) {
        result.push(text);
    }

    return result;
}

module.exports = {
    splitByPattern
};