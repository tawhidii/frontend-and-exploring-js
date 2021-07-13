
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
    console.log(countryName)
}