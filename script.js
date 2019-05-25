$('#getTheJoke').click(function(){

    console.log('button pressed');
    

    $.getJSON('http://api.icndb.com/jokes/random', function(data){
        var output = '<p class="theJoke">'; 
            output += data.value.joke + '</p>'
         
        $('#showJoke').html(output)
        $('#showJoke').append('<p class="moreJokes">For more jokes click again the red button</p>')
        
    
})

})
