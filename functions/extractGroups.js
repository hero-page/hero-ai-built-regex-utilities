/* eslint-disable */ 

/**
 * Extracts groups from a given text based on a pattern.
 *
 * @param {string} text - The input text to extract groups from.
 * @param {string} pattern - The pattern to use for matching groups.
 * @param {boolean} [caseSensitive=false] - Whether or not the pattern should be case-sensitive.
 * @return {string[][]} An array of arrays containing the matched groups.
 *
 * @example
 * // Returns [['01', '01'], ['02', '02']]
 * extractGroups('2021-01-01 and 2022-02-02', '\\d{4}-(\\d{2})-(\\d{2})');
 */
function extractGroups(text, pattern, caseSensitive = false) {
    const regexFlags = caseSensitive ? 'g' : 'gi';
    const regex = new RegExp(pattern, regexFlags);
    const groups = [];

    let match;
    while ((match = regex.exec(text)) !== null) {
        const groupMatches = match.slice(1);
        groups.push(groupMatches);
    }

    return groups;
}

module.exports = {
    extractGroups
};