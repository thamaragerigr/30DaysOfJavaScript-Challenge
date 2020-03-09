const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
  const mernStack = ['MongoDB', 'Express', 'React', 'Node']

  //Iterate 0 to 10 using for loop, do the same using while and do while loop
// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// let i = 0;
// while (i <= 10){
//     console.log(i);
//     i++;
// }

// do {
//   console.log(i);
//   i++;
// } while (i <= 10);


//Iterate 10 to 0 using for loop, do the same using while and do while loop

// for (let i = 10; i >= 0; i--) {
//     console.log(i);
//   }

  let i = 10;
// while (i >= 0){
//     console.log(i);
//     i--;
// }

// do {
//   console.log(i);
//   i--;
// } while (i >= 0);

// Iterate 0 to n using for loop

// for (let i = 0; i < 20; i++) {
//     console.log(0);
//  }

// Write a loop that makes the following pattern using console.log():
for (let i = 1; i < 7; i++) {
  let strng = ' ';
  for (let j = 1; j <= i; j++) {
    strng += '#';
  }
  console.log(strng)
}

//Use loop to print the following pattern:
for (let i = 0; i <= 10; i++) {
  console.log(`${i} x ${i} = ${i*i}`);
}

//Using loop print the following pattern
for (let i = 0; i <= 10; i++) {
  console.log(`${i}  ${i**2}  ${i**3}`);
}

//Use for loop to iterate from 0 to 100 and print only even numbers
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

//Use for loop to iterate from 0 to 100 and print only odd numbers
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

//Use for loop to iterate from 0 to 100 and print only prime numbers
// for (let i = 2; i <= 100; i++) {
//   for(let factor = 2; factor < i; factor++) {
//     if(i % factor == 0) {
//        isPrime = false;
//        break;
//     }
//  }

//  if(isPrime) {
//     console.log(i);
//  }
// }

// Use for loop to iterate from 0 to 100 and print and print the sum of all numbers.
for (let i = 0; i <= 100; i++) {
  console.log(`The sum all numbers is ${i**3}`);
}

//Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

//Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array

//Develop a small script which generate array of 5 random numbers

//Develop a small script which generate array of 5 random numbers and the numbers must be unique

//Develop a small script which generate a six characters random id:

