  
<?php   

    function validate($codref){
         //  include("model/connect.php");
        //devolvera falso en caso de que el codigo de usuario ya exista en  la BD
        //devolvera true si no lo esta
        if (DAO_Sport::select_sport($codref)) 
            $check = false;
        else
            $check = true;
        return $check;
    }