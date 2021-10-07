'use strict';

const  secretNumber= Math.trunc(Math.random()* 20) + 1
// document.querySelector('.number').textContent = secretNumber


const checkingNumber = (secretNumber) => {
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
        }
        if(guessNumber === secretNumber){
            message.textContent = '🎉 correct' 
            document.querySelector('body').style.backgroundColor = 'green'
        }
        

    })
}

checkingNumber(secretNumber)
