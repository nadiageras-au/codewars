function fib(n) {
  let arrF = [0, 1];
  let str = '';
  if (isNaN(n) || n <= 0 || n % 1 != 0) {
    str = '';
  } else if (n === 1) {
    str = '0';
  } else {
    for (let i = 2; i < n; i++) {
      arrF[i] = arrF[i - 2] + arrF[i - 1];
    }
    str = arrF.toString().replace(/,/g, ' ');
  }

  return str;
}

console.log(fib(0));
