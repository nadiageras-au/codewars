// DESCRIPTION:
// Create a function that takes an integer as an argument and returns
//  "Even" for even numbers or "Odd" for odd numbers.

//SOLUTION

function evenOrOdd(number) {
  let result = '';
  if (Math.abs(number) % 2 === 1) {
    result = 'Odd';
  } else {
    result = 'Even';
  }
  return result;
}

console.log(evenOrOdd(34));
