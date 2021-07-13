
fetch('https://restcountries.eu/rest/v2/all')
.then(response=>response.json())
.then(data=>{
    displayData(data)
})
.catch(err=>console.log(err))


function displayData(data){

    data.forEach(country=> {
    
        const mainDiv = document.getElementById('country-list')
        const countryDiv = document.createElement('div')
        const counties = `
            <h3 class="country-name">${country.name}</h3>
            <img class="flag" src="${country.flag}">
            <p>${country.capital}</p>
            <button class="btn btn-primary" onclick="countryDetails('${country.name}')">Details</button>
            `
        countryDiv.className = 'single-country'
        countryDiv.innerHTML = counties
        mainDiv.appendChild(countryDiv)
    });

}



function countryDetails(countryName){
    fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
    .then(response=>response.json())
    .then(data=>renderDetails(data[0]))
}


const renderDetails = country => { 
    console.log(country)
    const mainDiv = document.getElementById('country-list')
    mainDiv.style.display = "none"
    const countryDetailDiv = document.getElementById('country-details')
    countryDetailDiv.innerHTML = `
        <h1>Country Name : ${country.name} </h1>
        <h2>Population : ${country.population} </h2>
        <h2> Area : ${country.area}</h2>
        <img src="${country.flag}">
    `


}