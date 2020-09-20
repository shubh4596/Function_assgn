//Types of function
/*1.Anonymous Function
  2.Naming Function
  3.Function Expression
  4.IIFE Function
  5.Arrow Function*/

  //Examples of each

  //Anonymous
  //Anonymous function cannot be invoked after initialization
  //It can be used as variable assignment function , callback function , IIFE function
  //Function declaration can be hoisted but function expression cannot be hoisted

  let name = function(){
    console.log("I am javascript");
  }
  name();

  //Naming
  sum(2,3);  //----------> hoisting possible
  function sum(a,b){
    var c = a+b;
    console.log(c);
  }
 /* console.log(c); ---> Here var is function scope it cannot be accessed outside function */ 
  sum(2,3);

  //Function Expression

  /* carName(); --------------> Cannot access 'carName' before initialization (no hoisting possible)*/
  let carName = () => {
    console.log("I am maruti 800");
  }
  carName();

  //IIFE FUNCTION
  //Here anonymous function can be used as iife function
  (function(){
    console.log("Hello I am shubham and i am eagerly waiting for react");
  })();




//Programs using anonymous function

var fibonacci_series = function (n)  //anonymous function
{
  if (n===1) 
  {
    return [0, 1];
  } 
  else 
  {
    var fib = fibonacci_series(n - 1);
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
    return fib;
  }
};
console.log(fibonacci_series(10));

//------------------------------------------------------------------------------//


var factorial = function (n)  //anonymous function
{
  if (n===1) 
  {
    return 1;
  } 
  else 
  {
    var fact = factorial(n - 1);
    fact = fact*n;
    return fact;
  }
};
console.log(factorial(5));

// -------------------------------------------------------------------------------------------//


var primeOrNot = function (n)
{

  if (n===1)
  {
    console.log(`${n} is not a prime number`);
  }
  else if(n === 2)
  {
    console.log(`${n} is a prime number`);
  }
  else
  {
    for(var x = 2; x < n/2; x++)
    {
      if(n % x === 0)
      {
        console.log(`${n} is not a prime number`);
        break;
      }
        
    }
    if(x>n/2)
    {
      console.log(`${n} is a prime number`);
    }

  }
   
}
primeOrNot(12);

//------------------------------------------------------------------------------------//

let string = "I love Javascript";

let reversed_String = function(str) 
{
    return str.split("").reverse().join("");
}

console.log(reversed_String(string));  







//------------------------------------------------------------------------------------//

//Programs Using Naming Function

function primeOrNot(n)
{

  if (n===1)
  {
    console.log(`${n} is not a prime number`);
  }
  else if(n === 2)
  {
    console.log(`${n} is a prime number`);
  }
  else
  {
    for(var x = 2; x < n/2; x++)
    {
      if(n % x === 0)
      {
        console.log(`${n} is not a prime number`);
        break;
      }
        
    }
    if(x>n/2)
    {
      console.log(`${n} is a prime number`);
    }

  }
   
}
primeOrNot(12);

//---------------------------------------------------------------------------------------//

function isPalindrome(str){

  let reverseString =  str.split("").reverse().join("");
  if(reverseString === str)
  {
    console.log(`${str} is a plaindrome`);
  }
  else{
    console.log(`${str} is not a palindrome`);
  }

}
isPalindrome("malyalam");


//------------------------------------------------------------------------------------//

//Program using arrow function

let evenOrOdd = ((n) => {
   if(n%2===0)
   {
     console.log(`${n} is even`);
   }
   else{
     console.log(`${n} is odd`);
   }
});
evenOrOdd(3);


let arrayOfNumbers = [2,4,6,8,9];
let testEvenOdd = ((x) => {
  [...x].forEach((p) => {
    if(p%2===0)
    {
      console.log(`${p} is even`);
    }
    else{
      console.log(`${p} is odd`);
    }
  })
})
testEvenOdd(arrayOfNumbers);
