// DESCRIPTION:
// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

//SOLUTION
var countBits = function (n) {
  let count = 0;
  let binCode = '';

  while (n > 0) {
    if (n === 1 || n % 2 === 1) {
      binCode = binCode + '1';
      count = count + 1;
      console.log('n ', binCode);
    } else {
      binCode = binCode + '0';
    }
    n = Math.floor(n / 2);
  }
  return count;
};
