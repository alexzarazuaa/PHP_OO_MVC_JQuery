function validate_ref(ref) {
    if (ref.length > 0) {
        var regexp = /^[0-9]{3}$/;
        return regexp.test(ref);
    }
    return false;
}

function validate_name(name) {
    if (name.length > 0) {
        var regexp = /^[a-zA-Z]*$/;
        return regexp.test(name);
    }
    return false;
}

function validate_city(city) {
    if (city.length > 0) {
        var regexp = /^[a-zA-Z]*$/;
        return regexp.test(city);
    }
    return false;
}
function validate_email(email) {
    if (email.length > 0) {
        var regexp = /^[A-Z0-9._%+-]+@(?:[A-Z0-9-]+.)+[A-Z]{2,4}$/i;
        return regexp.test(email);
    }
    return false;
}
function validate_UserType(texto) {
    var i;
    var ok = 0;
    for (i = 0; i < texto.length; i++) {
        if (texto[i].checked) {
            ok = 1
        }
    }

    if (ok == 1) {
        return true;
    }
    if (ok == 0) {
        return false;
    }
}
function validate_habituals(texto) {
    var i;
    var ok = 0;
    for (i = 0; i < texto.length; i++) {
        if (texto[i].checked) {
            ok = 1
        }
    }

    if (ok == 1) {
        return true;
    }
    if (ok == 0) {
        return false;
    }
}

function validate_sports(array) {
    var i;
    var ok = 0;
    for (i = 0; i < array.length; i++) {
        if (array[i].checked) {
            ok = 1
        }
    }

    if (ok == 1) {
        return true;
    }
    if (ok == 0) {
        return false;
    }
}





function validate_sport() {

    var check = true;

    var ref = document.getElementById('ref').value;
    var name = document.getElementById('name').value;
    var city = document.getElementById('city').value;
    var email = document.getElementById('email').value;
    var userType = document.getElementsByName('user');
    var habituals = document.getElementsByName('habitual');
    var sports = document.getElementsByName('sport[]');

    //var date_birthday = document.getElementById('date_birthday').value;

    var v_ref = validate_ref(ref);
    var v_name = validate_name(name);
    var v_city = validate_city(city);
    var v_email = validate_email(email);
    var r_user = validate_UserType(userType);
    var r_habitual = validate_habituals(habituals);
    var r_sport = validate_sports(sports);

    //var v_date_birthday = validate_date_birthday(date_birthday);



    console.log("ANTENTO QUE ENRTRAS ");
    if ((v_ref == "") || (v_name == "") || (v_city == "") || (v_email == "")) {  //COMPRUEBA CAMPOS VACIOS
        console.log("entra en campos vacios");
        alert("Los campos no pueden quedar vacios");
        check = false;
        return check;
    }
    if (!v_ref) {
        document.getElementById('e_ref').innerHTML = "El Codigo De Referencia introducido no es valido";
        check = false;
        return check;
    } else {
        document.getElementById('e_ref').innerHTML = "";
        // console.log(v_ref);
    }

    if (!v_name) {
        document.getElementById('e_name').innerHTML = "El noombre introducido no es valido";
        check = false;
        return check;
    } else {
        document.getElementById('e_name').innerHTML = "";
    }

    if (!v_email) {
        document.getElementById('e_email').innerHTML = "El email introducido no es valido";
        check = false;
        return check;
    } else {
        document.getElementById('e_email').innerHTML = "";
    }

    if (!v_city) {
        document.getElementById('e_city').innerHTML = "El nombre de la ciudad introducida no es valido";
        check = false;
        return check;
    } else {
        document.getElementById('e_city').innerHTML = "";
    }
    if (!r_user) {
        document.getElementById('e_user').innerHTML = " * No has seleccionado ningun genero";
        check = false;
        return check;
    } else {
        document.getElementById('e_user').innerHTML = "";
    }
    if (!r_habitual) {
        document.getElementById('e_habitual').innerHTML = " * No has seleccionado ninguna opción";
        check = false;
        return check;
    } else {
        document.getElementById('e_habitual').innerHTML = "";
    }

    if (!r_sport) {
        console.log("entra sport");
        document.getElementById('e_sport').innerHTML = " * No has seleccionado ningun deporte";
        check = false;
        return check;
    } else {
        document.getElementById('e_sport').innerHTML = "";
    }






    document.formsport.submit();
    document.formsport.action = "index.php?page=controller_sport&op=create";

}
function validate_sport_update() {

    //console.log("entra")
    var check = true;

    var ref = document.getElementById('ref').value;
    var name = document.getElementById('name').value;
    var city = document.getElementById('city').value;
    var email = document.getElementById('email').value;
    var userType = document.getElementsByName('user');
    var habituals = document.getElementsByName('habitual');
    var sports = document.getElementsByName('sport[]');

    //var date_birthday = document.getElementById('date_birthday').value;

    var v_ref = validate_ref(ref);
    var v_name = validate_name(name);
    var v_city = validate_city(city);
    var v_email = validate_email(email);
    var r_user = validate_UserType(userType);
    var r_habitual = validate_habituals(habituals);
    var r_sport = validate_sports(sports);

    //var v_date_birthday = validate_date_birthday(date_birthday);



    console.log("ANTENTO QUE ENRTRAS update ");
    if ((v_ref == "") || (v_name == "") || (v_city == "") || (v_email == "")) {  //COMPRUEBA CAMPOS VACIOS
        //console.log("entra en campos vacios");
        alert("Los campos no pueden quedar vacios");
        check = false;
        return check;
    }
    if (!v_ref) {
        document.getElementById('e_ref').innerHTML = "El Codigo De Referencia introducido no es valido";
        check = false;
        return check;
    } else {
        document.getElementById('e_ref').innerHTML = "";
        console.log(v_ref);
    }

    if (!v_name) {
        document.getElementById('e_name').innerHTML = "El noombre introducido no es valido";
        check = false;
        return check;
    } else {
        document.getElementById('e_name').innerHTML = "";
    }

    if (!v_email) {
        document.getElementById('e_email').innerHTML = "El email introducido no es valido";
        check = false;
        return check;
    } else {
        document.getElementById('e_email').innerHTML = "";
    }

    if (!v_city) {
        document.getElementById('e_city').innerHTML = "El nombre de la ciudad introducida no es valido";
        check = false;
        return check;
    } else {
        document.getElementById('e_city').innerHTML = "";
    }
    if (!r_user) {
        document.getElementById('e_user').innerHTML = " * No has seleccionado ninguna opción";
        check = false;
        return check;
    } else {
        document.getElementById('e_user').innerHTML = "";
    }
    if (!r_habitual) {
        //console.log();
        document.getElementById('e_habitual').innerHTML = " * No has seleccionado ninguna opción ";
        check = false;
        return check;
    } else {
        document.getElementById('e_habitual').innerHTML = "";
    }

    if (!r_sport) {
        console.log("entra sport");
        document.getElementById('e_sport').innerHTML = " * No has seleccionado ningun deporte";
        check = false;
        return check;
    } else {
        document.getElementById('e_sport').innerHTML = "";
    }




    document.update_formsport.submit();
    document.update_formsport.action = "index.php?page=controller_sport&op=update";

}


function validate_sport_delete($codref) {

    document.delete_sport.submit();
    document.delete_sport.action = "index.php?page=controller_sport&op=delete&id=";
}

function validate_sport_delete_all() {

    document.delete_all_sport.submit();
    document.delete_all_sport.action = "index.php?page=controller_sport&op=delete_all";
}

