function applyCallback(name,age,job){
    job();
    console.log('My name is :',name);
    console.log('My age is :',age);
    
}

function jobProgrammer(){
    console.log('I am a programmer !!');
}

function creativeDesigner(){
    console.log('I am a creative designer !!');
}


applyCallback('Tawhidi',28,jobProgrammer)
applyCallback('Lisa',26,creativeDesigner)

