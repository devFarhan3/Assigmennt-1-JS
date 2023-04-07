// 1. Write a JavaScript program that accepts two numbers in two prompts and
// displays the larger one in the console.

let num1, num2;
num1 = window.prompt("Input the First integer", "0");
num2 = window.prompt("Input the second integer", "0");
if (parseInt(num1, 10) > parseInt(num2, 10)) {
    console.log("The larger of " + num1 + " and " + num2 + " is " + num1 + ".");
}
else
    if (parseInt(num2, 10) > parseInt(num1, 10)) {
        console.log("The larger of " + num1 + " and " + num2 + " is " + num2 + ".");
    }
    else {
        console.log("The values " + num1 + " and " + num2 + " are equal.");
    }


//     2. Write a JavaScript conditional statement to find the sign of a number. Display
// an alert box with the specified sign.

let num = prompt("Enter a number:");
if (num > 0) {
    alert("The number is positive.");
} else if (num < 0) {
    alert("The number is negative.");
} else {
    alert("The number is zero.");
}


// 3. Write a JavaScript program that accepts five numbers in five prompts and
// displays the larger one in the console.
// Ask the user for five numbers
let num1 = prompt("Enter the first number:");
let num2 = prompt("Enter the second number:");
let num3 = prompt("Enter the third number:");
let num4 = prompt("Enter the fourth number:");
let num5 = prompt("Enter the fifth number:");

// Convert the input strings to numbers
num1 = parseFloat(num1);
num2 = parseFloat(num2);
num3 = parseFloat(num3);
num4 = parseFloat(num4);
num5 = parseFloat(num5);

// Determine the largest number
let largest = num1;
if (num2 > largest) {
    largest = num2;
}
if (num3 > largest) {
    largest = num3;
}
if (num4 > largest) {
    largest = num4;
}
if (num5 > largest) {
    largest = num5;
}
// Display the largest number in the console
console.log("The largest number is " + largest);


// 4. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it
// will check if the current number is odd or even, and display a message to the
// screen.

for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        console.log(i + " is even");
    } else {
        console.log(i + " is odd");
    }
}


// 5. Write a JavaScript program which computes the average marks of the
// following students Then, this average is used to determine the corresponding
// grade.
let students = [['Farhan', 80], ['usman', 77], ['salman', 88], ['noman', 95], ['zeeeshan', 68]];
let Avgmarks = 0;
for (var i = 0; i < students.length; i++) {
    Avgmarks += students[i][1];
    let avg = (Avgmarks / students.length);
}
console.log("Average grade: " + (Avgmarks) / students.length);
if (avg < 60) {
    console.log("Grade : F");
}
else if (avg < 70) {
    console.log("Grade : D");
}
else if (avg < 80) {
    console.log("Grade : C");
} else if (avg < 90) {
    console.log("Grade : B");
} else if (avg < 100) {
    console.log("Grade : A");
}

// 6. Write a JavaScript program which iterates the integers from 1 to 100. But for
// multiples of three print "Fizz" instead of the number and for the multiples of five
// print "Buzz". For numbers which are multiples of both three and five print
// "FizzBuzz".

for ( let i = 1; i <= 100; i++ )
{
  if ( i%3 === 0 && i%5 === 0 )
  {
    console.log( i + " FizzBuzz" );
  }
  else if ( i%3 === 0 ) 
  {
    console.log(i+ " Fizz" );
  }
  else if ( i%5 === 0 ) 
  {
    console.log(i+ " Buzz" );
  }
  else
  {
    console.log(i);
  }
}


// 7. Write a JavaScript program to construct the following pattern, using a nested
// for loop.

var x,y,chr;
for(x=1; x <=6; x++)
{
   for (y=1; y < x; y++)
     {
    chr=chr+("*");        
      }
 console.log(chr);
 chr='';    
}
