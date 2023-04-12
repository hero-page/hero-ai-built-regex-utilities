/* eslint-disable */ 


        const {matchCount} = require("../functions/matchCount"); 
        


        const fs = require("fs"); 

function generateImageBadgeURL(label, value, passed) {
 return `https://img.shields.io/badge/${encodeURIComponent(label)}-${value}-${passed === 0 ? '13b285' : 'ff69b4'}`;}

function generateTestBadge(functionName, numberOfPassed, numberOfFailed) {
 const url = generateImageBadgeURL(functionName + '()', encodeURIComponent(numberOfPassed + ' passed, ' + numberOfFailed + ' failed.'), numberOfFailed);

 return '\n\n### Tests for ' + functionName + '\n\n' + '![' + functionName + '](' + url + ')';}

function addToReadme(str) {fs.appendFile('./README.md', str, function (err) {if (err) throw err;console.log('String added to the file');});}/**
 * Tests the matchCount function.
 */
function testMatchCount() {
    let number_of_tests_passed = 0;
    let number_of_tests_failed = 0;
    const name_of_function = "matchCount";

    try {
        const result = matchCount("apple, APPLE, AppLe", "apple", true);
        if (result === 3) {
            number_of_tests_passed += 1;
        } else {
            number_of_tests_failed += 1;
        }
    } catch (err) {
        number_of_tests_failed += 1;
    }

    try {
        const result = matchCount("apple, APPLE, AppLe", "apple");
        if (result === 3) {
            number_of_tests_passed += 1;
        } else {
            number_of_tests_failed += 1;
        }
    } catch (err) {
        number_of_tests_failed += 1;
    }

    try {
        const result = matchCount("apple, APPLE, AppLe", "App");
        if (result === 3) {
            number_of_tests_passed += 1;
        } else {
            number_of_tests_failed += 1;
        }
    } catch (err) {
        number_of_tests_failed += 1;
    }

    try {
        const result = matchCount("apple, APPLE, AppLe", "apples");
        if (result === 0) {
            number_of_tests_passed += 1;
        } else {
            number_of_tests_failed += 1;
        }
    } catch (err) {
        number_of_tests_failed += 1;
    }

    addToReadme(
        generateTestBadge(name_of_function, number_of_tests_passed, number_of_tests_failed)
    );
}

module.exports = {
    testMatchCount
};