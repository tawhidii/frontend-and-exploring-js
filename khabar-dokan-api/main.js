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
    .then(response=>response.json())
    .then(data=>{
        const search = document.getElementById('search')
        search.style.display = "none"
        const mealCard = document.getElementById('meal-card')
        data.meals.map(mealDetail=>{
            console.log(mealDetail)
            mealCard.innerHTML = `
            <div class="meal-details">
                <h1>${mealDetail.strMeal}</h1>
                <img src="${mealDetail.strMealThumb}">
                <p>Instruction: ${mealDetail.strInstructions}</p>
            </div>
            `
        })
        
    })
}
