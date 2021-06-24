
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

    }else{
        document.getElementById('wrong').style.display = "block"
        document.getElementById('userPin').value = ""
        const attempt = document.getElementById('attempt').innerText 
        if(parseInt(attempt)>0){
            document.getElementById('attempt').innerText = parseInt(attempt) - 1
        }
       
    }


    
}



function generatePin() {
    const randomizeValue = Math.floor(Math.random() * 10000)
    document.getElementById('generatedPin').value  = randomizeValue
}




