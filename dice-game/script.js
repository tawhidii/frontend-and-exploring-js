'use strict';

// Selecting elements 
const score0Element = document.querySelector('#score--0')
const score1Element = document.getElementById('score--1')
const diceElement = document.querySelector('.dice')
const btnRoll = document.querySelector('.btn--roll')
const playerOne = document.querySelector('.player--0')
const playerTwo = document.querySelector('.player--1')
// current score 
let currentScore = 0
let  activePlayer = 0



// Starter condition
score0Element.textContent = 0
score1Element.textContent = 0
diceElement.classList.add('hidden')

// dice display function

const dispalyDice = (number) => {
    diceElement.classList.remove('hidden')
    switch(number){
        case 1:
            diceElement.src = 'dice-1.png'
            break
        case 2:
            diceElement.src = 'dice-2.png'
            break
        case 3:
            diceElement.src = 'dice-3.png'
            break
        case 4:
            diceElement.src = 'dice-4.png'
            break
        case 5:
            diceElement.src = 'dice-5.png'
            break
        case 6:
            diceElement.src = 'dice-6.png'
    }

}



// Roll dice 
btnRoll.addEventListener('click',()=>{
    const generateNumber = Math.trunc(Math.random() * 6) + 1
    dispalyDice(generateNumber)
    if(generateNumber !==1){
        currentScore += generateNumber
        document.getElementById(`current--${activePlayer}`).textContent = currentScore
    }else{
        document.getElementById(`current--${activePlayer}`).textContent = 0
        activePlayer = activePlayer=== 0 ? 1 : 0
        currentScore = 0
        playerOne.classList.toggle('player--active')
        playerTwo.classList.toggle('player--active')
    }
})


