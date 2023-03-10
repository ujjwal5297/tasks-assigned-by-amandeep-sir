// Regular Expression Literal — Syntax /pattern/flags

var regexGlobal = /abc/g;
console.log(regexGlobal.test('abc abc'));
// it will match all the occurence of 'abc', so it won't return 
// after first match.
var regexInsensitive = /abc/i;
console.log(regexInsensitive.test('Abc'));
// returns true, because the case of string characters don't matter 
// in case-insensitive search.

//1) RegExp.prototype.test()

// This method is used to test whether a match has been found or not.It accepts a string which we have to test against regular expression and returns true or false depending upon if the match is found or not.
var regex = /hello/;
var str = 'hello world';
var result = regex.test(str);
console.log(result);

// 2)RegExp.prototype.exec()

// This method returns an array containing all the matched groups. It accepts a string that we have to test against a regular expression.

var regex = /hello/;
var str = 'hello world';
var result = regex.exec(str);
console.log(result);
// returns [ 'hello', index: 0, input: 'hello world', groups: undefined ]
// 'hello' -> is the matched pattern.
// index: -> Is where the regular expression starts.
// input: -> Is the actual string passed.

// Character set [xyz] — A character set is a way to match different characters in a single position, it matches any single character in the string from characters present inside the brackets.

var regex = /[bt]ear/;
console.log(regex.test('tear'));
// returns true
console.log(regex.test('bear'));
// return true
console.log(regex.test('fear'));
// return false

// Negated character set [^xyz] — It matches anything that is not enclosed in the brackets. For example:

var regex = /[^bt]ear/;
console.log(regex.test('tear'));
// returns false
console.log(regex.test('bear'));
// return false
console.log(regex.test('fear'));
// return true

// Ranges [a-z] — Suppose we want to match all of the letters of an alphabet in a single position, we could write all the letters inside the brackets, but there is an easier way and that is ranges. For example: [a-h] will match all the letters from a to h. Ranges can also be digits like [0-9] or capital letters like [A-Z].

var regex = /[a-z]ear/;
console.log(regex.test('fear'));
// returns true
console.log(regex.test('tear'));
// returns true

// Meta-characters — Meta-characters are characters with a special meaning.

// \d — Match any digit character ( same as [0-9] ).
// \w — Match any word character. A word character is any letter, digit, and underscore. (Same as [a-zA-Z0–9_] ) i.e alphanumeric character.
// \s — Match a whitespace character (spaces, tabs etc).
// \t — Match a tab character only.
// \b — Find a match at beginning or ending of a word. Also known as word boundary.
// . — (period) Matches any character except for newline.
// \D — Match any non digit character (same as [^0–9]).
// \W — Match any non word character (Same as [^a-zA-Z0–9_] ).
// \S — Match a non whitespace character.

// Quantifiers: — Quantifiers are symbols that have a special meaning in a regular expression.

var regex = /\d+/;
console.log(regex.test('8'));
// true
console.log(regex.test('88899'));
// true
console.log(regex.test('8888845'));
// true

// * —Matches the preceding expression 0 or more times.

var regex = /go*d/;
console.log(regex.test('gd'));
// true
console.log(regex.test('god'));
// true
console.log(regex.test('good'));
// true
console.log(regex.test('goood'));
// true

// ? — Matches the preceding expression 0 or 1 time, that is preceding pattern is optional.

var regex = /goo?d/;
console.log(regex.test('god'));
// true
console.log(regex.test('good'));
// true
console.log(regex.test('goood'));
// false

// ^ — Matches the beginning of the string, the regular expression that follows it should be at the start of the test string. i.e the caret (^) matches the start of string.

var regex = /^g/;
console.log(regex.test('good'));
// true
console.log(regex.test('bad'));
// false
console.log(regex.test('tag'));
// false

// $ — Matches the end of the string, that is the regular expression that precedes it should be at the end of the test string. The dollar ($) sign matches the end of the string.

var regex = /.com$/;
console.log(regex.test('test@testmail.com'));
// true
console.log(regex.test('test@testmail'));
// false

// {N} — Matches exactly N occurrences of the preceding regular expression.

var regex = /go{2,}d/;
console.log(regex.test('good'));
// true
console.log(regex.test('goood'));
// true
console.log(regex.test('gooood'));
// true

// {N,M} — Matches at least N occurrences and at most M occurrences of the preceding regular expression (where M > N).

var regex = /go{1,2}d/;
console.log(regex.test('god'));
// true
console.log(regex.test('good'));
// true
console.log(regex.test('goood'));
// false

// Alternation X|Y — Matches either X or Y. For example:

var regex = /(green|red) apple/;
console.log(regex.test('green apple'));
// true
console.log(regex.test('red apple'));
// true
console.log(regex.test('blue apple'));
// false

// Note — If you want to use any special character as a part of the expression, say for example you want to match literal + or ., then you have to escape them with backslash ( \ ).

// For example:

var regex = /a+b/;  // This won't work
var regex = /a\+b/; // This will work
console.log(regex.test('a+b')); // true