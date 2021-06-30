const userData = {
    userName:'tawhidi bari',
    salary:120000,
    showDetails: function(){
        console.log(this.userName)
      
    },
    payBill:function(amount){
        const currentBalance = this.salary - amount
        console.log('Current Balance is:',currentBalance)
    }   
    
}
// Implementing bind 
const anotherUserData = {
    userName:'Mr hello world !!',
    salary:3000
}

const anotherBillPay = userData.payBill.bind(anotherUserData)



// userData.showDetails()
// console.log(userData.payBill(1000))
