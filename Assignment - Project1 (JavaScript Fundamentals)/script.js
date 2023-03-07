// Values and Datatypes..........
// 1. Create a jaascript file, using jaascript comments, List all the datatypes of Jaascript, and specify an example for each of them.

// .................................. 1. String.........................................
let string = "I am a String";

// .................................. 2. Number.........................................
// .................................. 2.i. Integer.........................................
let integer = 20;
// .................................. 2.ii. Floating Value.........................................
let floatingNumber = 20.8;
// .................................. 2.iii. Infinity.........................................
let infinity = Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY;
// .................................. 2.iv. Not A Number.........................................
let notANumber = NaN;

// .................................. 3 BigInt.........................................
let bigint = 1024n;

// .................................. 4 Boolean.........................................
let boolean1 = true;
let boolean2 = false;

// .................................. 5 Undefined.........................................
let Undefined = undefined;

// .................................. 6 Null.........................................
let Null = null;

// .................................. 7 Symbol.........................................
let Symbol = Symbol('SATYAM');

// .................................. 8 Objects.........................................
// .................................. 8.i. Array.........................................
let Array = [1, 2, 'Satyam', true];
// .................................. 8.ii. Object.........................................
let Object = {name:"Satyam", age:20};


// 2.  Create an array of 10 products that you have recently purchased or viewed on an e-commerce site.
[
    "Shirt",
    "Iphone",
    "Watch",
    "Mouse",
    "Table",
    "Laptop",
    "Pen",
    "System",
    "Bag",
    "Gift"
];


// 3. Create an object of a student registry of 5 students whose key is the registration number and the value is the student name. Registration number starts from 1 and continues.
{
    1: "Satyam",
    2: "Shivam",
    3: "Sundaram",
    4: "Kajal",
    5: "Heera"
}
// Values and Datatypes..........

// ..................................................................................................
// ..................................................................................................

// Variables and typeof ..........
// 1. Specify an example for all the datatypes in Javascript, store the values in a variable, and verify the type of value stored.
// .................................. 1. String.........................................
let var1 = "I am a String";
console.log(typeof var1);

// .................................. 2. Number.........................................
// .................................. 2.i. Integer.........................................
let var2 = 20;
console.log(typeof var2);
// .................................. 2.ii. Floating Value.........................................
let var3 = 20.8;
console.log(typeof var3);
// .................................. 2.iii. Infinity.........................................
let var4 = Number.POSITIVE_INFINITY;
console.log(typeof var4);
// .................................. 2.iv. Not A Number.........................................
let var5 = NaN;
console.log(typeof var5);

// .................................. 3 BigInt.........................................
let var6 = 1024n;
console.log(typeof var6);

// .................................. 4 Boolean.........................................
let var7 = true;
console.log(typeof var7);
let var8 = false;
console.log(typeof var8);

// .................................. 5 Undefined.........................................
let var9 = undefined;
console.log(typeof var9);

// .................................. 6 Null.........................................
let var10 = null;
console.log(typeof var10);

// .................................. 7 Symbol.........................................
let var11 = Symbol('SATYAM');
console.log(typeof var11);

// .................................. 8 Objects.........................................
// .................................. 8.i. Array.........................................
let var12 = [1, 2, 'Satyam', true];
console.log(typeof var12);
// .................................. 8.ii. Object.........................................
let var13 = {name:"Satyam", age:20};
console.log(typeof var13);


// 2. Create 2 valid variables and 2 invalid variables and print them onto the console. Comment the results and error messages.
// Valid Variables 
let name1 = "Satyam"; 
console.log(name1);          // OUTPUT: Satyam

let iAmHappy = true;
console.log(iAmHappy);       // OUTPUT: true
 
// Invalid Variables
let 1name = "Satyam";
console.log(1name);          // OUTPUT: Invalid or unexpected token

let var = 20;
console.log(var);             // OUTPUT: Unexpected token 'var'
// Variables and typeof ..........

// ..................................................................................................
// ..................................................................................................

// Operators...........................
// 1. Write a program that prints the multiplication table in the textbook format of any number specified.
let number = 5;

console.log(`${number} * 1 = ${number * 1}`);
console.log(`${number} * 2 = ${number * 2}`);
console.log(`${number} * 3 = ${number * 3}`);
console.log(`${number} * 4 = ${number * 4}`);
console.log(`${number} * 5 = ${number * 5}`);
console.log(`${number} * 6 = ${number * 6}`);
console.log(`${number} * 7 = ${number * 7}`);
console.log(`${number} * 8 = ${number * 8}`);
console.log(`${number} * 9 = ${number * 9}`);
console.log(`${number} * 10 = ${number * 10}`);

// OUTPUT: 
// 5 * 1 = 5
// 5 * 2 = 10
// 5 * 3 = 15
// 5 * 4 = 20
// 5 * 5 = 25
// 5 * 6 = 30
// 5 * 7 = 35
// 5 * 8 = 40
// 5 * 9 = 45
// 5 * 10 = 50

