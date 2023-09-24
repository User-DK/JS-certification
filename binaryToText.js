// How to Convert Binary to Text
// 1.Get binary byte.
// 2.Convert binary byte to decimal.
// 3.Get character of ASCII code from ASCII table.
// 4.Continue with next byte.
function toDecimal(x){
  let i=0;
  let sum=0
   while(x>0){
     sum+=(x%10)*Math.pow(2,i);
     x=Math.floor(x/10);
     i++;
     }
     return sum;
}


function binaryAgent(str) {
  let arr=str.split(" ").map(x=>parseFloat(x));
  let arr1=arr.map(toDecimal)
  arr1=arr1.map(x=>String.fromCharCode(x))
  console.log(arr1.join(""))
  return arr1.join("")
  return str;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
