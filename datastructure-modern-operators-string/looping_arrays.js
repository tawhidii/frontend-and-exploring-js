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


const fullMenu = [...restaurant.mainMenu,...restaurant.starterMenu]
// looping arrays 
// for(const menu of restaurant.mainMenu) console.log(menu)
// Printing value with index 
for(let [index,item] of fullMenu.entries()){
    console.log(`Item No ${index+1}: ${item}`)
}

console.log(...fullMenu.entries())