// 2. Write a program to perform all the arithmetic operations[except increment and decrement operators] of javascript of any two numbers stored in the variables num1 and num2. Also, print the results to the console.
let num1 = 5;
let num2 = 4;

// Addition (+): Add two values together
console.log(`the addition of num1 and num2 is ${num1 + num2}`);

// Substraction (-): Substract one value from another
console.log(`The Substraction of num1 and num2 is ${num1 - num2}`);

// Multiplication (*): Multiplication two value together
console.log(`The Multiplication of num1 and num2 is ${num1 * num2}`);

// Division (/): Division one value by another value
console.log(`The division of num1 and num2 is ${num1 / num2}`);

// Modulus (%): Return the remainder of a division operation
console.log(`The result of Modulo operation of num1 and num2 is ${num1 % num2}`);

// Exponentiation (**): raise to the power of 
console.log(`The Exponantial of num1 and num1 is ${num1 ** num2}`);

// OUTPUT: 
// the addition of num1 and num2 is 9
// The Substraction of num1 and num2 is 1
// The Multiplication of num1 and num2 is 20
// The division of num1 and num2 is 1.25
// The result of Modulo operation of num1 and num2 is 1
// The Exponantial of num1 and num1 is 625

// 3. Write a program to find out the perimeter of a rectangle. Print the results to the console
let length = 5;
let width = 4;

let PerimeterOfRectangle = 2* (length + width);
console.log(`The Perimeter of Rectangle with lenght:${length} and width:${width} is ${PerimeterOfRectangle}`);

// OUTPUT: 
// The Perimeter of Rectangle with lenght:5 and width:4 is 18

// 4. Write a program to demonstrate the results of comparison operators. Note that both the truth and false condition for each operator must be specified.
// Equal
let num1 = 12;
let num2 = 12;
console.log(num1 == num2);        // true

let num3 = 13;
let num4 = 12;
console.log(num3 == num4);        // false

// Not Equal
let num5 = 13;
let num6 = 12;
console.log(num5 != num6);        // true

let num7 = 12;
let num8 = 12;
console.log(num7 != num8);        // false

// Strictly Equal
let num9 = 12;
let num10 = 12;
console.log(num9 === num10);        // true

let num11 = 12;
let num12 = "12";
console.log(num11 === num12);        // false

// Strictly not Equal 
let num13 = 12;
let num14 = "12";
console.log(num13 !== num14);        // true

let num15 = 12;
let num16 = "Satyam";
console.log(num15 !== num16);        // true

// Greater than
let num17 = 13;
let num18 = 12;
console.log(num17 > num18);        // true

let num19 = 11;
let num20 = 12;
console.log(num19 > num20);        // false

// Greater than or Equal to
let num21 = 12;
let num22 = 12;
console.log(num21 >= num22);        // true

let num23 = 10;
let num24 = 12;
console.log(num23 >= num24);        // false

// Lesser Than
let num25 = 11;
let num26 = 12;
console.log(num25 < num26);        // true

let num27 = 13;
let num28 = 12;
console.log(num27 < num28);        // false

// Lesser than or Equal to
let num29 = 12;
let num30 = 12;
console.log(num29 <= num30);        // true

let num31 = 14;
let num32 = 12;
console.log(num31 <= num32);        // false
// Operators...........................

// ..................................................................................................
// ..................................................................................................

// What are Conditions, If, If-else, if-else-if ...........................
// 1. Write a program of traffic control that accepts the traffic light displayed and prints the message. If the traffic light is red print the vehicles must stop.
let TrafficLight = "Red";

if (TrafficLight == "Red") {
    console.log(`Vehicles must Stop.`);
} else if (TrafficLight == "Orange") {
    console.log(`Vehicles must Wait. The signal is changing to red or green`);
} else if (TrafficLight == "Green") {
    console.log(`Vehicles may proceed with caution`);
} else {
    console.log(`Invalid Traffic Light`);
}

// OUTPUT: Vehicles must Stop.

// 2. Write a program to print the largest of 2 numbers.
let num1 = 25;
let num2 = 21;

if (num1 > num2) {
    console.log(`num1 is greater than num2.`);
} else {
    console.log(`num2 is greater than num1.`);
}

// OUTPUT: num1 is greater than num2.

// 3. Write a program that takes a number as input and outputs "Fizz" if it is divisible by 3, "Buzz" if it is divisible by 5, and "FizzBuzz" if it is divisible by both 3 and 5. Note that any number can be passed and not restricted to the numbers divisible by 3 or 5.
let  num = 15;

if (num % 3 == 0 && num % 5 == 0) {
    console.log("FizzBuzz");
} else if (num % 3 == 0) {
    console.log("Fizz");
} else if (num % 5 == 0) {
    console.log("Buzz");
} else {
    console.log("Invalid Input");
}

// OUTPUT: FizzBuzz
// What are Conditions, If, If-else, if-else-if ...........................

