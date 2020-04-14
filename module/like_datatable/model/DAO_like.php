<?php

$path = $_SERVER['DOCUMENT_ROOT'] . "/SPORT_V1.3/";
include($path . "model/connect.php");
  //  include("model/connect.php");

  class DaoLikes {
    function select_likes(){
        $sql = "SELECT codref, name, sport, date_birthday  FROM sport_pro ";
     
        
        $conexion = Conectar::con();
        $res = mysqli_query($conexion, $sql);
        Conectar::close($conexion);
        return $res;
    }
    		

  }