<?php

$path = $_SERVER['DOCUMENT_ROOT'] . "/SPORT_V1.3/";
include($path . "model/connect.php");


class DAOmaps
{
  function select_maps()
  {
    $sql = " SELECT * FROM shops";


    $conexion = Conectar::con();
    $res = mysqli_query($conexion, $sql);
    Conectar::close($conexion);
    return $res;
  }
}