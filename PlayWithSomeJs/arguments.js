function doSomeSum() {
    sum = 0
    for (let i = 0; i < arguments.length; i++) {
        const value = arguments[i];
        sum += value;
    }
    function logSomething(saySomething) {
        console.log(saySomething);
    }
    logSomething('I am saying something');
    return sum;

}

let result = doSomeSum(5,10,15,20,30);
console.log(result);