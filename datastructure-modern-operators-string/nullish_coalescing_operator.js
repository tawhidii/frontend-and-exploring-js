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

// Example of Nullish Coalescing Operator 
// Nullish : null and undefined (NOT 0 or '')
restaurant.guestNumber = 0
const guests = restaurant.guestNumber ?? 10 // Nullish Coalescing Operator 
console.log(guests)