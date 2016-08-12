$(function(){

  $('button').on('click', function(event){
    event.preventDefault();

    var value = getData();

    $.getJSON("http://localhost:3000/search/"+value)
      .done(function(beerData){
        console.log(beerData);
        appendData(beerData);
      })
      .fail(function(beerData){
        console.log('Error: Something went wrong');
      })

    // $.ajax({
    //   "url": "http://localhost:3000/search/"+value,
    //   "method": "GET",
    //   "success": function(beerData){
    //     console.log(beerData);
    //     // append beer data names to the DOM
    //     appendData(beerData);
    //   },
    //   "error": function(){
    //     console.log('bah didnt find what you needed');
    //   }
    // })

  })

  var getData = function(){
    // this function will read the value of the text box
    var $beertextbox = $('#beer-search-textbox').val();
    return $beertextbox;
  };

  var appendData = function(data){
    var $beersearch = $('#beer-search-results');
    var $ul = $('ul');
    data.data.forEach(function(e){
      var $li = $('<li>'+e.name+'</li>');
      $ul.append($li);
    });
  };

// root.data[0].name
// root.data[0].abv
// root.data[0].style.name
// root.data[0].style.description




















})
