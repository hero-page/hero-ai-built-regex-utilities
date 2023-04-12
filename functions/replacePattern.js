/* eslint-disable */ 

/**
 * Replaces all occurrences of a pattern in a given text with the specified replacement.
 *
 * @param {string} text - The text to search for the pattern.
 * @param {string} pattern - The pattern to search for in the text.
 * @param {string} replacement - The replacement string for the pattern.
 * @param {boolean} [caseSensitive=false] - If true, perform the search as case sensitive.
 * @return {string} The modified text with all occurrences of the pattern replaced.
 * @example
 * // Returns 'Python is good, PythonScript is better'.
 * replacePattern('Java is good, JavaScript is better', 'Java', 'Python')
 */
function replacePattern(text, pattern, replacement, caseSensitive = false) {
    if (!caseSensitive) {
        pattern = pattern.toLowerCase();
        const patternRegex = new RegExp(escapeRegExp(pattern), "gi");
        return text.replace(patternRegex, (match) => {
            const firstChar = match.charAt(0);
            return firstChar === firstChar.toUpperCase()
                ? capitalizeFirstLetter(replacement)
                : replacement;
        });
    } else {
        const patternRegex = new RegExp(escapeRegExp(pattern), "g");
        return text.replace(patternRegex, replacement);
    }
}

/**
 * Escapes special characters in a string for use in a regular expression.
 *
 * @param {string} string - The string to escape.
 * @return {string} The escaped string.
 */
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Capitalizes the first character of a string.
 *
 * @param {string} string - The string to capitalize.
 * @return {string} The string with its first character capitalized.
 */
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = {
    replacePattern
};