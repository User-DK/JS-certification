function truthCheck(collection, pre) {
  let result=true;
  
  for(let i=0;i<collection.length;i++){
    
    if(result && collection[i][pre]){
        continue; 
    }

    else{
      return false;
    }
    
  }
  return result;
}

truthCheck([{name: "Pikachu", number: 25, caught: 3}, {name: "Togepi", number: 175, caught: 1}, {name: "MissingNo", number: NaN, caught: 0}], "caught")
