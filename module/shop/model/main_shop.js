
function ajaxForSearch(durl) {
  var url = durl;
  //console.log(url);
  $.ajax({
    type: "GET",
    dataType: "json",
    url: url,
  })
    .done(function (data) {

      //  console.log(data);
      //var data = JSON.parse(data);
      $.each(data, function (index, data) {
        console.log(data);
        var ElementDiv = document.createElement('div');
        ElementDiv.innerHTML = "<br><div id='cont_img'><img src='" + data.imagen + "' class='details' id='" + data.idprod + "' data-toggle='modal' data-target='#exampleModal'></div><div id='list_header'><span id='li_brand'>  " + data.nombre + "</span></div>" +
          "<div id='list_footer'><span id='" + data.idprod + "pr'>" + data.precio + "€ " + "</span><div id='cont_comprar'></select><button class='baddcart' id='" + data.idprod + "'>Add to cart</button><button class='btn btn-default btn-lg like  " + data.idprod + " ' id='" + data.idprod + "' id=''>❤</button>";
        document.getElementById("list_products").appendChild(ElementDiv);
      });

      paint_likes();
    });
}//endajaxforearch

function apiajax(url) {
  var url = url;
  console.log(url);
  //var limit = 2;
  $.ajax({
    type: "GET",
    dataType: "json",
    url: url,
  })
    .done(function (data) {

      console.log(data);
      //var data = JSON.parse(data);
      var DatosJson = JSON.parse(JSON.stringify(data));
      console.log(DatosJson.items.length);
      //console.log(data['items'][i]['volumeInfo']['infoLink']);
      //console.log(DatosJson.items.imageLinks);
      //DatosJson.items.length = limit;
      $('#pagination').empty();

      for (i = 0; i < DatosJson.items.length; i++) {

        var ElementDiv = document.createElement('div');
        ElementDiv.innerHTML =
          "<br><div id='cont_img'><img src='" + data['items'][i]['volumeInfo']['imageLinks']['thumbnail'] + "' class='cart' cat='" + data['items'][i]['volumeInfo']['categories'] + "'  idb= '" + data['items'][i]['id'] + "' data-toggle='modal' data-target='#exampleModal'></div><div id='list_header'><hr><span id='li_brand'>  " + DatosJson.items[i].volumeInfo.title + "</br>" + "</span></div></hr>";
        document.getElementById("featured").appendChild(ElementDiv);
      }




    });
}

function detail_book() {
  /// redirect to google book if you want know more info about the

  $(document).on("click", '.cart', function () {
    console.log("click");
    var id = this.getAttribute('idb');
    console.log(id);
    url = "https://books.google.es/books?id=" + id + "&hl=&source=gbs_api"
    //  console.log(url);

    $(window).attr('location', url)
  })

}


function details_gmaps() {
  ////
  if (document.getElementById("mapdetails") != null) {
    console.log("ENTRA MAP 2");
    var script = document.createElement('script');
    script.src = "https://maps.googleapis.com/maps/api/js?key=" + KEY_API + "&callback=initMap";

    script.async;
    script.defer;
    document.getElementsByTagName('script')[0].parentNode.appendChild(script);
    console.log(script);
  }


}
//funcion mostrar mapa grande 
function details_gmaps2() {
  ////
  if (document.getElementById("mapa") != null) {
    $("#pagination").empty()
    console.log("ENTRA MAP 2");
    var script = document.createElement('script');
    script.src = "https://maps.googleapis.com/maps/api/js?key=" + KEY_API + "&callback=initMap2";
    script.async;
    script.defer;
    document.getElementsByTagName('script')[0].parentNode.appendChild(script);
    console.log(script);
  }


}

