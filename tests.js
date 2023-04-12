const {testExtractGroups} = require('./tests/extractGroups.js');
const {testFindPattern} = require('./tests/findPattern.js');
const {testMatchCount} = require('./tests/matchCount.js');
const {testReplacePattern} = require('./tests/replacePattern.js');
const {testSplitByPattern} = require('./tests/splitByPattern.js');
const {testValidateInput} = require('./tests/validateInput.js');

testExtractGroups();
testFindPattern();
testMatchCount();
testReplacePattern();
testSplitByPattern();
testValidateInput();