// ..................................................................................................
// ..................................................................................................

// Switch Case ...................................

// 1. Write a program that takes in a day of the week (e.g., Monday, Tuesday, etc.) and outputs the number of days until the weekend.
let day = "Monday"

switch (day) {
    case "Monday":
        console.log(`There are 5 Day until the Weekend`);
        break;
    case "Tuesday":
        console.log(`There are 4 Day until the Weekend`);
        break;
    case "Wednesday":
        console.log(`There are 3 Day until the Weekend`);
        break;
    case "Thusday":
        console.log(`There are 2 Day until the Weekend`);
        break;
    case "Friday":
        console.log(`There are 1 Day until the Weekend`);
        break;
    case "Saturday":
        console.log(`There are 0 Day until the Weekend`);
        break;
    default:
        console.log(`Invalid Day`);
        break;
}

// OUTPUT: There are 5 Day until the Weekend

// 2. Write a program that takes in a number between 1 and 12 and outputs the corresponding month of the year.
let MonthNumber = 10;

switch (MonthNumber) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Fabruary");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Invalid Month Number");
        break;
}

// OUTPUT: October
// Switch Case ...................................

// ..................................................................................................
// ..................................................................................................

// Ternary Conditions ...............................
// 1. Write a program that takes in a number and outputs whether it is positive, negative, or zero.
let num = 0;

num == 0
    ? console.log("The number is Zero")
    : num > 0
    ? console.log("The number is Positive")
    : console.log("The number is Negative");

// OUTPUT: The number is Zero

// 2. Create a program that takes in two numbers and prints the larger one.
let num1 = 10;
let num2 = 20;

num1 == num2
    ? console.log("num1 is equal to num2")
    : num1 > num2
    ? console.log(`The larger among the two number is ${num1}`)
    : console.log(`The larger among the two number is ${num2}`);

// OUTPUT: The larger among the two number is 20
// Ternary Conditions ...............................

// ..................................................................................................
// ..................................................................................................

// Loops ............................................
// 1. Write a program that generates the multiplication table in the textbook format for a given number
let number = 5;

for (let i = 1; i <= 10; i++) {
    console.log(`${number} * ${i} = ${number * i}`);
}

// OUTPUT: 
// 5 * 1 = 5
// 5 * 2 = 10
// 5 * 3 = 15
// 5 * 4 = 20
// 5 * 5 = 25
// 5 * 6 = 30
// 5 * 7 = 35
// 5 * 8 = 40
// 5 * 9 = 45
// 5 * 10 = 50

// 2. Write a program that prints all the positive even numbers till the number specified.
let num = 20;

for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }  
}

// OUTPUT: 
// 2
// 4
// 6
// 8
// 10
// 12
// 14
// 16
// 18
// 20
// Loops ............................................
// Loop Interviews Questions 
// Types of Loop
// 1. Enrty Controlled Loop  
// (ex. For loop, While loop)  (wo jisme condition pahle check hota hai ya condition pahle hota hai)

// 2. Exit Controlled Loop 
// (ex. Do While loop)  (wo jisme condition ek value print hone ke check hota hai)

// While Loop Extra Concepts 
// while(condition){body}
// initialize
let i = 1;
while (i<6){
    console.log(i);
    // modifier | update
    i++
}

// While Loop Extra Concepts 
// do {
//     // code 
// } while (condition)
// ----------------------
//initializer
let t = 1;
do {
    console.log(t);
    // modifier
    t++
} while (t<6)


// Break And Countinue 
// break 
for (let i = 1; i < 50; i++) {
    console.log(i);
    if (i==10){
        break;
    }
}                                // 1,2,3,4,5,6,7,8,9,10


// for (let i = 1; i < 50; i++) {
//     if (i==10){
//         break;
//     }
//     console.log(i);
// }                             // 1,2,3,4,5,6,7,8,9


// for (let i = 1; i < 50; i++) {
//     console.log(i);
//     if (i==10){
//         break;
//     }
// }
// console.log(i);               // 1,2,3,4,5,6,7,8,9,10,10

// -------------------------------------------------------------

// Countinue  (skip the value) (mtlb wo value print hi nahi hoga)

for (let i = 1; i < 10; i++) {
    if (i==5){
        continue;
    }
    console.log(i);             // 1,2,3,4,6,7,8,9
}  

for (let i = 1; i < 10; i++) {
    console.log(i);
    if (i==5){
        continue;
    }
}                              // 1,2,3,4,5,6,7,8,9



// Print The Table of 2
let number = 2;
for (let i=1; i<=10; i++){
    console.log(number*i);
}                             // (by sir)
// or
let number = 2;
for (let i=1; i<=10; i++){
    // console.log(number + "*" + i + "=" + number*i);
    console.log(`${number}*${i} = ${number*i}`);
}
// or
for (let i=2; i<=20; i=i+2) {
    console.log(i);
}                            // // (by me)
