/* eslint-disable */ 


        const {replacePattern} = require("../functions/replacePattern"); 
        


        const fs = require("fs"); 

function generateImageBadgeURL(label, value, passed) {
 return `https://img.shields.io/badge/${encodeURIComponent(label)}-${value}-${passed === 0 ? '13b285' : 'ff69b4'}`;}

function generateTestBadge(functionName, numberOfPassed, numberOfFailed) {
 const url = generateImageBadgeURL(functionName + '()', encodeURIComponent(numberOfPassed + ' passed, ' + numberOfFailed + ' failed.'), numberOfFailed);

 return '\n\n### Tests for ' + functionName + '\n\n' + '![' + functionName + '](' + url + ')';}

function addToReadme(str) {fs.appendFile('./README.md', str, function (err) {if (err) throw err;console.log('String added to the file');});}/**
 * Test cases for the replacePattern function.
 */
function testReplacePattern() {
    let number_of_tests_passed = 0;
    let number_of_tests_failed = 0;
    const name_of_function = "replacePattern";

    try {
        const testText = "Java is good, JavaScript is better.";
        const expectedResult = "Python is good, PythonScript is better.";
        const result = replacePattern(testText, "Java", "Python");
        if (result === expectedResult) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    try {
        const testText = "My dog is a Big Dog!";
        const expectedResult = "My cat is a Big Cat!";
        const result = replacePattern(testText, "dog", "cat", true);
        if (result === expectedResult) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    try {
        const testText = "Java is good, JavaScript is better.";
        const expectedResult = "Python is good, PythonScript is better.";
        const result = replacePattern(testText, "Java", "Python", false);
        if (result === expectedResult) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    try {
        const testText = "Blue\nMoon";
        const expectedResult = "Red\nMoon";
        const result = replacePattern(testText, "Blue", "Red");
        if (result === expectedResult) {
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
    testReplacePattern
};