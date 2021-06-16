


plusMinus("onePlusBtn","oneMinusBtn","itemOneValue","productOnePrice")
plusMinus("twoPlusBtn","twoMinusBtn","itemTwoValue","productTwoPrice")
function plusMinus(plusId,minusId,itemValue,priceProduct) {
    const plusButton = document.getElementById(plusId)
    const minusButton = document.getElementById(minusId)
    const defaultValue = document.getElementById(itemValue).value
    let numberByOne = parseInt(defaultValue)
    let productPrice = document.getElementById(priceProduct).innerText
    // plus
    plusButton.addEventListener('click',()=>{
        numberByOne++

        document.getElementById(itemValue).value = numberByOne
        // increase product price
        document.getElementById(priceProduct).innerText = productPrice * numberByOne
        let plusPrice = document.getElementById(priceProduct).innerText
        let plusPriceNum = parseInt(plusPrice)
        // sub total after plus
        document.getElementById('subTotal').innerText = productPrice * numberByOne 
        // total after plus
        document.getElementById('totalPay').innerText = productPrice * numberByOne

    })

    // minus 
    minusButton.addEventListener('click',()=>{
        numberByOne--
        document.getElementById(itemValue).value = numberByOne
        document.getElementById(priceProduct).innerText = productPrice * numberByOne
    })

    
}



