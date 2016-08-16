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

  $('#deletebeer').on('click', function(event){
    event.preventDefault();

    var id = $(this).attr('data-id');
    console.log('this is in this: ',id);

    $.ajax({
      "url":"http://localhost:3000/beers/"+id,
      "method": "delete",
      "success": function(data){
        console.log('its gone');
        var $card = $('.whole-card');
        var $h1 = $('h1');
        $h1.text('Delete Successful');
        $card.remove();

        setTimeout(function(){
          location.replace('/');
        }, 1000);
      },
      "error": function(){
        console.log('error');
      }
    })
  })

  $('#edituser').on('submit', function(event){
    event.preventDefault();

    var id = $(this).attr('data-id');
    var name = $('#name').val();
    var email = $('#email').val();
    var password = $('#password').val();

    var user = {id: id, email: email, password: password};

    $.ajax({
      "url": "http://localhost:3000/sessions/"+id,
      "method": "put",
      "data": user,
      "success": function(data){
        console.log('AOK');
        location.replace('/sessions/new');
      }
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
