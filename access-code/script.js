
let keyArr = []
function getkeypadValue(btnClick,callback){
    let keyValue = ''
    if(btnClick === 'pop'){
        keyArr.pop()
    }else if(btnClick === 'clear'){

        keyArr = []
    }else{
        keyValue = document.getElementById(btnClick).innerText
        keyArr.push(keyValue)
    }
    document.getElementById('userPin').value =  keyArr.join('')  
}


function verifyPin() {
    const userInput = document.getElementById('userPin').value
    const generatedPin = document.getElementById('generatedPin').value
    if(parseInt(userInput) === parseInt(generatedPin)){
        document.getElementById('success').style.display = "block"
        document.getElementById('userPin').value = ""
    }
    
}



function generatePin() {
    const randomizeValue = Math.floor(Math.random() * 10000)
    document.getElementById('generatedPin').value  = randomizeValue
}




