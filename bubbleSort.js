var a = [33, 103, 3, 726, 200, 984, 198, 764, 9];
  function bubble(a){
    var swap ; 
    
    do {
      swap = false;
      
      for(var i=0; i<a.length-1; i++){
        if(a[i] > a[i+1]){
          var temp = a[i];
          a[i] = a[i+1];
          a[i+1] = temp;
          swap = true;
        }
      }
      
    }while(swap)
  }
    bubble(a); 
  console.log(a);
