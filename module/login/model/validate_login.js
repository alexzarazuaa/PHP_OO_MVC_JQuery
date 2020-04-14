
$(function () {

    $('#login-form-link').click(function (e) {
        $("#formlogin").delay(100).fadeIn(100);
        $("#register-form").fadeOut(100);
        $('#register-form-link').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });
    $('#register-form-link').click(function (e) {
        $("#register-form").delay(100).fadeIn(100);
        $("#formlogin").fadeOut(100);
        $('#formlogin-link').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });

});
// regexp validators

function validate_register() {
    var email = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;

    if (document.register_form.email.value.length === 0) {
        document.getElementById('err_email').innerHTML = "Tienes que escribir el mail";
        document.register_form.email.focus();
        return 0;
    }
    if (!email.test(document.register_form.email.value)) {
        document.getElementById('err_email').innerHTML = "El formato del mail es invalido";
        document.register_form.email.focus();
        return 0;
    }
    document.getElementById('err_email').innerHTML = "";

    if (document.register_form.nickname.value.length === 0) {
        document.getElementById('err_nickname').innerHTML = "Tienes que escribir el nombre";
        document.register_form.nickname.focus();
        return 0;
    }
    if (document.register_form.nickname.value.length < 2) {
        document.getElementById('err_nickname').innerHTML = "El nombre tiene que tener más de 2 caracteres";
        document.register_form.nickname.focus();
        return 0;
    }

    document.getElementById('err_nickname').innerHTML = "";
    if (document.register_form.password.value.length === 0) {
        document.getElementById('pasw_er').innerHTML = "Tienes que escribir la contraseña";
        document.register_form.password.focus();
        return 0;
    }
    if (document.register_form.password.value.length < 6) {
        document.getElementById('pasw_er').innerHTML = "La contraseña tiene que tener más de 6 caracteres";
        document.register_form.password.focus();
        return 0;
    }
    document.getElementById('pasw_er').innerHTML = "";

    if (document.register_form.c_password.value.length === 0) {
        document.getElementById('pasw_er').innerHTML = "Tienes que escribir la contraseña";
        document.formregister.rpassword.focus();
        return 0;
    }
    if (document.register_form.c_password.value != document.register_form.password.value) {
        document.getElementById('pasw_er_c').innerHTML = "La contraseña tiene que ser la misma";
        document.register_form.rpassword.focus();
        return 0;
    }
    document.getElementById('pasw_er_c').innerHTML = "";
}


function validate_login() {
    var email = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
    if (document.formlogin.email_log.value.length === 0) {
        document.getElementById('err_emaillog').innerHTML = "Tienes que escribir el mail";
        document.formlogin.email_log.focus();
        return 0;
    }
    if (!email.test(document.formlogin.email_log.value)) {
        document.getElementById('err_emaillog').innerHTML = "El formato del mail es invalido";
        document.formlogin.email_log.focus();
        return 0;
    }
    document.getElementById('err_emaillog').innerHTML = "";


    if (document.formlogin.logpassword.value.length === 0) {
        document.getElementById('err_passlog').innerHTML = "Tienes que escribir la contraseña";
        document.formlogin.logpassword.focus();
        return 0;
    }
    if (document.formlogin.logpassword.value.length < 6) {
        document.getElementById('err_passlog').innerHTML = "La contraseña tiene que tener más de 6 caracteres";
        document.formlogin.logpassword.focus();
        return 0;
    }
    document.getElementById('err_passlog').innerHTML = "";
}



function redirect_home() {
    var url = "index.php?page=controller_home&op=list"
    $(window).attr('location', url);

}

function redirect_cart() {
    var url = "index.php?page=controller_cart&op=view"
    $(window).attr('location', url);

}




function logout() {
    $.ajax({
        type: 'GET',
        url: 'module/login/controller/controller_login.php?op=logout',
    })
        .done(function (data) {
            // console.log('asdf');

            console.log(data);
            if (data == '"done"') {
                redirect_home();
            }
        })

}

var reg = function (url, data) { //GENERAL FUNCTION RETURN PROMISE

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

function register() {
    console.log("Click register1");
    //register form
    console.log("entra");
    if (validate_register() != 0) {
        var userinfo = $('#register-form').serialize();
        console.log(userinfo)
        reg('module/login/controller/controller_login.php?op=user_exist', userinfo)
            .then(function (data) {
                console.log("entra1");
                console.log(data);
                if (data == '"noexiste"') {
                    reg('module/login/controller/controller_login.php?op=register', userinfo)
                        .then(function (data) {
                            console.log(data);
                            if (data == '"ok"') {
                                alert("Usuario registrado corerectamente")
                                redirect_home();
                            };
                        })

                }
                else {
                    alert("El usuario ya existe");
                }
            }
            )
    }

}


var ipu = new Promise(function (resolve) { //obtener  ip for user no logged

    $.getJSON('https://api.ipify.org?format=json', function (data) {
        //console.log(data.ip);
        console.log(data.ip);
        resolve(data.ip);
    })
})
function login() {
    console.log("ENTRA FUNC LOGIN");
    if (validate_login() != 0) {
        var userinfo = $('#formlogin').serialize();
        console.log(userinfo);
        reg('module/login/controller/controller_login.php?op=login', userinfo)
            .then(function (data) {
                console.log(data);
                if (data == '"existe"') {
                    ipu
                    .then(function (ipu) {
                    var change = userinfo.split("&");
                    console.log(change)
                    var change2 = change[0].split("=");
                    console.log(change2)

                    var email = change2[1].replace("%40", "@");
                    var info = { email: email , ip : ipu};
                  
                            console.log(ipu)
                            reg('module/login/controller/controller_login.php?op=change_us', info)
                                .then(function (info) {
                                    console.log(info);
                                    alert("change");
                                    reg('module/login/controller/controller_login.php?op=log_user')
                                        .then(function (data) {
                                            if (data == "on") {
                                                console.log(data);
                                                alert("on");
                                                redirect_cart();
                                            } else {
                                                console.log(data);
                                                alert(" no on");
                                                // alert("Sesion iniciada correctamente");
                                                // localStorage.setItem('user',data.user_email);
                                                redirect_home();
                                            }

                                        })
                                })
                        })
                } else {
                    alert("Hay un problema en el inicio se sesión, email o contraseña no válidos")
                }

            })

    }



}





function btn_login_reg() {
    // login form
    $('#loginbtn').on("click", function () {
        //console.log("entra CLICK LOGIN");
        login();

    })

    //register
    $('#register-submit').on("click", function () {
        //console.log("entra CLICK LOGIN");
        register();

    })
}

function key_log_reg() {
    $('#logpassword').on("keydown", function (e) {
        // console.log("clickpass")
        if (e.which == 13) {
            login();
        }
    });
    //KEY LOG CONFIRM PASSWORD REGISTER
    $('#c_password').on("keydown", function (e) {
        console.log("clickpass")
        if (e.which == 13) {
            register();
        }
    });
}

$(document).ready(function () {

    //console.log("valideate login");

    key_log_reg();
    btn_login_reg();

});//ENDREADY



