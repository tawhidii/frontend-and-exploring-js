function doSomeSum() {
    sum = 0
    for (let i = 0; i < arguments.length; i++) {
        const value = arguments[i];
        sum += value
    }
    console.log(sum)
}

doSomeSum(5,10,15,20,30)