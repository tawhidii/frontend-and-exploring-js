// Data needed for first part of the section
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    orderPizza:function(ing1,ing2,ing3){
        console.log(`Here is your pizza with ${ing1},${ing2} and ${ing3}`)
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



let myArray = [1,2,3,4,5,77]

let newArray = [44,55,...myArray] // Add new item infront of array using spread operator
console.log(newArray)

// print all array items individual
console.log(...newArray)

// copy array 
const newMenu = [...restaurant.mainMenu]

// Joint two array 
const menu = [...restaurant.starterMenu,...restaurant.mainMenu]
// console.log(menu)
// Iterables in JavaScript :  Array, String , Maps, Sets . NOT object 

// Use spread operator in String 
const myName = 'Bari'
const newMyName = [...myName,'T.']
console.log(newMyName)

// use spread operator in function as argument 
const ingrediant = [
    prompt('Lets make own pizza ? Enter ingreadent 1:'),
    prompt('Enter ingrediant 2: '),
    prompt('Enter ingrediant 3:')
]
restaurant.orderPizza(...ingrediant)

// ES-2018 feature of spread operator using in Object 
const copyRestaurent = {...restaurant} // shallow copy 
console.log(copyRestaurent)

const newRestaurent= {owner:'Bari',foundingYear:2019,...restaurant}
console.log(newRestaurent)