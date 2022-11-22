let number = 12;
console.log(number);
for (let i = Math.ceil(number/2); i > 0; i--)
{
    if (number % i == 0) console.log(i);
}