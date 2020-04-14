

function activiti() {
   // console.log("entra activiti");
     $.ajax({
        type : 'GET',
        url  : 'module/login/controller/controller_login.php?&op=activiti',
        dataType:'json',
    })
    .done(function (data) {	
        //console.log("entra activiti done");				
            if(data=="inactive"){
                alert("Se ha cerrado la cuenta por inactividad")

                setTimeout('window.location.href = "index.php?page=controller_login&op=logout";',1000);
            }
        })
    


}
   
function session() {

   // console.log("entra session");
    if (document.getElementById('nick')) {
      //  console.log("entra session");
        $.ajax({
            type: 'POST',
            url: 'module/login/controller/controller_login.php?op=session',
            dataType:'json',
        })
        .done(function (data) {
         //   console.log("entra session done");
                console.log(data);
                var ElementDiv = document.createElement('div');
                ElementDiv.id = "container_session";
                ElementDiv.innerHTML = 	"<div id='content'>"+data.nickname+"</div>"
                +"<img  style='width:50px; height50px;' src="+data.avatar+".jpg></img>";
                document.getElementById("container").appendChild(ElementDiv);
            })
        
     }

}
$(document).ready(function(){

   // console.log("entra activiti js");
   
    activiti();
    session();
    
});
