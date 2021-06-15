


plusMinus("onePlusBtn","oneMinusBtn","itemOneValue","productOnePrice")
plusMinus("twoPlusBtn","twoMinusBtn","itemTwoValue","productTwoPrice")
function plusMinus(plusId,minusId,itemValue,priceProduct) {
    const plusButton = document.getElementById(plusId)
    const minusButton = document.getElementById(minusId)
    const defaultValue = document.getElementById(itemValue).value
    let numberByOne = parseInt(defaultValue)
    let productPrice = document.getElementById(priceProduct).innerText
    console.log(productPrice)
    // plus
    plusButton.addEventListener('click',()=>{
        numberByOne++

        document.getElementById(itemValue).value = numberByOne
        // increase product price
        document.getElementById(priceProduct).innerText = productPrice * numberByOne

    })

    // minus 
    minusButton.addEventListener('click',()=>{
        numberByOne--
        document.getElementById(itemValue).value = numberByOne
        document.getElementById(priceProduct).innerText = productPrice * numberByOne
    })
}



