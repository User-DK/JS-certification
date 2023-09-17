function convertToRoman(x) {
    if (x <= 0) return "";
    
    if (x >= 1000) return "M" + convertToRoman(x - 1000);
    if (x >= 900) return "CM" + convertToRoman(x - 900);
    if (x >= 500) return "D" + convertToRoman(x - 500);
    if (x >= 400) return "CD" + convertToRoman(x - 400);
    if (x >= 100) return "C" + convertToRoman(x - 100);
    if (x >= 90) return "XC" + convertToRoman(x - 90);
    if (x >= 50) return "L" + convertToRoman(x - 50);
    if (x >= 40) return "XL" + convertToRoman(x - 40);
    if (x >= 10) return "X" + convertToRoman(x - 10);
    if (x >= 9) return "IX" + convertToRoman(x - 9);
    if (x >= 5) return "V" + convertToRoman(x - 5);
    if (x >= 4) return "IV" + convertToRoman(x - 4);
    if (x >= 1) return "I" + convertToRoman(x - 1);
}
console.log(convertToRoman(35))
