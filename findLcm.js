function smallestCommons(arr) {

  function findingGcd(a,b){
    let remainder=0;
     while(b!=0){
       remainder=a%b;
       a=b;
       b=remainder;    
        }return a;
}
   function findingLcm(a,b){
     return a*b/findingGcd(a,b);
   }

   arr.sort((a,b)=>a-b)
   let lcm=1;
   for(let i=arr[1];i>=arr[0];i--){
        lcm=findingLcm(lcm,i);
   }console.log(lcm)
   return lcm;
}
