/* eslint-disable */ 


        const {extractGroups} = require("../functions/extractGroups"); 
        


        const fs = require("fs"); 

function generateImageBadgeURL(label, value, passed) {
 return `https://img.shields.io/badge/${encodeURIComponent(label)}-${value}-${passed === 0 ? '13b285' : 'ff69b4'}`;}

function generateTestBadge(functionName, numberOfPassed, numberOfFailed) {
 const url = generateImageBadgeURL(functionName + '()', encodeURIComponent(numberOfPassed + ' passed, ' + numberOfFailed + ' failed.'), numberOfFailed);

 return '\n\n### Tests for ' + functionName + '\n\n' + '![' + functionName + '](' + url + ')';}

function addToReadme(str) {fs.appendFile('./README.md', str, function (err) {if (err) throw err;console.log('String added to the file');});}/**
 * Test function for extractGroups
 */
function testExtractGroups() {
    let number_of_tests_passed = 0;
    let number_of_tests_failed = 0;
    const name_of_function = "extractGroups";

    try {
        const result = extractGroups('2015-03-25 or 2020-10-05, but not 2025-99-99', '\\d{4}-(\\d{2})-(\\d{2})');
        const expectedResult = [['03', '25'], ['10', '05']];
        if (JSON.stringify(result) === JSON.stringify(expectedResult)) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    try {
        const result = extractGroups('Apple and APPLE are the same', 'apple', false);
        const expectedResult = [['Apple'], ['APPLE']];
        if (JSON.stringify(result) === JSON.stringify(expectedResult)) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    try {
        const result = extractGroups('Bob likes to eat apples', 'apple', true);
        const expectedResult = [['apple']];
        if (JSON.stringify(result) === JSON.stringify(expectedResult)) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    addToReadme(generateTestBadge(name_of_function, number_of_tests_passed, number_of_tests_failed));
}

module.exports = {
    testExtractGroups
};