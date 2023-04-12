
_This entire repository was created completely with **AI**, using the [hero-ai-package-creator](https://github.com/hero-page/hero-ai-package-creator), which is **open-source**, uses **GPT-4**, and is written & maintained by [**Sam Chahine**](https://hero.page/samir)_ ❣️🧞‍♀️ 



# hero-ai-built-regex-utilities

A set of functions for working with regular expressions, such as finding and replacing text patterns and validating user input.

## Functions

### findPattern

Finds all occurrences of a pattern in a given text. Takes two arguments, the text and the pattern. Returns an array of objects containing the match and its start and end positions in the text. Handles cases of overlapping matches and multiline patterns. Ignores case sensitivity, unless specified.

Example: `findPattern('test1 Test2 tEst3', 'test', true)` returns `[{ match: 'test1', start: 0, end: 4 }, { match: 'Test2', start: 6, end: 10 }, { match: 'tEst3', start: 12, end: 16 }]`

### replacePattern

Replaces all occurrences of a pattern in a given text with the specified replacement. Takes three arguments, the text, the pattern, and the replacement. Returns the modified text. Handles cases of overlapping matches and multiline patterns. Ignores case sensitivity, unless specified.

Example: `replacePattern('Java is good, JavaScript is better', 'Java', 'Python')` returns `'Python is good, PythonScript is better'`

### validateInput

Validates user input against a given pattern. Takes two arguments, the input and the pattern. Returns true if the input matches the pattern, false otherwise. Handles cases where the pattern is only partially matched. Ignores case sensitivity, unless specified.

Example: `validateInput('abc123', '^[a-z]+[0-9]+$')` returns `true`

### extractGroups

Extracts groups from a given text based on a pattern. Takes two arguments, the text and the pattern. Returns an array of arrays containing groups. Handles cases where several groups exist within a single match. Ignores case sensitivity, unless specified.

Example: `extractGroups('2021-01-01 and 2022-02-02', '\\d{4}-(\\d{2})-(\\d{2})')` returns `[['01', '01'], ['02', '02']]`

### matchCount

Counts the number of occurrences of a pattern in a given text. Takes two arguments, the text and the pattern. Returns the match count. Handles cases of overlapping matches and multiline patterns. Ignores case sensitivity, unless specified.

Example: `matchCount('apple, APPLE, AppLe', 'apple', true)` returns `3`

### splitByPattern

Splits a given text into an array of strings based on a pattern. Takes two arguments, the text and the pattern. Returns the array of strings. Handles cases where the pattern occurs multiple times consecutively. Ignores case sensitivity, unless specified.

Example: `splitByPattern('apple#123#APPLE#456#AppLe', '#\\d+#')` returns `['apple', 'APPLE', 'AppLe']`

---

[Sam Chahine](https://github.com/kingmeers), at [Hero](https://hero.page)
                

### Tests for extractGroups

![extractGroups](https://img.shields.io/badge/extractGroups()-0%20passed%2C%203%20failed.-ff69b4)

### Tests for splitByPattern

![splitByPattern](https://img.shields.io/badge/splitByPattern()-2%20passed%2C%202%20failed.-ff69b4)

### Tests for validateInput

![validateInput](https://img.shields.io/badge/validateInput()-4%20passed%2C%201%20failed.-ff69b4)

### Tests for matchCount

![matchCount](https://img.shields.io/badge/matchCount()-3%20passed%2C%201%20failed.-ff69b4)

### Tests for findPattern

![findPattern](https://img.shields.io/badge/findPattern()-1%20passed%2C%203%20failed.-ff69b4)

### Tests for replacePattern

![replacePattern](https://img.shields.io/badge/replacePattern()-3%20passed%2C%201%20failed.-ff69b4)