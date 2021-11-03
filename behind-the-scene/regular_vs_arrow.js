// All pitfalls
var firstName = 'Tawhidi' // will add property on global window object 
const bari = {
    firstName: 'Khademul',
    birthYear:1996,
    calcAge : function(){
        console.log(this)
        console.log(2034- this.birthYear)
    },
    greet: () => { // can't get'this' here , to get use function expression 
        console.log(this)
        console.log(`Hey ${this.firstName}`)
    }
}

bari.greet()