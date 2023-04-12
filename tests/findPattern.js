/* eslint-disable */ 


        const {findPattern} = require("../functions/findPattern"); 
        


        const fs = require("fs"); 

function generateImageBadgeURL(label, value, passed) {
 return `https://img.shields.io/badge/${encodeURIComponent(label)}-${value}-${passed === 0 ? '13b285' : 'ff69b4'}`;}

function generateTestBadge(functionName, numberOfPassed, numberOfFailed) {
 const url = generateImageBadgeURL(functionName + '()', encodeURIComponent(numberOfPassed + ' passed, ' + numberOfFailed + ' failed.'), numberOfFailed);

 return '\n\n### Tests for ' + functionName + '\n\n' + '![' + functionName + '](' + url + ')';}

function addToReadme(str) {fs.appendFile('./README.md', str, function (err) {if (err) throw err;console.log('String added to the file');});}/**
 * Tests the findPattern function.
 */
function testFindPattern() {
    const name_of_function = "findPattern";
    let number_of_tests_passed = 0;
    let number_of_tests_failed = 0;

    try {
        const result = findPattern("test1 Test2 tEst3", "test", true);
        if (result.length === 3 &&
            result[0].match === "test1" && result[0].start === 0 && result[0].end === 4 &&
            result[1].match === "Test2" && result[1].start === 6 && result[1].end === 10 &&
            result[2].match === "tEst3" && result[2].start === 12 && result[2].end === 16) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    try {
        const result = findPattern("test1 Test2 tEst3", "test");
        if (result.length === 3 &&
            result[0].match === "test1" && result[0].start === 0 && result[0].end === 4 &&
            result[1].match === "Test2" && result[1].start === 6 && result[1].end === 10 &&
            result[2].match === "tEst3" && result[2].start === 12 && result[2].end === 16) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    try {
        const result = findPattern("test1 Test2 tEst3", "TEST", false);
        if (result.length === 3 &&
            result[0].match === "test1" && result[0].start === 0 && result[0].end === 4 &&
            result[1].match === "Test2" && result[1].start === 6 && result[1].end === 10 &&
            result[2].match === "tEst3" && result[2].start === 12 && result[2].end === 16) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    try {
        const result = findPattern("Testing findPattern function", "pattern", true);
        if (result.length === 0) {
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
    testFindPattern
};