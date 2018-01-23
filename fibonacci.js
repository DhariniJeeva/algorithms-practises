//fibonacci using recursion

function fibo(n){
  if(n <2) return (n-1)+(n-2)
  else return 1
}

//using while loop not recursion
function fibonacci(num){
  var a = 1, b = 0, temp;

  while (num >= 0){
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }

  return b;
}
