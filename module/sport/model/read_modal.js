
// MODAL 


$(document).ready(function () {
    //console.log("Modal VIEWS");
    $('#table_list').DataTable();
        $('body').on("click",".Button_blue", function () {
        console.log("Modal");
        var id = this.getAttribute('id');

        $.ajax({
            type: 'GET',
            dataType: "json",
            url: "module/sport/controller/controller_sport.php?op=read_modal&sport_modal=" + id,
        })
         .done(function(data) {
                 $('#modalcontent').empty();
                 $('#name').html(data.name);
                 $('<div></div>').attr('id','Div1').appendTo('#modalcontent');

                 $("#Div1").html(
                            '<br><span>Codigo de usuario:   <span id="ref">'+data.codref+'</span></span></br>'+
                            '<br><span>Nombre:   <span id="name">'+data.name+'</span></span></br>'+
                            '<br><span>CityShop:     <span id="cityShop">'+data.cityShop+'</span></span></br>'+
                            '<br><span>UserType:     <span id="userType">'+data.userType+'</span></span></br>'+
                            '<br><span>Cliente Habitual:     <span id="habitual">'+data.habitual+'</span></span></br>'+
                            '<br><span>Deporte:    <span id="sport">'+data.sport+'</span></span></br>'+
                            '<br><span>Fecha de Nacimiento:     <span id="date_birthday">'+data.date_birthday+'</span></span></br>'
                  )

            modal(data.name);
         })
         .fail(function( jqXHR, textStatus, errorThrown ) {
             if ( console && console.log ) {
                 console.log( "La solicitud ha fallado: " +  textStatus);
             }
        }); // end_fail
    });//emdclickfunction
 });//end_ready

function modal(data){
                $("#Div1").show();
                $("#Div1").dialog({
                   
                    title:data,
                    width: 450, 
                    height: 400, 
                    resizable: "false",
                    modal: "true", 
                    buttons: {
       
                        Ok: function () {
                            $(this).dialog("close");
                        }
                    },
                    show: {
                       effect: "fade",
                       duration: 1000
                    },
                    hide: {
                        effect: "fade",
                        duration: 1000
                    }
                });
}
