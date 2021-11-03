'use strict';
// Primitive types 
let totalSalary = 230000;
let newSalary = totalSalary;
console.log(newSalary);
newSalary = 33333

// console.log(newSalary,totalSalary)

// Referrence types 

const movie = {
    movieName : 'Morbious',
    director: 'Daniel Espinosa',
    releaseYear : 2022
}


const anotherMovie = movie;
// anotherMovie.director = 'Tawhidi Bari'
console.log(anotherMovie)



// Create new Object (shallow copy - 1 level )

const movie2 = {
    movieName : 'Morbious',
    director: 'Daniel Espinosa',
    releaseYear : 2022,
    actor:['Jared Leto','Michael keaton'] // Array object will not copy as expected (solution : lodash) 
}

const copyMovie = Object.assign({},movie2)
copyMovie.director = 'Mr lol'

copyMovie.actor.push('Al Madrigal')
console.log(copyMovie) // Array(3)
console.log(movie2) // Array(3)

