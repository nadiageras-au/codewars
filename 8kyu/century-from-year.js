// ??? DESCRIPTION:
// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// !!! SOLUTION

function century(year) {
  if (year < 100) {
    return 1;
  } else {
    if (year % 100 > 0) {
      return Math.floor(year / 100) + 1;
    } else return Math.floor(year / 100);
  }
}

console.log(century(1984));
console.log(century(84));
console.log(century(18731984));
