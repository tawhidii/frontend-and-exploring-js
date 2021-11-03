'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  orderFood : function(startIndex,mainIndex){
    return [this.starterMenu[startIndex],this.mainMenu[mainIndex]]
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};





let array = [23]

// let [first,second] = array // skip in destructure, we will get index 0 and index 3 value
// console.log(first,second) 

const [first_,last_] = restaurant.orderFood(1,1)
// console.log(first_,last_)

// let [zero,one] = array
// // console.log(zero,one)
// // let temp = zero
// // zero = one
// // one = temp



// Default value 
let [first=1,second=1,third=1] = array // Default 
// console.log(first,second,third)

// console.log(first,second)

let array2 = [1,2,[3,5]]
const [x,,[y,z]] = array2 // nested example 
console.log(x,y,z)

