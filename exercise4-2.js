for (let i =1; i <= 100; i++)
{
  const numberDivisibleBy3 = i % 3 == 0;
  const numberDivisibleBy5 = i % 5 == 0;

  if (numberDivisibleBy3 && numberDivisibleBy5)
  {
    console.log("FizzBuzz");
  }
  else if (numberDivisibleBy3)
  { 
    console.log("Fizz");
  }
  else if (numberDivisibleBy5)
  { 
    console.log("Buzz"); 
  }
  else
  {
    console.log(i);
  }
}