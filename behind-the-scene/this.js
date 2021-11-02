'use strict';

console.log(this)

// Function 
const clacAge = function(birthYear){
    console.log(2034-birthYear)
    console.log(this) // will be global window object with out strict mode
}

clacAge(1996)

// Arrow function
const clacAgeArrow = birthYear => {
    console.log(2034-birthYear)
    console.log(this) // will be show window object for `lexical this`.. 
}
clacAgeArrow(1996)


// Object example 
const bari = {
    birthYear:1996,
    calcAge : function(){
        console.log(this) // will show the whole object with associated values
        console.log(2034- this.birthYear)
    }
}

bari.calcAge() 

// Example of method borrowing 

const tawhidi = {
    birthYear:1999
}

tawhidi.calcAge = bari.calcAge // method borrowing 
tawhidi.calcAge()
