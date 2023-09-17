function palindrome(str) {
  let x = "";
  for (let i = 0; i < str.length; i++) {
    if (/[A-Za-z0-9]/.test(str[i])) {
      x += str[i].toLowerCase();
    }
  }

  let y = "";
  for (let i = x.length - 1; i >= 0; i--) {
    y += x[i];
  }

  return x === y;
}

console.log(palindrome("1 eye for of 1 eye.")); // Outputs: true
