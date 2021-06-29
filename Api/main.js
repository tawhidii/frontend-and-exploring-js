


// const jsonStr = JSON.stringify(user)
// const jsonObj = JSON.parse(jsonStr)
// console.log(jsonStr)
// console.log(jsonObj)

document.getElementById('submit').addEventListener('click',()=>{
  const title = document.getElementById('title').value
  const body = document.getElementById('postBody').value
  const postingData = { title: title,body:body}
  postData(postingData)
})


function postData(postInfo){
  fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify(postInfo),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch(error=>alert('Something went wrong ...'))
}

// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => response.json())
//   .then(json => displayUsers(json))
//   .catch(error=>console.log(error))


function displayUsers(users){
    const userNames = users.map(user=>user.name)
    const userList = document.getElementById('users-list')
    userNames.forEach( u => {
        const userLi = document.createElement('li')
        userLi.innerText = u
        userList.appendChild(userLi)
    });
}




