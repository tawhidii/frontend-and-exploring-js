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


// Use any data type and return any data type called short circuting 
// Here truthy value will print first
console.log( true || false)
console.log('' || 'string')
console.log('' || false || undefined || 0 || 'xoxo' || 123) // only frist truthy value will print here ...

// Example with OR 

// Normally we do 
// restaurant.guestOrder = 20
const guestOrder = restaurant.guestOrder ? restaurant.guestOrder : 10
console.log(guestOrder)

// Using OR 
const guestOrder2 = restaurant.guestOrder || 10
console.log(guestOrder2)

// Example with AND 
console.log( undefined && 12) // will show falsy value first
console.log(12 && 'hello' && 0 && undefined) // will show the first falsy value

// Normally what we do
if(restaurant.orderPizza){
    restaurant.orderPizza('Mashroom','Cheese','Letus')
}

// with AND
restaurant.orderPizza && restaurant.orderPizza('Mashroom','Cheese','Letus')
