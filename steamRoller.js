function steamrollArray(arr) {
  let arr1=arr.join();
  arr1=arr1.split(",")
  console.log(arr1)
  let result=[];
  for(let i=0;i<arr1.length;i++){
    if (!isNaN(parseFloat(arr1[i]))) {
     result.push(parseFloat(arr1[i]));
  } 
  else if(arr1[i]== '[object Object]'){
     result.push({});
  }
  else if(arr1[i]==''){
    continue;
  }
  else{
    result.push(arr1[i]);
  }
  }
    console.log(result)
      //  JSON.stringify(x);
  return result

  
}


steamrollArray([1, [], [3, [[4]]]]) 
