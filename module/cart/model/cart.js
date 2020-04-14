$(document).ready(function () {

    //console.log("carrito js");

    show_cart();
    delete_prod_cart();
    delete_all_cart();
    calc_stock();
    checkout();
    prova_date();

}); // end ready function



var cart = function (url, data) { //funcion cart general

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


//FUNTIONS OF DELETE FROM CART AND DELETE ALL CART

function delete_prod_cart() {

    $(document).on('click', '.delete_prod', function () {
        console.log("btndeletprod_cart")
        //console.log(prod)
        //cart('module/cart/controller/controller_cart.php?op=delete_prod_cart', prod)

        var idprod = $(this).attr('id');
        console.log(idprod)

        fav('module/cart/controller/controller_cart.php?op=check_cart')
            .then(function (data) {
                ip
                    .then(function (ip) {
                        // console.log(data);
                        if (data !== 'notlogged') { // SI ESTA LOGGEADO

                            console.log(data)
                            var user = data
                            console.log("nickname " + user);

                            // var info = {id: a713};
                            //{}

                        } else {

                            console.log(ip)
                            var user = ip;

                        }
                        var info_user = { idprod: idprod, id: user }

                        fav('module/cart/controller/controller_cart.php?op=delete_prod_cart', info_user)
                            .then(function (data) {
                                console.log(data)
                                $('#' + idprod + 'd').remove();
                                show_prices();
                            })
                    })

            })


    })

}
function delete_all_cart() {
    $(document).on('click', '.delete_all', function () {
        console.log("btndeletprod_cart")
        //console.log(prod)
        //cart('module/cart/controller/controller_cart.php?op=delete_prod_cart', prod)

        fav('module/cart/controller/controller_cart.php?op=check_cart')
            .then(function (data) {
                ip
                    .then(function (ip) {
                        // console.log(data);
                        if (data !== 'notlogged') { // SI ESTA LOGGEADO

                            console.log(data)
                            var user = data
                            console.log("nickname " + user);

                            // var info = {id: a713};
                            //{}

                        } else {
                            console.log(ip)
                            var user = ip;

                        }

                        info_user = { id: user }

                        fav('module/cart/controller/controller_cart.php?op=delete_all_cart', info_user)
                            .then(function (data) {
                                console.log(data)
                                $('#prods').empty();
                                show_cart();
                            })
                    })
            })

    })

}

var ip = new Promise(function (resolve) { //obtener  ip for user no logged

    $.getJSON('https://api.ipify.org?format=json', function (data) {
        //console.log(data.ip);
        console.log(data.ip);
        resolve(data.ip);
    })
})


function show_cart() {


    fav('module/cart/controller/controller_cart.php?op=check_cart')
        .then(function (data) {
            ip
                .then(function (ip) {
                    // console.log(data);
                    if (data !== 'notlogged') { // SI ESTA LOGGEADO

                        console.log("data  " + data);
                        var idlog = data;
                        console.log(idlog);

                    } else {// SI NO LO ESTA
                        console.log(ip)
                        var idlog = ip;

                    }

                    var info = { id: idlog };

                    console.log(info)
                    fav('module/cart/controller/controller_cart.php?op=inf_prods', info)

                        .then(function (data) {
                            //console.log(data)
                            var json = JSON.parse(data);
                            console.log(json)//llegan los productos de ese usuario
                            var subtotal = 0;
                            var GastosGestion = 0;
                            //var totali = 0
                            if (json.length == 0) {
                                //console.log(json.length)
                                //$("#prods").empty()
                                $("#prods").append(
                                    '<h1>NO HAS AÑADIDO NINGÚN PRODUCTO</h1>'
                                );
                            } else {
                                for (row in json) {
                                    if (json[row].stock > 0) {
                                        var precio = parseInt(json[row].precio);
                                        subtotal = subtotal + precio;
                                        //totali = totali + subtotal;
                                        //console.log(totali)
                                        $("#prods").append(
                                            '<tr id="' + json[row].idprod + 'd">' +
                                            '<td><img src="' + json[row].imagen + '"  height="50" width="50"/> </td>' +
                                            '<td>' + json[row].nombre + '</td>' +
                                            '<td>' + json[row].stock + '</td>' +
                                            '<td align="center">' +
                                            '<input class="stock" idprod="' + json[row].idprod + '" name="stock" id="' + json[row].idprod + '" type="number"  value="1" step="1" min="1" max="' + json[row].stock + '" />' +
                                            '</td>' +
                                            '<td class="text-right" id="' + json[row].idprod + 'p">' + json[row].precio + ' €</td>' +
                                            '<td class="text-right"><button class="btn btn-sm btn-danger delete_prod "  id="' + json[row].idprod + '"><i class="fa fa-trash"></i>' +
                                            '</button> </td>'


                                        );
                                        //subtotal = subtotal + precio
                                    } else {
                                        $("#prods").append(
                                            '<tr>' +
                                            '<td><img src="' + json[row].imagen + '"  height="50" width="50"/> </td>' +
                                            '<td>' + json[row].nombre + '</td>' +
                                            '<td>' + "  NOT AVALIABLE  " + '</td>' +
                                            '<td align="center">' +
                                            '<p><p/>' +
                                            '</td>' +
                                            '<td class="text-right" id="' + json[row].idprod + 'p"><p><p/></td>' +
                                            '<td class="text-right"><button class="btn btn-sm btn-danger " id="' + json[row].idprod + '"><i class="fa fa-trash"></i>' +
                                            '</button> </td>'

                                        );
                                    }//end_else  stock
                                }//end_for
                                // AQUI USAMOS LA FUNCION parseFloat(Math.round() / ).toFixed(2);
                                // PARA QUE NOS SAQUE SIEMPRE LOS NUMERO CON SOLO DOS DECIMALES EJEMPLO 4.25;


                                //siempre con dos numeros decimales
                                var subt = parseFloat(Math.round(subtotal * 100) / 100).toFixed(2);
                                console.log(subt)

                                //APLICAMOS UN 3% POR LOS GATOS DE GESTION
                                GastosGestion = (subtotal * 0.03)
                                console.log(GastosGestion)

                                //siempre con dos numeros decimales
                                var gd = parseFloat(Math.round(GastosGestion * 100) / 100).toFixed(2);
                                console.log(gd)

                                totali = (subtotal + GastosGestion )
                                console.log(totali)

                                //siempre con dos numeros decimales
                                var total = parseFloat(Math.round(totali * 100) / 100).toFixed(2);
                                console.log(total)


                                $("#prods").append(
                                    '<tr>' +
                                    '<td></td>' +
                                    '<td></td>' +
                                    '<td></td>' +
                                    '<td></td>' +
                                    '<td>Sub-Total</td>' +
                                    '<td class="text-right" id="subtotal">' + subtotal + ' €</td>' +
                                    '</tr>' +
                                    '<tr>' +
                                    ' <td></td>' +
                                    ' <td></td>' +
                                    ' <td></td>' +
                                    ' <td></td>' +
                                    '<td>Gastos De Gestion</td>' +
                                    '<td class="text-right" id="gd">' + gd + ' €</td>' +
                                    '</tr>' +
                                    '<tr id="prices_tot">' +
                                    '<td class="text-right"><button class="btn btn-sm btn-danger delete_all"><i class="fa fa-trash"></i>' +
                                    '</button>Delete all </td>' +
                                    ' <td></td>' +
                                    ' <td></td>' +
                                    ' <td></td>' +
                                    ' <td><strong>Total</strong></td>' +
                                    ' <td class="text-right" id="total">' + total + ' €</td>' +
                                    ' </tr>'
                                );
                            }

                            var info = { id: idlog };
                            fav('module/cart/controller/controller_cart.php?op=checks', info)
                                .then(function (data) {
                                    //console.log(JSON.parse(data));
                                    console.log(total)
                                    var check = JSON.parse(data);
                                    console.log(check)
                                    if (check.length == 1) {
                                        console.log(check[0])
                                        $('#prices_tot').remove();
                                        $("#prods").append(
                                            '<tr>' +
                                            '<td>' +
                                            '<button value="del_check" id="check" type="button" class="close" aria-label="Close">' +
                                            '<span aria-hidden="true">&times;</span>' +
                                            '</button>' +
                                            '</td>' +
                                            ' <td>Cupon:</td>' +
                                            ' <td><button value="' + check[0] + '"  id="check">' + check[0] + '</button></td>' +
                                            ' <td></td>' +
                                            '<td>Descuento</td>' +
                                            '<td id="desc" class="text-right">- 0.00 €</td>' +
                                            ' </tr>' +
                                            '<tr id="prices_tot">' +
                                            '<td class="text-right"><button class="btn btn-sm btn-danger delete_all"><i class="fa fa-trash"></i>' +
                                            '</button>Delete all </td>' +
                                            ' <td></td>' +
                                            ' <td></td>' +
                                            ' <td></td>' +
                                            ' <td><strong>Total</strong></td>' +
                                            ' <td class="text-right" id="total">' + total + ' €</td>' +
                                            ' </tr>'
                                        );
                                    }

                                    action_quecke();
                                })

                        })//end_then


                })
        })


}


// FUNCTION DE LA DATA QUE ARRIBA PER $_SESSION
function prova_date() {
    var save = localStorage.getItem('prod');
    cart('module/cart/controller/controller_cart.php?op=dates', save)
        .then(function (info) {
            console.log("entra dates")
            var data = JSON.parse(info);
            console.log(data)
            //  if(info == 'ok') {

            //}

        })
    localStorage.removeItem('prod');
}

function action_quecke() {
    var click_cheke = 0

    // si  eliges cheke
    $(document).on('click', '#check', function () {
        console.log("checke");
        // click =click +1
        var checke = $(this).val();


        console.log(checke)

        var tota_row = document.getElementById("checkout").rows.length

        var total = document.getElementById("checkout").rows[tota_row - 1].cells[5].innerHTML
        console.log(total)

        if (checke != 'del_check') {
            if (click_cheke == 0) {

                localStorage.setItem('Cheque', checke);

                var total = parseInt(total)


                // se te añadira un descuento del 20 por ciento

                // ya que de momento todos son generados por la generacion de puntos y todos estos seran de un 10%
                //cuando existan mas cupones añadiremos una columna de porcentaje y lo cogeremos de ahi
                var descuento = total * 0.1
                console.log(descuento)
                var descuento = parseFloat(Math.round(descuento * 100) / 100).toFixed(2);
                console.log(descuento)

                document.getElementById('desc').innerHTML = '- ' + descuento + ' €';

                var tot = total * 0.9

                // }

                var tot = parseFloat(Math.round(tot * 100) / 100).toFixed(2);
                document.getElementById('total').innerHTML = tot + ' €';
            }
            click_cheke = click_cheke + 1
        } else {
            console.log("entra else");
            localStorage.removeItem('Cheque', checke);

            document.getElementById('desc').innerHTML = '- 0.00 €';

            show_prices()
            click_cheke = 0
        }
    });

}

function show_prices() {
    console.log("entra");
    var subtotal = 0

    //evitando las cabeceras / titulo
    //Evitando las filas del subtotal,total,etc ya que esas no muestran productos
    // var algo = ((document.getElementById("checkout").rows.length) - 4);
    // console.log(algo)
    for (i = 1; i <= ((document.getElementById("checkout").rows.length) - 5 || (document.getElementById("checkout").rows.length) - 4 ); i++) {
        console.log("enyra for")

        //para cada celda observas si esta disponible el producto o no
        var stock = document.getElementById("checkout").rows[i].cells[2].innerHTML
        // alert(stock);
        //cambiar HACER REQUEST
        //si lo esta:
        if (stock != "  NOT AVALIABLE  ") {
            console.log("YES are STOCK");

            // precio total en el momento
            var preu = document.getElementById("checkout").rows[i].cells[4].innerHTML
            console.log(preu)

            ///le quitas el '€' y lo conviertes en un int
            var preu = parseInt(preu)
            console.log(preu)

            //Hacer que  el subtotal sea cada  uno de los productos del cart  mas el siguiente
            subtotal = subtotal + preu
            console.log(subtotal)
        }

    }

    //lo hacemos para que siempre salgan dos decimales
    var sub = parseFloat(Math.round(subtotal * 100) / 100).toFixed(2);
    console.log(sub)

    //y lo añadimos a la celda del subtotal
    document.getElementById('subtotal').innerHTML = sub + ' €';


    //el encarcgado de los envios se lleva un 0.1% del precio de  cada unidad comprada
    //es decir un 0.1% del total
    gd = (subtotal * 0.01)
    console.log(gd)

    //ahora hacemos que salga siempre con dos numeros decimales
    var ship = parseFloat(Math.round(gd * 100) / 100).toFixed(2);
    console.log(ship)

    //y lo añadimos a la celda de shipping
    document.getElementById('gd').innerHTML = ship + ' €';

    ///el total sera los gastos de envios menos el subtotal
    total = subtotal + gd
    console.log(total)

    if ($("#check").length) {

        // console.log(descuento)
        // var descuento = parseFloat(Math.round(descuento * 100) / 100).toFixed(2);
        // console.log(descuento)

        var discount = document.getElementById('desc').innerHTML
        console.log(discount)
        discount = discount.replace("-", "");
        console.log(discount);
        var discount = parseInt(discount)
        console.log(discount)

        if (discount == 0) {
            var tot = total

        } else {
            var desc = total * 0.2
            var disct = parseFloat(Math.round(desc * 100) / 100).toFixed(2);
            console.log(disct)
            document.getElementById('desc').innerHTML = '- ' + disct + ' €'

            var tot = total - desc
        }



    } else {
        var tot = total

    }

    //ahora hacemos que salga siempre con dos numeros decimales
    var intotal = parseFloat(Math.round(tot * 100) / 100).toFixed(2);
    console.log(intotal)

    //y lo añadimos a la celda de intotall
    document.getElementById('total').innerHTML = intotal + ' €';


    //MYY
    // //ahora hacemos que salga siempre con dos numeros decimales
    // var tot = parseFloat(Math.round(total * 100) / 100).toFixed(2);
    // console.log(tot)

    // //y lo añadimos a la celda de total
    // document.getElementById('total').innerHTML = tot + ' €';


}

function calc_stock() {

    /// si cambias las unidades que quieres:
    $(document).on('change', '.stock', function () {

        //cogemos el id del que has clicado
        var idprod = $(this).attr('idprod');
        console.log(idprod)

        //y ves las unidades del que has clicado
        var unity = document.getElementById(idprod).value
        console.log(unity)
        //console.log(idprod)
        ///ves el precio que tiene
        fav('module/cart/controller/controller_cart.php?op=inf_price', idprod)
            .then(function (data) {
                //console.log(idprod)

                var price = JSON.parse(data);
                console.log(price.precio)
                // console.log(data)


                ///le quitas el '€' y lo conviertes en un int
                var unity_price = parseInt(price.precio)
                console.log(unity_price)

                ///calculas las unidades que tienes por el precio unitario 
                var total_price = unity * unity_price
                console.log(total_price)

                var total_price = document.getElementById(idprod + 'p').innerHTML = total_price + ' €';;
                //alert(total_price)
                show_prices();

            })
    })

}


function checkout() {
    $(document).on('click', '#shop', function () {
        console.log("click check")
        fav('module/cart/controller/controller_cart.php?op=check_cart')
            .then(function (data) {
                // console.log(data);
                if (data !== 'notlogged') { // SI ESTA LOGGEADO

                    console.log(data)
                    var user = data
                    console.log("nickname " + user);

                    var codigs = [];

                    for (i = 1; i <= ((document.getElementById("checkout").rows.length) - 4); i++) {
                        console.log("enyra for")

                        //para cada celda observas si esta disponible el producto o no
                        var stock = document.getElementById("checkout").rows[i].cells[2].innerHTML
                        console.log(stock);
                        // alert(stock);
                        //cambiar HACER REQUEST
                        //si lo esta:
                        if (stock != "  NOT AVALIABLE  ") {
                            console.log("YES are STOCK");
                            var nameprod = document.getElementById("checkout").rows[i].cells[1].innerHTML
                            //console.log(nameprod);
                            info = { nick: nameprod }
                            console.log(info)
                            fav('module/cart/controller/controller_cart.php?op=name_product', info)
                                .then(function (data) {
                                    var cod = JSON.parse(data);
                                    console.log(cod)

                                    var unity = document.getElementById(cod.idprod).value;
                                    console.log(unity)


                                    var uni_prec = (cod.precio);

                                    var totali_precio = document.getElementById("checkout").rows.length
                                    var price_total = document.getElementById("checkout").rows[totali_precio - 1].cells[5].innerHTML

                                    console.log(price_total);
                                    price_total = price_total.replace(" €", "");
                                    console.log(price_total);



                                    var chequereg = localStorage.getItem('Cheque');
                                    console.log(chequereg)

                                    //array para cada prod:
                                    var prods = []

                                    //su codigo de referencia
                                    prods.push(cod.idprod)
                                    //y sus unidades
                                    prods.push(unity)
                                    prods.push(uni_prec)
                                    prods.push(user)
                                    prods.push(price_total)
                                    prods.push(chequereg)
                                    console.log(prods)

                                    codigs.push(prods)
                                    console.log(codigs)


                                    // save it
                                    localStorage.setItem('addcart', JSON.stringify(codigs));
                                    var save = localStorage.getItem('addcart');
                                    console.log(save)
                                    localStorage.removeItem('Cheque');

                                    var storage = { addcart: save };


                                    ///save it in $session
                                    cart('module/cart/controller/controller_cart.php?op=save_cart', storage)
                                        .then(function (data) {
                                            console.log(data)
                                            alert("hola")
                                            redirect_home();


                                        })


                                })
                        }
                    }
                } else {
                    //REDIRECT LOGIN

                    var log = { log: "on" }
                    cart('module/cart/controller/controller_cart.php?op=savelog', log)
                        .then(function (data) {
                            console.log(data)
                            alert("hola");

                            redirect_login();


                        })



                }

            })
    })
}


function prova_date() {
    //localStorage.setItem('addcart', JSON.stringify(codigs));
    // var save = localStorage.getItem('addcart');
    // var storage = { addcart: save };
    // cart('module/cart/controller/controller_cart.php?op=addcheckout',storage)
    // .then(function (data) {
    //     console.log(data)

    // })

    $.getJSON('https://api.ipify.org?format=json', function (data) {
        console.log(data.ip);
    })
}


function redirect_home() {
    var url = "index.php?page=controller_home&op=list"
    $(window).attr('location', url);

}

function redirect_login() {
    var url = "index.php?page=controller_login&op=view_register"
    $(window).attr('location', url);

}
