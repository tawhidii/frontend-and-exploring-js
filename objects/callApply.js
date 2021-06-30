const userData = {
    userName:'tawhidi bari',
    salary:120000,
    showDetails: function(){
        console.log(this.userName)
      
    },
    payBill:function(amount,tax,tips){
        const currentBalance = this.salary - amount - tax -tips
        console.log('Current Balance is:',currentBalance)
    }   
    
}
// Implementing bind 
const anotherUserData = {
    userName:'Mr hello world !!',
    salary:3000
}
// will return a fucntion where have to pass value to perform the calculaton
// const anotherBillPay = userData.payBill.bind(anotherUserData)


// implementation of call
userData.payBill.call(anotherUserData,500,60,700)

// application of apply
userData.payBill.apply(anotherUserData,[500,60,700]) // have to pass value as array




// userData.showDetails()
// console.log(userData.payBill(1000))
