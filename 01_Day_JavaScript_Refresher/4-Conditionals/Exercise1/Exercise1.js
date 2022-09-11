//(1)
let userInput = prompt("Enter your age");
console.log("Enter your age: "+userInput);

if(userInput >= 18)
    console.log("You are old enough to drive");
else
    console.log("You are left with "+(18-userInput) +" years until you can drive");


//(2)
let yourAge = prompt("Enter your age");
let myAge = 23;

if(yourAge>myAge)
    console.log("You are "+ (yourAge-myAge) +" years older than me");
else
    console.log("I am "+ (myAge-yourAge) +" years older than you");


//(3)
let a=4
let b=3

//(3.1)
if(a>b)
    console.log('a is greater than b')
else
    console.log('a is less than b')

//(3.2)
a>b
  ? console.log('a is greater than b')
  : console.log('a is less than b')

//(4)
let evenOrOdd = prompt('Please enter a number and I will tell you if it is even or odd');

if (evenOrOdd % 2 == 0)
    console.log(evenOrOdd + ' is an even number');
else
    console.log(evenOrOdd + ' is an odd number');