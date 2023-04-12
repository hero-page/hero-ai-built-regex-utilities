/* eslint-disable */ 


        const {splitByPattern} = require("../functions/splitByPattern"); 
        


        const fs = require("fs"); 

function generateImageBadgeURL(label, value, passed) {
 return `https://img.shields.io/badge/${encodeURIComponent(label)}-${value}-${passed === 0 ? '13b285' : 'ff69b4'}`;}

function generateTestBadge(functionName, numberOfPassed, numberOfFailed) {
 const url = generateImageBadgeURL(functionName + '()', encodeURIComponent(numberOfPassed + ' passed, ' + numberOfFailed + ' failed.'), numberOfFailed);

 return '\n\n### Tests for ' + functionName + '\n\n' + '![' + functionName + '](' + url + ')';}

function addToReadme(str) {fs.appendFile('./README.md', str, function (err) {if (err) throw err;console.log('String added to the file');});}/**
 * Test for splitByPattern function
 */
function testSplitByPattern() {
    let numberOfTestsPassed = 0;
    let numberOfTestsFailed = 0;
    const nameOfFunction = "splitByPattern";

    try {
        const result = splitByPattern("apple#123#APPLE#456#AppLe", "#\\d+#");
        const expectedResult = ["apple", "APPLE", "AppLe"];
        
        if (JSON.stringify(result) === JSON.stringify(expectedResult)) {
            numberOfTestsPassed++;
        } else {
            numberOfTestsFailed++;
        }
    } catch (err) {
        numberOfTestsFailed++;
    }

    try {
        const result = splitByPattern("apple#123#123#APPLE#456#456#AppLe", "#\\d+#");
        const expectedResult = ["apple", "APPLE", "AppLe"];
        
        if (JSON.stringify(result) === JSON.stringify(expectedResult)) {
            numberOfTestsPassed++;
        } else {
            numberOfTestsFailed++;
        }
    } catch (err) {
        numberOfTestsFailed++;
    }

    try {
        const result = splitByPattern("apple#123#APPLE#456#AppLe", "#\\d+#", true);
        const expectedResult = ["apple", "APPLE", "AppLe"];
        
        if (JSON.stringify(result) === JSON.stringify(expectedResult)) {
            numberOfTestsPassed++;
        } else {
            numberOfTestsFailed++;
        }
    } catch (err) {
        numberOfTestsFailed++;
    }

    try {
        const result = splitByPattern("apple_123_apple_APPLE_456_APPLE_AppLe", "_\\d+_");
        const expectedResult = ["apple", "apple", "APPLE", "APP_LE", "AppLe"];
        
        if (JSON.stringify(result) === JSON.stringify(expectedResult)) {
            numberOfTestsPassed++;
        } else {
            numberOfTestsFailed++;
        }
    } catch (err) {
        numberOfTestsFailed++;
    }

    addToReadme(generateTestBadge(nameOfFunction, numberOfTestsPassed, numberOfTestsFailed));
}

module.exports = {
    testSplitByPattern
};