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




// Rest pattern example 

// Array 
const [a,b,...others] = [1,3,4,5,6,7,79]
console.log(a,b,others)

console.log([...restaurant.mainMenu,...restaurant.starterMenu])
const [pizza,,rositto,...otherItem] = [...restaurant.mainMenu,...restaurant.starterMenu]

console.log(pizza,rositto,otherItem)


// Objects 
const {sat,...othersDay} = restaurant.openingHours
console.log(sat,othersDay)

// As function arguments rest parameters 
function doSum(...numbers){
  let sum = 0
  for(let i=0;i<numbers.length;i++) sum += numbers[i]
  console.log(sum)
}

doSum(1,2,3,4,5,6)