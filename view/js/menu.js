$(document).ready(function () {

  
    list_cart_main();
  
  
  }); // end ready function


  function list_cart_main () {

    $('<div></div>').attr('class', "mains").appendTo('#main').html(
        '</span> 7 - Items<span class="caret"></span></a>'+
        '<ul class="dropdown-menu dropdown-cart" role="menu">'+
        ' <li>'+
        ' <span class="item">'+
             '   <span class="item-left">'+
             '  <img src="http://lorempixel.com/50/50/" alt="" />'+
             ' <span class="item-info">'+
             '   <span>Item name</span>'+
             '  <span>23$</span>'+
             ' </span>'+
             '</span>'+
             '<span class="item-right">'+
             '  <button class="btn btn-xs btn-danger pull-right">x</button>'+
             ' </span>'+
             ' </span>'+
             ' </li>'+
             '</ul>'
    )

  }
      