'use strict';
// VARIABLES
// console.log(age)
// console.log(nick_name) // TDZ

// console.log(salary)
let nick_name = 'tawhidi'
var age = 27
const salary = 3400


// FUNCTIONS

console.log(funcExpr(2,3)) // will work for hoisting 
// console.log(addExp)
// console.log(arrowExp(2,3))
function funcExpr(a,b){
     return a+b
 }

// var will not work here coz it will declare undefined
const addExp = function(a,b){
     return a+b
 }

const arrowExp = (a,b) =>{
    return a+b

}

// Example 

var x = 0 // will add property in window object called 'x'
let y = 1
const z = 2