// funcion productos in gmaps
function initMap() {

  // var
  var markers = [];

  //console.log(jewelry_stores)
  var map = new google.maps.Map(document.getElementById('mapdetails'), {
    zoom: 4,
    center: new google.maps.LatLng(40.891859, -3.695447),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  var infowindow = new google.maps.InfoWindow();
  $.ajax({
    type: "GET",
    dataType: 'json',
    url: "module/shop/controller/controller_shop.php?op=maps"
  })
    .done(function (data) {
      console.log(data);

      for (row in data) {
        console.log(data);

        var newMarker = new google.maps.Marker({
          position: new google.maps.LatLng(
            data[row].latitud,
            data[row].longitud),
          map: map,
          title:
            data[row].Tienda
        });

        google.maps.event.addListener(newMarker, 'click', (function (newMarker, row) {
          return function () {
            infowindow.setContent(
              data[row].dscp);
            infowindow.open(map, newMarker);
          }
        })(newMarker, row));

        markers.push(newMarker);
      }
    });
}
//funcion mostrar mapa grande 
function initMap2() {

  // var
  var markers = [];

  //console.log(jewelry_stores)
  var map = new google.maps.Map(document.getElementById('mapa'), {
    zoom: 6,
    center: new google.maps.LatLng(40.891859, -3.695447),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  var infowindow = new google.maps.InfoWindow();
  $.ajax({
    type: "GET",
    dataType: 'json',
    url: "module/shop/controller/controller_shop.php?op=geomaps"
  })
    .done(function (data) {
      console.log(data);

      for (row in data) {
        console.log(data);

        var newMarker = new google.maps.Marker({
          position: new google.maps.LatLng(
            data[row].latitud,
            data[row].longitud),
          map: map,
          title:
            data[row].Tienda
        });

        google.maps.event.addListener(newMarker, 'click', (function (newMarker, row) {

          return function () {
            var latitud = data[row].latitud
            var longitud = data[row].longitud
            $.ajax({
              type: "GET",
              dataType: 'json',
              url: "module/shop/controller/controller_shop.php?op=dspmap&latitud=" + latitud + "&longitud=" + longitud
            })
              .done(function (data) {
                var name = "";
                for (row in data) {
                  name = name + data[row].nombre
                }
                infowindow.setContent(
                  name);
                infowindow.open(map, newMarker);
              });
          }
        })(newMarker, row));

        markers.push(newMarker);
      }
    });
}

// click del gmaps
function clickgmaps() {
  $(document).on("click", '#mapdetails', function () {
    //console.log("click");

    $("#products").empty();
    $("#emptyfilters").empty()
    $("#search").empty()
    $("#mapdetails").empty()
    $("#textarea").empty()
    $("#npg").empty();
    $('#textarea2').append(
      ' <h4 class="mb-2"><span class="fa fa-map-marker" aria-hidden="true" >VISTA EN MAPA</span></h4>'
    )

    details_gmaps2();

  });
}

/// filtros 
function filtros() {



  var filters = "";
  var click_an = 0;
  var click_su = 0;
  var click_ca = 0;
  var click_ch = 0;
  var click_p1 = 0;
  var click_p2 = 0;
  var click_p3 = 0;
  var click_p4 = 0;
  var click_fav = 0;

  $('#camisetas').click(function () {
    console.log("click_an= " + click_an)


    if ((click_an % 2) == 0) {
      console.log("click_an para filtrar")
      click_an = click_an + 1
      if (filters === "") {
        console.log("cadena vacia")
        filters = "where categoria = 'CAMISETAS'" + filters;
      } else {
        console.log("cadena escrita")
        filters = filters + " OR categoria = 'CAMISETAS'";
        console.log(CAMISETAS);
      }

    } else {
      console.log("click_an para desfiltrar")
      click_an = click_an + 1
      CAMISETAS = '';
      filters = filters.replace("categoria = 'CAMISETAS' OR ", "");
      filters = filters.replace(" OR categoria = 'CAMISETAS'", "");
      filters = filters.replace("where categoria = 'CAMISETAS'", "");


    }
    allfilters(filters);
    console.log("click_an= " + click_an);
  });
  // sudaderas
  $('#sudaderas').click(function () {
    console.log("click_an= " + click_su)

    if ((click_su % 2) == 0) {
      console.log("click_su para filtrar")
      click_su = click_su + 1
      if (filters === "") {
        console.log("cadena vacia")
        filters = "where categoria = 'SUDADERAS'" + filters;
      } else {
        console.log("cadena escrita")
        filters = filters + " OR categoria = 'SUDADERAS'";
        console.log(SUDADERAS);
      }
    } else {
      console.log("click_su para desfiltrar")
      click_su = click_su + 1
      SUDADERAS = '';
      filters = filters.replace("categoria = 'SUDADERAS' OR ", "");
      filters = filters.replace(" OR categoria = 'SUDADERAS'", "");
      filters = filters.replace("where categoria = 'SUDADERAS'", "");
    }
    allfilters(filters);
    console.log("click_an= " + click_an);
  });
  //calzado
  $('#calzado').click(function () {
    console.log("click_ca= " + click_ca)

    if ((click_ca % 2) == 0) {
      console.log("click_ca para filtrar")
      click_ca = click_ca + 1
      if (filters === "") {
        console.log("cadena vacia")
        filters = "where categoria = 'CALZADO'" + filters;
      } else {
        console.log("cadena escrita")
        filters = filters + " OR categoria = 'CALZADO'";
        console.log(CALZADO);
      }
    } else {
      console.log("click_ca para desfiltrar")
      click_ca = click_ca + 1
      CALZADO = '';
      filters = filters.replace("categoria = 'CALZADO' OR ", "");
      filters = filters.replace(" OR categoria = 'CALZADO'", "");
      filters = filters.replace("where categoria = 'CALZADO'", "");
    }
    allfilters(filters);
    console.log("click_an= " + click_an);
  });
  //chandals
  $('#chandal').click(function () {
    console.log("click_ch= " + click_ch)

    if ((click_ch % 2) == 0) {
      console.log("click_ch para filtrar")
      click_ch = click_ch + 1
      if (filters === "") {
        console.log("cadena vacia")
        filters = "where categoria = 'CHANDALS'" + filters;
      } else {
        console.log("cadena escrita")
        filters = filters + " OR categoria = 'CHANDALS'";
        console.log(CHANDALS);
      }
    } else {
      console.log("click_ch para desfiltrar")
      click_ch = click_ch + 1
      CHANDALS = '';
      filters = filters.replace("categoria = 'CHANDALS' OR ", "");
      filters = filters.replace(" OR categoria = 'CHANDALS'", "");
      filters = filters.replace("where categoria = 'CHANDALS'", "");
    }
    allfilters(filters);
    console.log("click_ch= " + click_ch);
  });

  //precios
  $('#050').click(function () {
    console.log("click_p1= " + click_p1)

    if ((click_p1 % 2) == 0) {
      console.log("click_p1 para filtrar")
      click_p1 = click_p1 + 1
      if (filters === "") {
        console.log("cadena vacia")
        filters = "where precio between 0 and 50" + filters;
      } else {
        console.log("cadena escrita")
        filters = filters + " and precio between 0 and 50";
        console.log(CHANDALS);
      }
    } else {
      console.log("click_p1 para desfiltrar")
      click_p1 = click_p1 + 1
      precio = '';
      filters = filters.replace("precio between 0 and 50 and ", "");
      filters = filters.replace(" and precio between 0 and 50", "");
      filters = filters.replace("where precio between 0 and 50", "");

    }
    allfilters(filters);
    console.log("click_p1= " + click_p1);
  });
  //
  $('#508').click(function () {
    console.log("click_p2= " + click_p2)

    if ((click_p2 % 2) == 0) {
      console.log("click_p2 para filtrar")
      click_p2 = click_p2 + 1
      if (filters === "") {
        console.log("cadena vacia")
        filters = "where precio between 50 and 80" + filters;
      } else {
        console.log("cadena escrita")
        filters = filters + " and precio between 50 and 80";
        console.log(CHANDALS);
      }
    } else {
      console.log("click_p2 para desfiltrar")
      click_p2 = click_p2 + 1
      precio = '';
      filters = filters.replace("precio between 50 and 80 and ", "");
      filters = filters.replace(" and precio between 50 and 80", "");
      filters = filters.replace("where precio between 50 and 80", "");

    }
    allfilters(filters);
    console.log("click_p2= " + click_p2);
  });
  //
  $('#8012').click(function () {
    console.log("click_p3= " + click_p3)

    if ((click_p3 % 2) == 0) {
      console.log("click_p3 para filtrar")
      click_p3 = click_p3 + 1
      if (filters === "") {
        console.log("cadena vacia")
        filters = "where precio between 80 and 120" + filters;
      } else {
        console.log("cadena escrita")
        filters = filters + " and precio between 80 and 120";
        console.log(CHANDALS);
      }
    } else {
      console.log("click_p3 para desfiltrar")
      click_p3 = click_p3 + 1
      precio = '';
      filters = filters.replace("precio between 80 and 120 and ", "");
      filters = filters.replace(" and precio between 80 and 120", "");
      filters = filters.replace("where precio between 80 and 120", "");

    }
    allfilters(filters);
    console.log("click_p3= " + click_p3);
  });
  //
  $('#12020').click(function () {
    console.log("click_p4= " + click_p4)

    if ((click_p4 % 2) == 0) {
      console.log("click_p4 para filtrar")
      click_p4 = click_p4 + 1
      if (filters === "") {
        console.log("cadena vacia")
        filters = "where precio between 120 and 200" + filters;
      } else {
        console.log("cadena escrita")
        filters = filters + " and precio between 120 and 200";
        console.log(CHANDALS);
      }
    } else {
      console.log("click_p4 para desfiltrar")
      click_p4 = click_p4 + 1
      precio = '';
      filters = filters.replace("precio between 120 and 200 and ", "");
      filters = filters.replace(" and precio between 120 and 200", "");
      filters = filters.replace("where precio between 120 and 200", "");

    }
    allfilters(filters);
    console.log("click_p4= " + click_p4);
  });
  //click filter favorite
  $('#like').click(function () {
    console.log("click_fav= " + click_fav)

    //le decimos a la promesa general que obtenga el nombre del usuario logueado
    fav('module/shop/controller/controller_shop.php?op=check_fav')
      .then(function (info) {
        console.log(info)

        //si hay algun usuario conectado entra
        if (info !== "") {
          console.log('entra if')
          console.log(info)

          ///si es la primera vez o alguna  vez par ya que el contador empieza en 0 fitrara
          if ((click_fav % 2) == 0) {
            console.log("click_fav para filtrar")
            click_fav = click_fav + 1

            ///comprobara si la cadena esta vacia o llena
            if (filters === "") {
              //console.log("cadena vacia")
              filters = "Where idprod in (SELECT product_code from likes where user_ID='" + info + "')";
              console.log(filters)
            } else {
              console.log("cadena escrita")
              filters = filters + " AND idprod in (SELECT product_code from likes where user_ID='" + info + "')";

            }


            ///entrara si esta clickando para desfiltrar y borrara la cadena
          } else {
            console.log("like para desfiltrar")
            like = like + 1
            filters = filters.replace(" AND idprod in (SELECT product_code from likes where user_ID='" + info + "')", "");
            filters = filters.replace("WHERE idprod in (SELECT product_code from likes where user_ID='" + info + "')", "");


          }
          allfilters(filters)
          console.log("click_fav= " + click_fav)

          //si no esta logueado lo mandara a loguearse
        } else {
          redirect_login();
        }
      })

  })


}// end_function_filtros

function allfilters(filters) {
  //click de todos 
  console.log("filter");
  $('#list_products').empty();
  console.log(filters);
  ajaxForSearch("module/shop/controller/controller_shop.php?op=filter&filters=" + filters);

  //end_click_checked
}

function loadata() {

  console.log("entra datos");
  //search

  // cojo name del list and datalists
  //search
  var talla = localStorage.getItem('talla', talla); // save data
  console.log(talla);
  var marca = localStorage.getItem('marca', marca); // save data
  console.log(marca);
  var auto = localStorage.getItem('autocomplete', auto); // save data
  console.log(auto);


}
function detuggestions() {

  limit = 9

  $.ajax({
    type: 'GET',
    dataType: "json",
    url: "https://www.googleapis.com/books/v1/volumes?q=This%20is%20Not%20Fashion:%20Streetwear%20Past,%20Present%20and%20Future",
  })

    .done(function (data) {
      var DatosJson = JSON.parse(JSON.stringify(data));
      console.log(DatosJson.items.length);
      //console.log(data['items'][i]['volumeInfo']['infoLink']);
      //console.log(DatosJson.items.imageLinks);
      DatosJson.items.length = limit;

      for (i = 6; i < DatosJson.items.length; i++) {

        var ElementDiv = document.createElement('div');
        ElementDiv.innerHTML =
          "<br><div id='cont_img'><img src='" + data['items'][i]['volumeInfo']['imageLinks']['thumbnail'] + "' class='cart' cat='" + data['items'][i]['volumeInfo']['categories'] + "' data-toggle='modal' data-target='#exampleModal'></div><div id='list_header'><hr><span id='li_brand'>  " + DatosJson.items[i].volumeInfo.title + "</br>" + "</span></div></hr>";
        document.getElementById("featured").appendChild(ElementDiv);
      }

    });

  $(document).on("click", '.cart', function () {
    //console.log("click");
    //alert("click cart");
    var categ = this.getAttribute('cat');
    localStorage.setItem('bookCategorie', categ);

    var url = 'index.php?page=controller_shop&op=view'
    $(window).attr('location', url)

  });



}

function details_products() {

  $(document).on('click', '.details', function () {
    console.log("click");



    var id = this.getAttribute('id');
    console.log(id)

    //click count
    console.log(id);
    $.ajax({
      type: 'GET',
      dataType: "json",
      url: "module/shop/controller/controller_shop.php?op=countvi&idprod=" + id,
    })
    //ajax for details
    $.ajax({
      dataType: 'json',
      url: "module/shop/controller/controller_shop.php?op=producto&details=" + id,
      type: 'GET',
    })
      //console.log(localStorage);

      .done(function (data) {
        // console.log("done");

        console.log(data);
        $("#list_products").empty();
        $("#featured").empty();
        $("#mapdetails").empty();
        $("#emptyfilters").empty();
        $("#search").empty()
        $("#textarea").empty()
        $("#pagination").empty()
        $("#npg").empty()

        console.log(data.idprod);
        $("#list_prod").append(
          '<div class="row">' +
          '<div class="desc1-left col-md-6"> <img src="' + data.imagen + '" class="img-fluid" alt=""> </div>' +
          '<div class="desc1-right col-md-6 pl-lg-4"> <h3>' + data.nombre + '</h3> <h5>' + data.precio + '€' + ' <span>99</span> <a href="#">click for offer</a></h5>' +
          "<div class='available mt-3'><button class='btn btn-default btn-lg like  " + data.idprod + "' ' id='" + data.idprod + "' id=''>❤</button>" +
          "</span><div id='cont_comprar'><select  id='" + data.idprod + "'></select><button class='baddcart' id='" + data.idprod + "'>Add to cart</button></div></div>" +
          ' <br><div class="share-desc"><div class="share"><h4>Share Product :</h4>' +
          ' <ul class="w3layouts_social_list list-unstyled"><li><a href="#" class="w3pvt_facebook"> <span class="fa fa-facebook-f"></span></a></a></li>' +
          ' <li class="mx-2"><a href="#" class="w3pvt_twitter"><span class="fa fa-twitter"></span></a></li>' +
          ' <li><a href="#" class="w3pvt_dribble"><span class="fa fa-dribbble"></span></a></li>' +
          ' <li class="ml-2"><a href="#" class="w3pvt_google"><span class="fa fa-google-plus"></span></a></li></ul></div>' +
          '<div class="clearfix"></div></div></div></div>' +
          '<div class="row sub-para-w3layouts mt-5"><h3 class="shop-sing"><strong>MARCA :</strong> ' + data.marca + ' <BR> <strong>PRODUCTO  :</strong> ' + data.nombre + ' <BR><strong> DESCRIPCIÓN :</strong></h3>' +
          '<p>' + data.descripcion + '</p>'


        );


        detuggestions();



        paint_likes();


      });

  });//endajaxaDETAILS
}

function all_lists_products() {

  if (document.getElementById('list_products')) {

    var car = localStorage.getItem('all');
    console.log(car); // carousel
    var cat = localStorage.getItem('categoria');
    console.log(cat); // categorias
    console.log(cat + "CAMISETA"); // categorias
    console.log("CAMISETA" + cat); // categorias
    var categ = localStorage.getItem('bookCategorie') // save data
    //console.log(categ.replace(/ /g, ""));


    //search
    var talla = localStorage.getItem('talla', talla); // save data
    console.log(talla);
    var marca = localStorage.getItem('marca', marca); // save data
    console.log(marca);
    var auto = localStorage.getItem('autocomplete', auto); // save data
    console.log(auto);
    //search
    limit = 0;
    if (cat) {
      console.log("home categoria");
      console.log(cat);
      ajaxForSearch("module/shop/controller/controller_shop.php?op=categoria&clas=" + cat);

    } else if (auto) {
      console.log("entra en auto , existe el nombre")
      var insidesearch = 'where nombre= "' + auto + '"';

      //console.log(insidesearch);
      ajaxForSearch("module/shop/controller/controller_shop.php?op=search&btnsearch=" + insidesearch);
    } else if ((marca) && (talla) && (marca != 0) && (talla != 0)) {
      console.log("entra en marca y talla existe la marca y la talla o son distintos de 0")
      var insides = 'where talla= "' + talla + '" and  marca="' + marca + '" ';

      //console.log(insidesearch);
      ajaxForSearch("module/shop/controller/controller_shop.php?op=search&btnsearch=" + insides);

    } else if ((marca) && (marca != 0)) {
      console.log("entra en marca o es distintos de 0")
      var insides = 'where marca= "' + marca + '"';
      console.log("inside=" + insides);

      //console.log(insidesearch);
      ajaxForSearch("module/shop/controller/controller_shop.php?op=search&btnsearch=" + insides);
    } else if ((talla) && (talla != 0)) {
      console.log("entra en talla o es distintos de 0")
      var insides = 'where talla= "' + talla + '"';
      console.log("inside=" + insides);

      //console.log(insidesearch);
      ajaxForSearch("module/shop/controller/controller_shop.php?op=search&btnsearch=" + insides);
    } else if (categ) {
      //console.log(categ);
      console.log("entra en categ book , existe el book")
      apiajax("https://www.googleapis.com/books/v1/volumes?q=This%20is%20Not%20Fashion:%20Streetwear%20Past,%20Present%20and%20Future&categories=" + categ);
      //console.log(apiajax);
    } else {
      ajaxForSearch("module/shop/controller/controller_shop.php?op=productos&limit=" + limit);
    }

  } // end_if


  // consolse para saber en estas lineas estan los remove
  console.log("remove item localstoratge");


  var car = localStorage.removeItem('all');
  //
  var cat = localStorage.removeItem('categoria');

  //search
  var talla = localStorage.removeItem('talla', talla); // save data
  console.log(talla);
  var marca = localStorage.removeItem('marca', marca); // save data
  console.log(marca);
  var auto = localStorage.removeItem('autocomplete', auto); // save data
  console.log(auto);
  var categ = localStorage.removeItem('bookCategorie') // save data



}

function pagination() {

  $.ajax({
    type: 'GET',
    dataType: "json",
    url: "module/shop/controller/controller_shop.php?op=countp",
  })
    .done(function (data) {
      console.log(data);
      var numprods = data[0].allpages;
      page = numprods / 3;
      console.log(page);
      $('#pagination').bootpag({
        total: page,
        page: 1,
        maxVisible: 3
      }).on("page", function (event, num) {
        console.log(num);
        limit = 3 * (num - 1);
        $.ajax({
          type: 'GET',
          dataType: "json",
          url: "module/shop/controller/controller_shop.php?op=productos&limit=" + limit,
        })

          .done(function (data) {
            console.log(data);

            $('#list_products').empty();
            $("#npg").html("Page " + num);

            console.log(limit);
            ajaxForSearch("module/shop/controller/controller_shop.php?op=productos&limit=" + limit);

          });
      });//end on
    });//enddone
}

function redirect_login() {
  var url = "index.php?page=controller_login&op=view_register"
  $(window).attr('location', url);

}


function prod_cart() {
  var prod = [];

  $(document).on('click', '.baddcart', function () {
    console.log("btnaddcart")

    var id = this.getAttribute('id');
    console.log(id)

    fav('module/shop/controller/controller_shop.php?op=check_logged')
      .then(function (info) {
        console.log(info)
        if (info == '"logged"') {
          console.log("entra if")

          //console.log(data.ip);
          fav('module/shop/controller/controller_shop.php?op=check_fav')
            .then(function (nickname) {
              console.log(nickname)

              var infouser = { id_prod: id, id: nickname };
              console.log(infouser);

              fav('module/shop/controller/controller_shop.php?op=add_prod_cart', infouser)
                .then(function (data) {

                  console.log(data)

                })
            })



        } else {

          $.getJSON('https://api.ipify.org?format=json', function (data) {
            console.log(data.ip);

            var infouser = { id_prod: id, id: data.ip };
            console.log(infouser);

            fav('module/shop/controller/controller_shop.php?op=add_prod_cart', infouser)
              .then(function (data) {

                console.log(data)
                

              })

          });


        }

        prod.push(id);
        console.log(prod)


        localStorage.setItem('prod', JSON.stringify(prod));
        var gd = localStorage.getItem('prod');
        console.log(JSON.parse(gd));
        var save = localStorage.getItem('prod');
        var storatge = { prod: save }
        fav('module/shop/controller/controller_shop.php?op=prod_array', storatge)
          .then(function (data) {
            var data = JSON.parse(data);
            console.log(data)
          })

      })
  })
}

var fav = function (url, data) { //funcion favorite general

  console.log(data)

  return new Promise(function (resolve) {
    $.ajax({
      type: "POST",
      url: url,
      data: data
    })
      .done(function (data) {
        resolve(data);
      })
  })
};



function inlike() {
  $(document).on('click', '.like', function () {
    console.log('like');

    var idprod = $(this).attr('id');
    console.log(idprod)

    fav('module/shop/controller/controller_shop.php?op=check_logged')
      .then(function (info) {
        console.log(info)
        if (info != "notlogged") {
          console.log('If de info');
          $('.' + idprod + '').toggleClass('btn-danger');
          fav('module/shop/controller/controller_shop.php?op=like', idprod)
            .then(function (data) {
              console.log(data)
              if (data == "its favorite") {
                console.log('centra ind');
                fav('module/shop/controller/controller_shop.php?op=unlike', idprod)
                  .then(function (data) {
                    console.log(data)
                  })

              }

            })

        } else {
          redirect_login();
        }
      })

  })

}




function paint_likes() {

  fav('module/shop/controller/controller_shop.php?op=paint')
    .then(function (info) {
      //  console.log(info);
      var data = JSON.parse(info);
      console.log(data)
      for (row in data) {
        $('.' + data[row].product_code + '').toggleClass('btn-danger');
      }

    })


}




$(document).ready(function () {

  details_gmaps();
  details_products();
  loadata();
  ajaxForSearch();
  apiajax();
  filtros();
  clickgmaps();
  all_lists_products();
  pagination();
  detail_book();
  inlike();

  //

  prod_cart();



}); // end ready function


