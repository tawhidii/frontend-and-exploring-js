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