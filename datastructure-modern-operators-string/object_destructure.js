'use strict';

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
    orderDelivery:function({time,price,address,startIndex,mainIndex}){
        console.log(`Order recieved !! ${this.starterMenu[startIndex]}
        and ${this.mainMenu[mainIndex]}
        will be delivered to ${address} at ${time}. Delivery charge ${price}`)
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


// Basic Destructure 
// const {name,categories,starterMenu} = restaurant
// console.log(name,categories,starterMenu)

// Set variable name while destructuring
const {name:restaurantName,location:loc,mainMenu:menu} = restaurant
// console.log(restaurantName,loc,menu)

// Mutating variables
// let a = 111
// let b = 222
// const obj = {
//     a:1,
//     b:2,
//     c:3
// }
// ({ a, b} = obj)
// console.log(a,b)

// Defaults variables 

const {name='Abc restaurent',categories:allCategory = ['None','None']} = restaurant
// console.log(name,allCategory)

// Nested example 
const {fri:{open:openingHour,close:closingHour}} = restaurant.openingHours

restaurant.orderDelivery({
    time:'12.00',
    address:'Shukhnagar',
    price:1200,
    startIndex:1,
    mainIndex:1
})

restaurant.orderFood(1,1)