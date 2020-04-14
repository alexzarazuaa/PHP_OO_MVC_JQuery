

function chargefirstajax() {
    var valtalla = ""; // muestra las opcines del select de las tallas 
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "view/js/search/controller/controller_search.php?op=talla&marca=" + valtalla
    })
        .done(function (data) {
            //console.log(data);
            var $talla = $("#talla");
            $talla.empty();//
            $talla.append("<option value=0>" + "Selecciona talla" + "</option>");
            for (row in data) {///bucle para rellenar el dropdown talla 
                $talla.append("<option>" + data[row].talla + "</option>")
            }

        });
}
function offer_talla() {
    chargefirstajax();
    $("#marca").on("change", function () {

       // console.log("entra marca change");
        var valtalla = $(this).val();
        var talla = $('#talla').val();
        console.log(talla);



        //console.log(valtalla);


        if ((valtalla === "") || (valtalla == 0)) {
            var valtalla = "";
        } else {
            var valtalla = 'where marca = "' + valtalla + '" ';
          //  console.log(valtalla)
        }
        $.ajax({
            type: "GET",
            dataType: "json",
            url: "view/js/search/controller/controller_search.php?op=talla&marca=" + valtalla
        })
            .done(function (data) {
                //console.log(data);
                var $talla = $("#talla");
                $talla.empty();//

                $talla.append("<option value=0>" + "Selecciona talla" + "</option>");
                for (row in data) {///bucle para rellenar el dropdown talla 
                    $talla.append("<option value='" + data[row].talla + "'>" + data[row].talla + "</option>")
                }
                //$marca.show();
                //console.log(talla);
                $("#talla option[value=" + talla + "]").attr("selected", true);

            });

    });

}


function marca_empty() {
    var valmarca = "";
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "view/js/search/controller/controller_search.php?op=marca&talla=" + valmarca
    })
        .done(function (data) {
            console.log(data);
            var $marca = $("#marca");
            $marca.empty();//
            $marca.append("<option value=0>" + "Selecciona Marca" + "</option>");
            for (row in data) {///bucle para rellenar el dropdown talla 
                $marca.append("<option>" + data[row].marca + "</option>")
            }
        });

}
function offer_marca() {
    console.log("entra offer");
    marca_empty();
    $("#talla").on("change", function () {
        console.log("entra talla change");
        var valmarca = $(this).val();
        var talla = $(this).val();
        var marca = $('#marca').val();
        console.log(valmarca);
        if ((valmarca === "") || (valmarca == 0)) {
            var valmarca = "";
            console.log(valmarca);
        } else {
            var valmarca = 'where talla = "' + valmarca + '" ';
            console.log(valmarca)
        }
        $.ajax({
            type: "GET",
            dataType: "json",
            url: "view/js/search/controller/controller_search.php?op=marca&talla=" + valmarca
        })
            .done(function (data) {
                console.log(data);
                var $marca = $("#marca");
                $marca.empty();//
                $marca.append("<option value=0>" + "Selecciona Marca" + "</option>");
                for (row in data) {///bucle para rellenar el dropdown talla 
                    $marca.append("<option value='" + data[row].marca + "'>" + data[row].marca + "</option>")
                }
                $(talla).hide();
                // $(marca).show();
                $("#marca option[value=" + marca + "]").attr("selected", true);
            });

    });

}

function autocom() {


    $("#talla ,#marca").on("change", function () {
        console.log("jaja auto ")

        $("name").empty();
        var marca = $("#marca").val();
        console.log(marca);
        var talla = $("#talla").val();
        console.log(talla)


        if ((marca != 0) && (talla == 0)) {
            console.log("if")
            complete = 'where marca="' + marca + '"'
            console.log(complete);
        } else if ((marca == 0) && (talla != 0)) {
            complete = 'where talla= "' + talla + '"'
            console.log(complete);
        } else if ((marca == 0) && (talla == 0)) {
            complete = ''
            console.log(complete);
        } else {
            console.log("else")
            complete = 'where talla= "' + talla + '" and marca="' + marca + '"'
            console.log(complete);
        }
        $.ajax({
            type: "GET",
            dataType: "json",
            url: "view/js/search/controller/controller_search.php?op=autocomplete&complete=" + complete
        })
            .done(function (data) {
                console.log(data)
                var nombre = []
                for (row in data) {
                    nombre.push(data[row].nombre);
                }
                console.log(nombre);
                for (i = 0; i < nombre.length; i++) {
                    console.log(nombre[i]);
                    // console.log(nombre[row])
                    $("#name").append(
                        '<option value="' + nombre[i] + '">' + nombre[i] + '</option>'
                    )
                }
            });
    });
}

function buttonsearch() {

    //// BTN SEARCH
    $(".btn").on("click", function () {
        console.log("ENTRA EN EL button");

        var talla = $("#talla").val();
        var marca = $("#marca").val();
        var auto = $("#prod").val(); // cojo name del list and datalists
        console.log(talla);
        console.log(marca);
        console.log(auto);
        localStorage.setItem('talla', talla); // save data
        localStorage.setItem('marca', marca); // save data
        localStorage.setItem('autocomplete', auto); // save data

        //alert("vad")
        $(window).attr('location', 'index.php?page=controller_shop&op=view')

    });

}
function keyenter() {
   
    $(document).keyup(function (e) {
        console.log("keyenter");
        if ($(".prod").is(":focus") && (e.keyCode == 13)) {
           console.log("keyenter");
        }
    });
}

$(document).ready(function () {



    offer_marca();
    offer_talla();
    keyenter();
    autocom();
    buttonsearch();
    keyenter();


});


