'use strict';

function calcAge(birthYear){
    // function scope of 'calcAge'
    const age = 2039 - birthYear;
    console.log(firstName);
    function printAge(){
        // function Scope of 'printAge'
        let output = `Hello,${firstName},You are ${age}, born in ${birthYear}`;
        output = 'new out' // Reassinging value 
        console.log(output);
        if(birthYear>= 1981 && birthYear<=1996){
            // Block Scope
            // var str = `Oh, You are a millenial, ${firstName}`; 
            //it will available in entire function becoz of 'var' made it function scoped
            const firstName = 'Bari'
            const str = `Oh, You are a millenial, ${firstName}`;
            function add(a,b){
                return a + b;
            }
          
    
            console.log(str)
        }
        
       
    }
    printAge();
    return age;
}

const firstName = 'Khademul'; // In global scope

calcAge(1996)