$(function(){

  $('select').material_select();

  var getData = function(){

    // this function will read the value of the drop down box
    var $selectedCategory = $('select').val();
    console.log($selectedCategory)
    return $selectedCategory;
  };

  $('#search-beer-btn').on('click', function(event){
    event.preventDefault();
    var $beersearchUL = $('.beer-listing');
    $beersearchUL.children().remove();

    var value = getData();

    $.getJSON('search/'+value)
      .done(function(beerData){
        appendData(beerData);
      })
      .fail(function(beerData){
        console.log('Error: Something went wrong');
      })
  })




  var appendData = function(data){
    var $beersearchUL = $('.beer-listing');
    data.forEach(function(el){
      var $li = $('<li>');
      $li.html('<a href = /beers/' + el.id + '><i class="tiny material-icons">info</i>' + el.name + '</a>');
      $beersearchUL.append($li);
    });
  };




















}); // end of page load
