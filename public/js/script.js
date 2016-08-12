$(function(){

  $('button').on('click', function(event){
    event.preventDefault();

    // var getURL = getData();
    var value = getData();


    $.ajax({
      "url": "http://localhost:3000/search/"+value,
      "method": "GET",
      "success": function(beerData){
        // append beer data names to the DOM
        console.log('appended beer search results to the DOM');
        console.log(beerData);
        // appendData(beerData);
      },
      "error": function(){
        console.log('bah didnt find what you needed');
      }
    })

  })

  var getData = function(){
    // this function will read the value of the text box
    // returns the formatted URL
    var $beertextbox = $('#beer-search-textbox').val();
    return $beertextbox;
    // var keyIEIO  = BEER;

    // return('http://api.brewerydb.com/v2/beers?name='+$beertextbox+'&key='+keyIEIO);
  };

  // var appendData = function(data){


  //   var $li =
  // }

// root.data[0].name
// root.data[0].abv
// root.data[0].style.name
// root.data[0].style.description




















})
