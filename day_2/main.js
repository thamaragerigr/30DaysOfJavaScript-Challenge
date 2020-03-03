//Declare a variable name challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge = '30 Days Of JavaScript';

//Print the string on the browser console using console.log()
console.log(challenge);

//Print the length of the string on the browser console using console.log()
console.log(challenge.length);

//Change all the string to capital letters using toUpperCase() method
console.log(challenge.toUpperCase());

//Change all the string to lowercase letters using toLowerCase() method
console.log(challenge.toLowerCase());

//Cut(slice) out the first word of the string using substr() or substring() method
console.log(challenge.substr(0,2));
console.log(challenge.substring(0,2));

//Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log(challenge.slice(3,21));

//check if the string contains a word Script using includes() method
console.log(challenge.includes('Script'));

//Split the string into array using split() method
console.log(challenge.split(''));

//Split the string 30 Days Of JavaScript at the space using split() method
console.log(challenge.split(' '));

//'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
console.log('Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'.split(','));

//Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log(challenge.replace('JavaScript','Python'));

//What is character at index 15 in '30 Days Of JavaScript' string use charAt() method.
console.log(challenge.charAt(15));

//What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(challenge.charCodeAt(11));

//Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(challenge.indexOf('a'));

//Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(challenge.lastIndexOf('a'));

//Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
const sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.indexOf('because'));

//Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.lastIndexOf('because'));

//Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.search('because'));

//Use trim() to remove if there is trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
console.log(challenge.trim());

//Use startsWith() method with the string 30 Days Of JavaScript make the result true
console.log(challenge.startsWith('30 Days Of JavaScript'));

//Use endsWith() method with the string 30 Days Of JavaScript make the result true
console.log(challenge.endsWith('30 Days Of JavaScript'));

//Use match() method to find all the a’s in 30 Days Of JavaScript
console.log(challenge.match('a'));

//Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
console.log('30 Days of '.concat('JavaScript'));

//Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(challenge.repeat(2  ));

//Exercise: Level 2
//Using console.log() print out the following statement.
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");

//Using console.log() print out the following quote by Mother Teresa.
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.");

//Check if typeof '10' is exactly equal to 10. If not make it exactly equal
console.log(typeof('10'));//string
console.log(parseInt('10'));

//Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
console.log(parseFloat('9.8'));

//Check if 'on' is found in both python and jargon
const python = 'python';
const jargon = 'jargon';
console.log(python.includes('on'));
console.log(jargon.includes('on'));

//I hope this course is not full of jargon. Check if jargon is in the sentence.
const sentenceJargon = 'I hope this course is not full of jargon';
console.log(sentenceJargon.includes('jargon'));

//Generate a random number between 0 and 100 inclusive.
let randomNum = Math.random();   
let numBtnZeroAndTen = randomNum * 11;

console.log(Math.floor(numBtnZeroAndTen));

//Generate a random number between 50 and 100 inclusive.
let numBtnFiftyAndAHundred = (randomNum * 51) + 50; //this would not give 100

console.log(Math.floor(numBtnFiftyAndAHundred));

//the other way
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

console.log(getRndInteger(50,100));

//Generate a random number between 0 and 255 inclusive.
let numBtnZeroAndTwoHundred = randomNum * 255; //this would not give 100
console.log(Math.floor(numBtnZeroAndTen));

//Use console.log() and escape characters to print the following pattern.

//Use substr to slice out the phrase because because because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
