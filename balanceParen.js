function parenthesesChecker(symbols){

    let stack = [],
       
        symbol, top,
        opens = "([{",
        closers = ")]}";

    for (var i =0; i < symbols.length; i++){
        symbol = symbols.charAt(i);
        if (opens.indexOf(symbol) >= 0){
            stack.push(symbol);
            console.log(`open symbol - stacking ${symbol}`);
        } else {
            console.log(`close symbol ${symbol}`);
            if (stack.length == 0){
                console.log('Stack is empty, no more symbols to pop and compare');
            } else {
                top = stack.pop();
                //if (!matches(top, symbol)){
                if (!(opens.indexOf(top) === closers.indexOf(symbol))) {
                    console.log(`poping symbol ${top} - is not a match compared to ${symbol}`);
                } else {
                    console.log(`poping symbol ${top} - is is a match compared to ${symbol}`);
                }
            }
        }
    }
    if (stack.length ==0){
        return true;
    }
    return false;
}

console.log(parenthesesChecker('{(])}')); //true