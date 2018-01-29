function findOnlyUpperCaseChar(some){
  
  console.log(some);
  
  var a = some.split("").sort().join("");
  
  console.log(a);
  var someLen = a.length;

  
  for(var i=0; i < someLen; i++){

    if(a.charAt(i) === a.charAt(i).toUpperCase()){
    
      var sortingg = a.charAt(i);
      console.log(sortingg);

    }
  }
     
}
 

findOnlyUpperCaseChar("AppleBoyToyStar");
