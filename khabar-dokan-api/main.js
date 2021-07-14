const getMealData = () =>{
    const searchBy = document.getElementById('meal-input').value
    console.log(searchBy)
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchBy}`)
        .then(res=>res.json())
        .then(data=>displayMealData(data))
        .catch(err=>{
            const mealCard = document.getElementById('meal-card')
            mealCard.innerHTML = "<h1>No meal Item Found !! </h1>"
        })
}

const displayMealData =  data =>{
    const mealCard = document.getElementById('meal-card')
    mealCard.innerHTML = ""
    data.meals.map(meal=>{
        console.log(meal)
        mealCard.innerHTML += `
        <div class="meal-item" onclick="mealDetails('${meal.idMeal}')">
            <img src="${meal.strMealThumb}">
            <h2>${meal.strMeal}</h2>
        <div>
            `

    })
}

const mealDetails = (mealId) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)

}
