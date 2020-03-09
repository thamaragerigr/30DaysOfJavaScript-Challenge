// Declare a function fullName and it print out your full name.
const myName = function() {
    console.log('Thamara Gerig');
}
//Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.

const fullName = function(first, last) {
    console.log(`${first} ${last}`);
}

fullName('Thamara', 'Gerig');

//Declare a function addNumbers and it takes two two parameters and it returns sum.
const addNumbers = function(a,b) {
  sum = a + b;
  return sum;
};

addNumbers(5,6);

//An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

const areaOfRectangle = function(length, width) {
  area = length * width;
  return area;
};

areaOfRectangle(5,5);

//A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
const perimeterOfRectangle = function(length, width) {
  p = 2*(length + width);
  return p;
};

perimeterOfRectangle(5,5);

//A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
const volumeOfRectPrism = function(length,width, height) {
  volume = length * width * height;
  return volume
};

volumeOfRectPrism(2,3,4);


//Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
const pi = 3.1416;
const areaOfCircle = function(radius) {
  area = pi * radius * radius;
  return area;
};

areaOfCircle(3);

//Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
const circumOfCircle = r => {
    return 2 * pi * r;
};

// Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
const density = (mass,vol) => {
  return mass/vol;
};

//Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
const speed = (distance, time) => {
  return distance / time;
};

//Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
const weight = (mass, gravity) => {
    return mass * gravity;
};

//Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelciusToFahrenheit.
const convertCelciusToFahrenheit = (function( oC){
  return (oC * 9/5) + 32;
})(63);

console.log(convertCelciusToFahrenheit);

//Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
const BMIS = (weight, height) => {
    BMI = weight / (height * height);
    switch (BMI) {
        case (BMI >= 18.5 && BMI <= 24.9): 
            console.log('Normal weight');
            break;
        case (BMI < 18.5):
            console.log('Underweight'); 
            break;
        case (BMI >= 25 && BMI <= 29.9):
            console.log('Overweight'); 
            break;
        case (BMI >= 30):
            console.log('Obese'); 
            break;
        default:
            console.log('Normal weight');
            break;
    }
};

console.log(BMIS(0,1.45));