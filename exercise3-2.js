let userWantsToCheckBalance = true;
let balance = 1000;
let accountActive = false;

if (userWantsToCheckBalance)
{
  if (accountActive && balance > 0)
  {
    console.log(`You balance is $${balance}`);
  }
  else
  {
    if (!accountActive)
    {
      console.log("Your account is no longer active");
    }
    else
    {
      if (balance > 0)
      {
        console.log("You account is empty");
      }
      else
      {
        console.log("Your balance is negative. Please contact the bank");
      }
    }
  }
}
else
{
  console.log("Have a nice day");
}
