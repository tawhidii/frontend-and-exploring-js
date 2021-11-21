
const weekDays = ['mon','tues','wed','thrus','fri','sat','sun']
const openingHours = {
    // Impementing compute
    [weekDays[3]]: {
      open: 12,
      close: 22,
    },
    [weekDays[4]]: {
      open: 11,
      close: 23,
    },
    [weekDays[5]]: {
      open: 0, // Open 24 hours
      close: 24,
    },
}

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    // openingHours:openingHours, // Older way 
    openingHours,
    orderFood : function(startIndex,mainIndex){
      return [this.starterMenu[startIndex],this.mainMenu[mainIndex]]
    }, // Older syntanx for method property
    orderFood(startIndex,mainIndex){
      return [this.starterMenu[startIndex],this.mainMenu[mainIndex]]
    }, // Newer syntanx for method property
    
};



console.log(openingHours)