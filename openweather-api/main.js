




const searchBtn = document.getElementById('search-btn')
searchBtn.addEventListener('click',()=>{
    const usercityInput = document.getElementById('user-input').value
    getApiData(usercityInput)
    document.getElementById('user-input').value = ""
})


function getApiData(cityName){
    const api_key = '6bea8f93fb55a484b90c743d01f47f9d'
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api_key}`)
    .then(response=>response.json())
    .then(data=>{
        displayData(data)
    })
    .catch(error=>alert('city not found !!'))
}


function displayData(apiData){
    const image = document.getElementById('image-weather')
    const city = document.getElementById('city-name')
    const description = document.getElementById('description')
    const tempareature = document.getElementById('temperature')
    apiData.weather.map(wValue=>{
        image.src = `https://openweathermap.org/img/wn/${wValue.icon}@2x.png`
        description.innerText = wValue.description
    })
    city.innerText = apiData.name
    tempareature.innerText = parseInt(apiData.main.temp) - 273

}