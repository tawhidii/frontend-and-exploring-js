
const personObj= {
    name:'bari',
    getName:function(){
        console.log(this.name)
    }
}

const anotherPersonObj = {
    name:'tawhidi'
}
anotherPersonObj.getName = personObj.getName 
anotherPersonObj.getName() // depends who stays at left