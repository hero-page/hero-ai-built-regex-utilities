/* eslint-disable */ 

/**
 * Finds all occurrences of a pattern in a given text.
 *
 * @param {string} text - The text to search for the pattern.
 * @param {string} pattern - The pattern to search for in the text.
 * @param {boolean} [caseSensitive=false] - Whether to consider case sensitivity. Defaults to false.
 * @return {Object[]} An array of objects containing the match and its start and end positions in the text.
 * @example
 * // returns [{ match: 'test1', start: 0, end: 4 }, { match: 'Test2', start: 6, end: 10 }, { match: 'tEst3', start: 12, end: 16 }]
 * findPattern('test1 Test2 tEst3', 'test', true);
 */
function findPattern(text, pattern, caseSensitive = false) {
    const matches = [];
    const sourceText = caseSensitive ? text : text.toLowerCase();
    const searchPattern = caseSensitive ? pattern : pattern.toLowerCase();

    for (let i = 0; i < sourceText.length; i++) {
        const matchIndex = sourceText.indexOf(searchPattern, i);
        if (matchIndex !== -1) {
            matches.push({
                match: text.slice(matchIndex, matchIndex + searchPattern.length),
                start: matchIndex,
                end: matchIndex + searchPattern.length
            });

            i = matchIndex;
        } else {
            break;
        }
    }

    return matches;
}

module.exports = {
    findPattern
};