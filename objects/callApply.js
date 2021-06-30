const userData = {
    userName:'tawhidi bari',
    salary:120000,
    showDetails: function(){
        console.log(this.userName)
      
    },
    showBalance:function(amount){
        const currentBalance = this.salary - amount
        return currentBalance
    }   
    
}

userData.showDetails()
console.log(userData.showBalance(1000))
