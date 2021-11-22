const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
        ],
        [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
    'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
    },
};

// 1
function printPlayer(playerArr){
    // first : value , second : index , 3rd full arr
    playerArr.map((playername,goal)=>{
        console.log(`Goal ${goal+1}:${playername} `);
    })
}
printPlayer(game.scored)

// 2
// console.log(Object.entries(game.odds))
// let sumOfodd = 0
// for(let [value] of Object.entries(game.odds)){
//     sumOfodd += game.odds[value]
// }
// const average = (sumOfodd / 3).toFixed(2)
// console.log(average)
// 2 - alternative using 

const odds = Object.entries(game.odds)
const average = (odds.reduce((acc,[value])=>{
    return acc + game.odds[value]
},0)/3).toFixed(2)
console.log(average)
//3
Object.entries(game.odds).map(([team,odd])=>{
    const teamStr =  team === 'x' ? 'draw' : `vitory ${game[team]}`
    console.log(`Odd of ${teamStr} : ${odd}`)
})