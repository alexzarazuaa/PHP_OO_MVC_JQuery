//CLICK CATEGORIAS
function click() {
    $(document).on("click", '.shop', function () {
        //console.log("click");
        //alert("click count");
        var cat = this.getAttribute('categoria');
        localStorage.setItem('categoria', cat); // save data
        //console.log(localStorage);
        $(window).attr('location', 'index.php?page=controller_shop&op=view')

        // click count
        var categorie = this.getAttribute('categoria');
        //console.log(categorie);
        $.ajax({
            type: 'GET',
            dataType: "json",
            url: "module/home/controller/controller_home.php?op=count&categoria=" + categorie
        })


    });

}

function carousel() {
    //console.log("ENTRA  HOME");
    //alert("AVISO HA ENTRADO ");
    //  console.log(data);
    $.ajax({
        type: 'GET',
        dataType: "json",
        url: "module/home/controller/controller_home.php?op=carousel",
    })
        .done(function (data) {
            //console.log(data);
            $('<div></div>').attr('class', "carousel-item active").appendTo('.carousel-inner').html(
                '<img src="' + data[0].link + '" alt="..." car="' + data[0].categoria + '"  class="d-block w-100" id="salt" ></a>'

            );
            for (i = 1; i <= 2; i++) {
                $('<div></div>').attr('class', "carousel-item ").appendTo('.carousel-inner').html(
                    '<img src="' + data[i].link + '" alt="..."   car="' + data[i].categoria + '" class="d-block w-100" id="salt">'
                );
            }
            $(document).on("click", '#salt', function () {
                //console.log("click");
                var car = this.getAttribute('car');
                localStorage.setItem('all', car); // save data
                $(window).attr('location', 'index.php?page=controller_shop&op=view');

            });

        });



}

//function click loadmore
function loadmore() {
    limit = 3

    $(document).on("click", '#loadMore', function () {
        //  console.log("entra limit");
        $('#products').empty();
        limit = limit + 3;
        //console.log("limit=" + limit);

        $.ajax({
            type: 'GET',
            dataType: "json",
            url: "module/home/controller/controller_home.php?op=categories&limit=" + limit,
        })

            .done(function (data) {
                $.each(data, function (index, data) {
                    // console.log(data);
                    var ElementDiv = document.createElement('div');
                    ElementDiv.innerHTML =
                        "<br><div id='cont_img'><img src='" + data.imagen + "' class='shop' categoria='" + data.categoria + "'  id='" + data.idprod + "' data-toggle='modal' data-target='#exampleModal'></div><div id='list_header'><span id='li_brand' >  " + data.categoria + "</span></div>";
                    document.getElementById("products").appendChild(ElementDiv);
                });
                $("#products").append(
                    ' <div id="loadMore" style=""><a>Load More</a></div>'
                );
            });
    })

}

function categoria() {

    var limit = 3
    //  console.log("ENTRA CATEGORIAS ");
    $.ajax({
        type: 'GET',
        dataType: "json",
        url: "module/home/controller/controller_home.php?op=categories&limit=" + limit,
    })

        .done(function (data) {
            $.each(data, function (index, data) {
                //console.log(data);
                var ElementDiv = document.createElement('div');
                ElementDiv.innerHTML =
                    "<br><div id='cont_img'><img src='" + data.imagen + "' class='shop' categoria='" + data.categoria + "'  id='" + data.idprod + "' data-toggle='modal' data-target='#exampleModal'></div><div id='list_header'><span id='li_brand'>  " + data.categoria + "</span></div>";
                document.getElementById("products").appendChild(ElementDiv);
            });
            $("#products").append(
                ' <div id="loadMore" style=""><a>Load More</a></div>'
            );
        });
    //call function click loadmore
    loadmore();


}

function loadsuggestions() {


    // SOLO MUESTRA EL TITUTLO SOLUCIONARLO
    var limit = 2

    $(document).on("click", '#loadsugest', function () {
        //  console.log("entra limit");
        $('#featured').empty();
        $('#btnfeatured').empty();
        limit = limit + 2;

        $.ajax({
            type: 'GET',
            dataType: "json",
            url: "https://www.googleapis.com/books/v1/volumes?q=This%20is%20Not%20Fashion:%20Streetwear%20Past,%20Present%20and%20Future",
        })

            .done(function (data) {
                var DatosJson = JSON.parse(JSON.stringify(data));
                console.log(DatosJson.items.length);
                //console.log(DatosJson.items.imageLinks);
                //DatosJson.items.length =   ;
                for (i = 0; i < limit; i++) {

                    var ElementDiv = document.createElement('div');
                    ElementDiv.innerHTML =
                        "<br><div id='cont_img'><img src='" + data['items'][i]['volumeInfo']['imageLinks']['thumbnail'] + "' class='cart' cat='" + data['items'][i]['volumeInfo']['categories'] + "' data-toggle='modal' data-target='#exampleModal'></div><div id='list_header'><hr><span id='li_brand'>  " + DatosJson.items[i].volumeInfo.title + "</br>" + "</span></div></hr>";
                    document.getElementById("featured").appendChild(ElementDiv);

                }
                if (limit === 10) {
                    $('#btnfeatured').empty();
                    $("#nomore").append(
                        ' <div id="loadsugest" style=""><a>NO HAY MAS LIBROS</a></div>'
                    );
                }
                // boton cargar more libros
                $("#btnfeatured").append(
                    ' <div id="loadsugest" style=""><a>MoreBooks</a></div>'
                );

            });
    })
}



function getSuggestions() {

    limit = 2

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

            for (i = 0; i < DatosJson.items.length; i++) {

                var ElementDiv = document.createElement('div');
                ElementDiv.innerHTML =
                    "<br><div id='cont_img'><img src='" + data['items'][i]['volumeInfo']['imageLinks']['thumbnail'] + "' class='cart' cat='" + data['items'][i]['volumeInfo']['categories'] + "' data-toggle='modal' data-target='#exampleModal'></div><div id='list_header'><hr><span id='li_brand'>  " + DatosJson.items[i].volumeInfo.title + "</br>" + "</span></div></hr>";
                document.getElementById("featured").appendChild(ElementDiv);
            }
            $("#featured").append(
                ' <div id="loadsugest" style=""><a>MoreBooks</a></div>'
            );

        });
    loadsuggestions();


}

function click_cart() {
    $(document).on("click", '.cart', function () {
        //console.log("click");
        //alert("click cart");
        var categ = this.getAttribute('cat');
        localStorage.setItem('bookCategorie', categ);

        var url = 'index.php?page=controller_shop&op=view'
        $(window).attr('location', url)

    });




}
var check = function (url, data) { //funcion cart general

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



function get_data() {
    var save = localStorage.getItem('addcart');
    var data = JSON.parse(save);
    
    var storage = { addcart: data };
    if (save) {
        alert("compra realizada")
        check('module/home/controller/controller_home.php?op=check_cart',storage)
        .then(function (info) {
            console.log(info)

            infopoints = { mypoints: parseInt(data[0][4]) * 10, nickname: data[0][3] , chequereg : data[0][5]}

            check('module/home/controller/controller_home.php?op=mypoints', infopoints)
                .then(function (data) {
                    console.log(data)
                    alert(data)
                })

        })
    } else {
        alert(" no existe cart")
    }

    var save = localStorage.removeItem('addcart');
}





$(document).ready(function () {

    carousel();
    categoria();
    click();
    getSuggestions();
    click_cart();
     get_data();
});




