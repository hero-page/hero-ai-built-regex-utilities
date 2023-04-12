/* eslint-disable */ 

/**
 * Validates user input against a given pattern.
 *
 * @param {string} input - The user input to validate.
 * @param {string} pattern - The pattern to validate the input against.
 * @param {boolean} [caseSensitive = false] - Optional flag to specify if the validation should be case sensitive.
 * @return {boolean} True if the input matches the pattern, false otherwise.
 *
 * @example
 * // returns true
 * validateInput('abc123', '^[a-z]+[0-9]+$')
 *
 * // returns false
 * validateInput('ABC123', '^[a-z]+[0-9]+$', true)
 */
function validateInput(input, pattern, caseSensitive = false) {
    const regex = caseSensitive ? new RegExp(pattern) : new RegExp(pattern, "i");
    return regex.test(input);
}

module.exports = {
    validateInput
};