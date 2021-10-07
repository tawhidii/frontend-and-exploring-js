'use strict';

const  secretNumber= Math.trunc(Math.random()* 20) + 1
console.log(secretNumber)
let score = Number(document.querySelector('.score').textContent)
let highScore = Number(document.querySelector('.highscore').textContent)
console.log(highScore)





const checkingNumber = (secretNumberm,score,highScore) => {
    const checkButton = document.querySelector('.check')
    checkButton.addEventListener('click',()=>{
        const message = document.querySelector('.message')
        const guessNumber = Number(document.querySelector('.guess').value)
        if(!guessNumber){
            message.textContent = 'Please insert a number 🙏🙏 ' 
        }
        else{
            guessNumber>secretNumber ? 
                message.textContent = '📈 Guess is high !!':
                message.textContent = '📉 Guess is low !!' 
                score--
                document.querySelector('.score').textContent = score
        }
        if(guessNumber === secretNumber){
            message.textContent = '🎉 Hurrah you win the game !!' 
            document.querySelector('body').style.backgroundColor = 'green'
            document.querySelector('.number').textContent = secretNumber
            if(score>highScore){
                highScore = score
                document.querySelector('.highscore').textContent = highScore
            }
            
        }
        if(score < 1 ){
            message.textContent = 'You lost the game 😿 !!'
            checkButton.disabled = true
        }

    })
}

checkingNumber(secretNumber,score,highScore)

const resetGame = () => {
    const againBtn = document.querySelector('.again')
    againBtn.addEventListener('click',()=>{
        location.reload()
    })

}
resetGame()