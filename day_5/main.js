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

//Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.

