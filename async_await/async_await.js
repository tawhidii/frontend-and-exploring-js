function loadStarWars(){
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(data=>{
            displayData(data)
        })
}

loadStarWars()
function displayData(data){
    console.log(data)
    const parentNode = document.getElementById('swarsList')
    for (let i = 0; i < data.length; i++) {
        const warsList = document.createElement('li')
        warsList.innerText = data[i].name
        parentNode.appendChild(warsList)
    }
}

