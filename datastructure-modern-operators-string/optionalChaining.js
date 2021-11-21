
const weekDays = ['sat','sun','mon','tue','thu','fri','wed']

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
      [weekDays[4]]: {
        open: 12,
        close: 22,
      },
      [weekDays[5]]: {
        open: 11,
        close: 23,
      },
      [weekDays[0]]: {
        open: 0, // Open 24 hours
        close: 24,
      },
    },
  };

 const days =  ['sat','sun','mon','tue','thu','fri','wed']

for(let day of days){
    // Example of optional chaininh 
    const open = restaurant.openingHours[day]?.open ?? 'close'
    console.log(`On ${day} open at ${open}`)
}
// On methods
console.log(restaurant.orderFood?.(1,2) ?? 'Method not found')
console.log(restaurant.hello?.() ?? 'Method not found')

// On Arrays 
const users = [
    {name:'Bari',salary:27000}
]
console.log(users[1]?.name ?? 'User name not exists!!')
