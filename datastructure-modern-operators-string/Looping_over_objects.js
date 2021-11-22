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


const keys = Object.keys(restaurant.openingHours) // getting keys from object
console.log(keys)

const values = Object.values(restaurant.openingHours) // gettings values from object
for(let {open,close}  of values) console.log(open,close)

// Example of object.entries()

const entries = Object.entries(restaurant.openingHours)
for(let entry of entries){
  const [day,{open,close}] = entry
  console.log(`On ${day} opens at ${open} and close ${close}`)
}
