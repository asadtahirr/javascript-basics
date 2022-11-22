// Write an if else statement that prints out `Hello World` in one of three chosen languages (e.g. "Spanish", "French", "English") based on the value of a variable. If no language is set, the default output should be english.

// Make sure the if statement works with all 3 chosen languages, and a select default language if on has not been set. You will test by changing the value of the variable that you set.

let language = "spanish";

function greet(language)
{
  if(language.toLowerCase() === "spanish")
  {
    console.log("Hello World in Spanish")
  }
  else if (language.toLowerCase() === "french")
  {
    console.log("Hello World in French")
  }
  else
  {
    console.log("Hello World")
  }
}

// greet(language);

//Using the letter grade/percentage table on your course outline, write a set of `if/else` statements that will output the correct letter grade given decimal value that you will set in a variable.

//Try changing the value changing the variable to a variety of decimal numbers to make sure they all work.


let marks = 70;

const gradeCalculator = (marks) =>
{
  // if (marks >= 90)
  // {
  //   console.log("A+");
  // }
  // else if (marks >= 80)
  // {
  //   console.log("A");
  // }
  // else if (marks >= 75)
  // {
  //   console.log("B+");
  // }
  // else if (marks >= 70)
  // {
  //   console.log("B");
  // }
  // else if (marks >= 65)
  // {
  //   console.log("C+");
  // }
  // else if (marks >= 60)
  // {
  //   console.log("C");
  // }
  // else if (marks >= 50)
  // {
  //   console.log("D");
  // }
  // else
  // {
  //   console.log("F");
  // }

  if (marks < 50)
  {
    console.log("F");
  }
  else if (marks >= 50 && marks <=59)
  {
    console.log("D");
  }
  else if (marks >= 60 && marks <= 64)
  {
    console.log("C");
  }
  else if (marks >= 65 && marks <=69)
  {
    console.log("C+");
  }
  else if (marks >= 70 && marks <= 74)
  {
    console.log("B");
  }
  else if (marks >= 75 && marks <= 79)
  {
    console.log("B+");
  }
  else if (marks >= 80 && marks <= 89)
  {
    console.log("A");
  }
  else
  {
    console.log("A+");
  }
} 

// gradeCalculator(marks);


// Write an `if...else` statement that:

// prints "even" if the number is an even number
// prints "odd" if the number is an odd number
// **Hint:** Use the `%` (modulo) operator to determine if a number is even or odd. The modulo operater takes two numbers and returns the remainder when the first number is divided by the second one: console.log(12 % 3); // prints 0 because 12 divided by 3 has no remainder console.log(10 % 4); // prints 2 because 10 divided by 4 has a remainder of 2
// Make sure to test your code with different values.

const isEven = (n) => 
{
  if (n % 2 === 0)
  {
    console.log("Number is even");
  }
  else
  {
    console.log("Number is odd");
  }
} 


// Musical groups have special names based on the number of people in the group.

// For example, a "quartet" is a musical group with four musicians. Barbershop quartets were a popular type of quartet in the early 1900s and featured four singers made up of a lead, tenor, baritone, and bass.

// Directions:
// Write a series of conditional statements that:

// Prints "not a group" if musicians is less than or equal to 0
// Prints "solo" if musicians is equal to 1
// Prints "duet" if musicians is equal to 2
// Prints "trio" if musicians is equal to 3
// Prints "quartet" if musicians is equal to 4
// Prints "this is a large group" if musicians is greater than 4
// Test your code with different values. For example,

// If musicians equals 3, then "trio" should be printed to the console.
// If musicians equals 20, then "this is a large group" should be printed to the console.
// If musicians equals -1, then "not a group" should be printed to the console.
// Be sure to watch out for any extra or missing characters (including spaces or punctuation marks) in your output string as well!

const determineMusicalGroup = (n) =>
{
  if (n <= 0)
  {
    console.log("not a group");
  }
  else if(n === 1)
  {
    console.log("solo");
  }
  else if (n === 2)
  {
    console.log("duet");
  }
  else if (n === 3)
  {
    console.log("trio");
  }
  else if (n === 4)
  {
    console.log("quartet");
  }
  else if(n > 4)
  {
    console.log("this is a large group");
  }
}
determineMusicalGroup(-10);
determineMusicalGroup(0);
determineMusicalGroup(1);
determineMusicalGroup(2);
determineMusicalGroup(3);
determineMusicalGroup(4);
determineMusicalGroup(5);