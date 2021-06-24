const baseUrl = 'https://swapi.dev/api/people/'

// JQuery Implementation
$.ajax({
    type:'GET',
    url:baseUrl,
    success : function(response) {
        console.log('result from jquey',response)
    },
    error: function(error) {
        console.log(error)
    }
})

// XMLHttp Request 
const req = new XMLHttpRequest()

req.addEventListener('readystatechange',function() {
    if(req.readyState == 4){
        console.log('result from xhttp',JSON.parse(req.responseText))
    }
})
req.open('GET',baseUrl)
req.send()

// fetch 
fetch(baseUrl)
.then(response => response.json()).then(data=>console.log(data))
.catch(error=>console.log(error))


