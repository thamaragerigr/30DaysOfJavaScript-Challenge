//Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:You are old enough to drive but if not 18 give feedback to wait for the years he supposed to wait for.
// let age = Number(prompt('Enter your age:'));

// if (age >= 18 ) {
//   console.log('You are old enough to drive.');
// } else {
//     console.log(`You are left with ${18 - age} years to drive.`);
// }

//Compare the values of myAge and yourAge using if … else. Based on the comparison log to console who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
// let myAge = Number(prompt('Enter your age:'));
// let yourAge = Number(prompt('Enter your age:'));

// if (myAge > yourAge ) {
//     console.log(`You are ${myAge - yourAge} years older than me.`);
//   } else if (myAge == yourAge){
//     console.log(`We're the same age!`);
//   } else {
//     console.log(`You are ${yourAge - myAge} years older than me.`);
//   }

  //If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement in to ways
  let a = 5;
  let b = 3;

  if (a > b ) {
    console.log(`${a} is greater than ${b}`);
  } else if (a == b){
    console.log(`They're the same!`);
  } else {
    console.log(`${b} is greater than ${a}`);
  }

a > b ? console.log(`${a} is greater than ${b}`) :  console.log(`${b} is greater than ${a}`);
b > a ? console.log(`${b} is greater than ${a}`) :  console.log(`${a} is greater than ${b}`);

//Even numbers are divisible by 2 and the remainder is zero. How do you check if a number is even or not using JavaScript?

if (a % 2 == 0) {
    console.log(`${a} is an even number`);
} else {
    console.log(`${a} is an odd number`);
}

//Write a code which can give grade to students according to theirs scores:
// let grade = Number(prompt('Enter grade:'));

// switch (true) {
//     case grade >= 80 && grade <= 100:
//         console.log('A');
//         break;
//     case grade >= 70 && grade <= 89:
//         console.log('B');
//         break;
//     case grade >= 60 && grade <= 69:
//         console.log('C');
//         break;  
//     case grade >= 50 && grade <= 59:
//         console.log('D');
//         break;
//     case grade >= 0 && grade <= 49:
//         console.log('F');
//         break;  
//     default:
//         console.log("You haven't done the test!");
//         break;
// };

//Check if the season is Autumn, Winter, Spring or Summer. 
// let season = prompt('Enter month:').toLowerCase();
// switch (season) {
//     case 'september' :
//     case  'october' :
//     case  'november':
//         console.log('Autumn');
//         break;
//     case 'december':
//     case 'january':
//     case 'february':
//         console.log('Winter');
//         break;
//     case 'march':
//     case 'april':
//     case 'may':
//         console.log('Spring');
//         break;  
//     case 'june':
//     case 'july': 
//     case 'august':
//         console.log('Summer');
//         break;
//     default:
//         console.log("You haven't done the test!");
//         break;
// };

//Check if a day is weekend day or a working day. Your script will take day as an input.
// let day = prompt('What is the day is today?').toLowerCase();
// switch (day) {
//     case 'monday' :
//     case 'tuesday' :
//     case 'wednesday':
//     case 'thursday':
//     case 'friday':
//         console.log(`${day} is a work day.`);
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log(`${day} is a weekend day.`);
//         break;
//     default:
//         console.log("You haven't done the test!");
//         break;
// };

//Write a program which tells the number days in a month.

let month = prompt('Enter month:').toLowerCase();
switch (month) {
    case 'january' :
    case 'march' :
    case 'may':
    case 'july':
    case 'august':
    case 'october':
    case 'december':
        console.log(`${month} has 31 days`);
        break;
    case 'april':
    case 'june':
    case 'september':
    case 'november':
        console.log(`${month}  has 30 days`);
        break;
    case 'february':
        console.log(`${month}  has 29 days`);
                break;
    default:
        console.log("You haven't done the test!");
        break;
};
