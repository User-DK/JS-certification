function rot13(str) {
  let str1 = "";
  for (let i = 0; i < str.length; i++) {
    if (/[A-Z]/.test(str[i])) {
      if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 77) {
        str1 += String.fromCharCode(str.charCodeAt(i) + 13);
      } else if (str.charCodeAt(i) >= 78 && str.charCodeAt(i) <= 90) {
        str1 += String.fromCharCode(str.charCodeAt(i) - 13);
      }
    } else {
      str1 += str[i];
    }
  }
  return str1;
}

console.log(rot13("SERR PBQR PNZC")); // Output: "FREE CODE CAMP"
