//Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = 'Thamara';
let lastName = 'Gerig';
let country = 'Spain';
let city = 'Madrid';
let age = 21;
let isMarried = false;
let year = 2020;

console.log(typeof(city));
console.log(typeof(year));
console.log(typeof(age));
console.log(typeof(firstName));
console.log(typeof(lastName));

//Check if type of '10' is equal to 10

console.log(typeof('10') === 10);
console.log(typeof(parseInt('9.8')) === 10);

//Write three JavaScript statement which provide truthy value.
console.log( 10 === 10);
console.log('Hi' === 'Hi');
console.log(10 == '10');
//Write three JavaScript statement which provide falsy value.
console.log('10' === 10);
console.log(true === false);
console.log(20 < 10);

//Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
console.log(4 > 3); //true
console.log(4 >= 3); //true
console.log(4 < 3); //false
console.log(4 <= 3); //false
console.log(4 == 4); //true
console.log(4 === 4); //true
console.log(4 != 4); //false
console.log(4 !== 4); //false
console.log(4 != '4'); //false
console.log(4 == '4');  //true
console.log(4 === '4');  //false
console.log('python'.length == 'jargon'.length);  //true

//Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
console.log('6'); 
console.log(4 > 3 && 10 < 12); //true
console.log(4 > 3 && 10 > 12); //false
console.log(4 > 3 || 10 < 12); //true
console.log(4 > 3 || 10 > 12); //true
console.log(!(4 > 3)); //false
console.log(!(4 < 3)); //true
console.log(!(false)); //true
console.log(!(4 > 3 && 10 < 12)); //false
console.log(!(4 > 3 && 10 > 12)); //true
console.log(!(4 === '4'));  //true
console.log('dragon'.includes('on') && 'python'.includes('on')); //There is no 'on' in both dragon and python

//Use the Date object to do the following activities
const now = new Date()
console.log(now.getFullYear()) // 2020
console.log(now.getMonth()) // 2
console.log(now.getDay()) // 2
console.log(now.getDate()) // 3
console.log(now.getHours()) // 22
console.log(now.getMinutes()) // 26
console.log(now.getTime()) // 1583270753191

//Exercises: Level 2
//Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
// let base = Number(prompt('Enter base:'));
// let height = Number(prompt('Enter height:'));
// let area = .5 * base * height;
// console.log(base);
// console.log(height);
// console.log(area);


//Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
// const a = Number(prompt('Enter side a:'));
// const b = Number(prompt('Enter side b:'));
// const c = Number(prompt('Enter side c:'));
// const perimeter = a + b + c;
// console.log(perimeter);

//Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
// const length = Number(prompt('Enter length:'));
// const width = Number(prompt('Enter width:'));
// const rectanglePerimeter = 2 * (length + width);
// console.log(rectanglePerimeter);

//Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
// const radius = Number(prompt('Enter radius:'));
// const pi = 3.1416;
// const circleArea = pi * r * r;
// console.log(circleArea);

//Calculate the slope, x-intercept and y-intercept of y = 2x -2
// let x = 3;
// let y = (2 * x) - 2;
// console.log(y);

//Slope is (m = y2-y1/x2-x1). Find the slope between point (2, 2) and point(6,10)
//Compare the slope of above two questions.
//Calculate the value of y (y = x^2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

//Writ a script that prompt a user to enters hours and rate per hour. Calculate pay of the person?
// const hours = Number(prompt('Enter hours: '));
// const rate = Number(prompt('Enter rate per hour:'));
// const earnings = hours * rate;
// console.log(`Your weekly earning is ${earnings} `);

//If the length of your name is greater than 7 say, your name is long else say your name is short.

let myName = 'Thamara';

function nameLength(name) {
  if (name.length >= 7) {
    console.log(`${name} is a looong name!`);
  } else {
    console.log(`${name} is a shooort name!`);
  }
};

nameLength(myName);

//Compare your first name length and your family name length and you should get this output.
let first = 'Thamara';
let last = 'Gerig';

function nameCompare(first, last) {
  if (first.length > last.length) {
    console.log(`Your first name, ${first} is longer than your family name, ${last}`);
  } else if (first.length == last.length) {
    console.log(`Your first name, ${first} is as long as your family name, ${last}`);
  } else {
    console.log(`Your first name, ${first} is shorter than your family name, ${last}`);
  }
};

nameCompare(first, last);

//Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
let myAge = 25;
let yourAge = 219;

function compareAge(mine, yours) {
  if (mine > yours) {
    console.log(`You are ${ mine - yours } years older than me.`);
  } else {
    console.log(`I am ${ yours - mine } years older than you.`);
  }
};

compareAge(myAge, yourAge);

//Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years. 
let yearBorn = Number(prompt('Enter birth year:'));
let currentYear = now.getFullYear() // 2020
let currentAge = currentYear - yearBorn;
console.log(currentAge);

//Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
let yearsLived = Number(prompt('Enter number of yours you live:'));
let secondsInAYear = 31556952;
let secondsLived = secondsInAYear * yearsLived;
console.log(secondsLived);

//Create a human readable time format using the Date time object

//Create a human readable time format using the Date time object

