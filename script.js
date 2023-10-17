//*Day2 Exercise*//

let text= 'learn JavaScript';
console.log(text);

console.log(text.length);

let text2InUpperCase = text.toUpperCase();
console.log(text2InUpperCase);

let text3InLowerCase = text.toLowerCase();
console.log(text3InLowerCase);

let firstWord = text.substring(0, text.indexOf(' '));
console.log(firstWord); 

let start = text.indexOf('learn');
let end = text.indexOf('JavaScript') + 'JavaScript'.length;
let Phrase = text.slice(start, end);
console.log(Phrase); 

let Check = 'Script';
let Word = text.includes(Check);
console.log(`Does the string contain the word "${Check}"? ${Word}`);

let Array = text.split(' ');
console.log(Array); 

let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
let companArray = companies.split(', ');
console.log(companArray);

let replace = text.replace('learn Javascript', '30 Days Of Python');
console.log(replace); 

let Index= text.charAt(15);
console.log('Character at index 15:',Index);

let code = text.charCodeAt(text.indexOf('J'));
console.log('Character code of J:', code);

let demo= text.indexOf('a');
console.log('Position of first occurrence of "a":', demo);

let last = text.lastIndexOf('a');
console.log('Position of last occurrence of "a":', last);

let sentence = 'You cannot end a sentence with because because because is a conjunction';
let positionOfBecause = sentence.indexOf('because');
console.log('Position of first occurrence of "because":', positionOfBecause);

let lastPositionOfBecause = sentence.lastIndexOf('because');
console.log('Position of last occurrence of "because":', lastPositionOfBecause);

// let positionOfBecause = sentence.search('because');
// console.log('Position of first occurrence of "because":',positionOfBecause );

let trim = text.trim();
console.log('Trimmed string:', trim);

let start2 = text.startsWith('learn');
console.log('Does the string start with "learn"?', start2);

let demo1 = text.endsWith('Javascript');
console.log('Does the string end with "Javascript"?', demo1);

let match= text.match(/a/g);
console.log('All occurrences of "a":', match);

let firstString = '30 Days of';
let secondString = 'JavaScript';
let mergedString = firstString.concat(' ', secondString);
console.log('Merged string:', mergedString);

let repeatedString = text.repeat(2);
console.log(repeatedString);
