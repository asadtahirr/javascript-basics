// Why pay a fortune teller when you can just program your fortune yourself?

// Store the following into variables: number of  year, job title, city name, pets,.
// Output your fortune to the screen like so: "In the year X, you will be 
//a Y, and working in Z with N pets."

// anonymous-es6
((numberOfYear, jobTittle, cityName, pets) =>
{
   
  console.log(`In the year ${numberOfYear}, you will be a ${jobTittle} and working in ${cityName} with ${pets.length} pets.`);
})(10, "fortune", "Lahore", ["dogs","Cats"] );

// Want to find out how old you'll be? Calculate it!

// Store your birth year in a variable.
// Store a future year in a variable.
// Calculate your 2 possible ages for that year based on the stored values.
// For example, if you were born in 1988, then in 2026 you'll 
// be either 37 or 38, depending on what month it is in 2026.
// Output them to the screen like so: "I will be either NN or NN in YYYY",
//  substituting the values.

//es5
function ageCalculator(birthYear, futureYear)
{
  let age = futureYear - birthYear;
  console.log(`I will be either ${age - 1} or ${age} in ${futureYear}`);

}

//anonymous es5 function.

(function (birthYear, futureYear)
{
  let age = futureYear - birthYear;
  console.log(`I will be either ${age - 1} or ${age} in ${futureYear}`);
})(2002, 2023)

// The Lifetime Supply Calculator
// Ever wonder how much a "lifetime supply" of your favourite snack is? Wonder no more!

// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

//es6
const snacksCalculator = (currentAge, maxAge, snacksPerDay) => 
{
  let snacksPerYear = snacksPerDay * 365;
  let totalSnacks =  snacksPerYear * (maxAge - currentAge);
  console.log(`You will need ${totalSnacks} to last you until the ripe old age of ${maxAge}`);
}


// The Temperature Converter
// It's getting cold out! Let's make a temperature units converter.

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."
// To convert degrees Celsius (°C) to degrees Fahrenheit (°F): Divide by 5, then multiply by 9, then add 32

// To convert degrees Fahrenheit (° F) to degrees Celsius (°C) Deduct 32, then multiply by 5, then divide by 9let


// es5
function fahrenheitConverter(celsiusValue)
{
    return ((celsiusValue / 5) * 9) + 32;
}

// es6
const celsiusConverter = (fahrenheitValue) => ((fahrenheitValue - 32) * 5) / 9;