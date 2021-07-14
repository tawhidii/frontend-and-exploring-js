const getMealData = () =>{
    const searchBy = document.getElementById('meal-input').value
    console.log(searchBy)
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchBy}`)
        .then(res=>res.json())
        .then(data=>displayMealData(data))
        .catch(err=>console.log(err))
}

const displayMealData =  data =>{
    const mealCard = document.getElementById('meal-card')
    mealCard.innerHTML = ""
    data.meals.map(meal=>{
        console.log(meal)
        const mealItem = document.createElement('div')
      
        mealItem.className = 'meal-item'
        mealItem.innerHTML = `
        <img src="${meal.strMealThumb}">
        <h2>${meal.strMeal}</h2>
        `    
        mealCard.appendChild(mealItem)
    })
}
