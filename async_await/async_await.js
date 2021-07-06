// function loadStarWars(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then(response=>response.json())
//         .then(data=>{
//             displayData(data)
//         })
// }

// loadStarWars()

async function loadData(){
    const response = await fetch('https://swapi.dev/api/people/?page=2')
    const data = await response.json()
    
    displayData(data)
}
loadData()
function displayData(data){
    const parentNode = document.getElementById('swarsList')
    data.results.map(value=>{
        const nameList = document.createElement('li')
        nameList.innerText = value.name
        parentNode.appendChild(nameList)
    })
}

// const  greetings = async (name) => {
//     return `Hello ${name}`
// }

// const gret = greetings('bari')
// gret.then(response=>console.log(response))