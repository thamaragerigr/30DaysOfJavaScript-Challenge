

//Declare an empty array;
const arrAy = Array();
console.log(arrAy);
const arrAyy = [];
console.log(arrAy);

//Declare an array with more than 5 number of elements
const arrFive = [ 1, 2 ,3, 4, 5];

//Find the length of your array
console.log(arrFive.length);

//Get the first item, the middle item and the last item of the array
console.log(arrFive[0]);
console.log(arrFive[2]);
console.log(arrFive[4]);

//Declare an array called mixedDataTypes,put different data types in your array and find length of the array. You are should size be greater than 5
const mixedDataTypes = [ 12, 'hi', true, [1, 2, 3]];

//Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

//Print the array using console.log()
console.log(itCompanies);

//Print the number of companies in the array
console.log(itCompanies.length);

//Print the first company, middle and last company
console.log(itCompanies[0]);
console.log(itCompanies[3]);
console.log(itCompanies[6]);

//Print out each company
for(let i = 0; i < itCompanies.length; i++){
    console.log(itCompanies[i]);
};

//Change each company name to uppercase one by one and print them out
for(let i = 0; i < itCompanies.length; i++){
    console.log((itCompanies[i]).toUpperCase());
};


//Filter out companies which have more than one 'o' without the filter method
for(let i = 0; i < itCompanies.length; i++){
    if(itCompanies[i].includes('oo')) {
        console.log('yeih');
    } else {
        console.log('neih');
    }
};

//Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.

console.log((itCompanies).toString());

//Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
if(itCompanies.includes('Facebook')) {
    console.log('The company is found');
} else {
    console.log('The company is not found');
}

//Sort the array using sort() method
itCompanies.sort();
console.log(itCompanies);

//Reverse the array using reverse() method
itCompanies.reverse();
console.log(itCompanies);

//Slice out the first 3 companies from the array
const sliceCompanies = itCompanies.slice(0,3);
console.log(sliceCompanies);

//Slice out the last 3 companies from the array
const sliceCompanies2 = itCompanies.slice(4,7);
console.log(sliceCompanies2);

//Slice out the middle IT company or companies from the array
const sliceCompanies3 = itCompanies.slice(2,5);
console.log(sliceCompanies3);

//Remove the first IT company from the array
itCompanies.shift();

console.log(itCompanies);

//Remove the middle IT company or companies from the array
itCompanies.splice(0,3);

console.log(itCompanies);

//Remove the last IT company from the array
itCompanies.pop();

console.log(itCompanies);


//Remove all IT companies
//itCompanies.length = 0;
// itCompanies = [];
itCompanies.splice(0,itCompanies.length);

console.log(itCompanies);


//First remove all the functions and change the string to array and count the number of words in the array
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let words = text.split(' ');
console.log(words);
console.log(words.length);

//In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
shoppingCart.unshift('Meat');
console.log(shoppingCart);

//add sugar at the end of you shopping cart if it has not been already added
shoppingCart.push('Sugar');
console.log(shoppingCart);
//modify tea to 'Green Tea'
shoppingCart[3] = 'Green Tea';
console.log(shoppingCart);


//In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
for(let i = 0; i < countries.length; i++){
    if(countries[i] === 'Ethiopia') {
        console.log('yeih');
    }
};

//In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
    if(frontEnd.includes('SASS')) {
        console.log('Sass is a CSS preprocess');
    } else {
        frontEnd.push('SASS')
        console.log(frontEnd);
    };

 //Concatenate the following two variables and store it in a fullStack variable.
fullStack = frontEnd.concat(backEnd);
console.log(fullStack);




//Exercise: Level 3

//The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array and find the min and max age
//can give errors
// console.log(ages.sort());
// console.log(Math.min.apply(null, ages));
// console.log(Math.max.apply(null, ages));

let min = ages[0];
let max = ages[ages.length -1];
console.log(max);

console.log(ages.reduce((min, val) => val < min ? val : min, ages[0]));

// Find the median age(one middle item or two middle items divided by two)


// Find the average age(all items divided by number of items)


// Find the range of the ages(max minus min)


// Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array


//Find the middle country(ies) in the countries array



//Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.

