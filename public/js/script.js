$(function(){

  $('button').on('click', function(event){
    event.preventDefault();

    var getURL = getData();


    $.ajax({
      "url": getURL,
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
    var keyIEIO  = BEER;

    return('http://api.brewerydb.com/v2/beers?name='+$beertextbox+'&key='+keyIEIO);
  };

  // var appendData = function(data){


  //   var $li =
  // }






















})
