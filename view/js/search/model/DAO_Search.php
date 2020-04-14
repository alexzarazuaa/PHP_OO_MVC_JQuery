<?php

$path = $_SERVER['DOCUMENT_ROOT'] . "/SPORT_V1.3/";
include($path . "model/connect.php");

class DAOSearch
{

    function readtalla($marca)
    {
        $sql = "SELECT DISTINCT talla FROM products $marca";

        $conexion = Conectar::con();
        $res = mysqli_query($conexion, $sql);
        Conectar::close($conexion);
        return $res;
    }

    function readMarca($talla)
    {
        $sql = "SELECT DISTINCT marca FROM products $talla ";
        $conexion = Conectar::con();
        $res = mysqli_query($conexion, $sql);
        Conectar::close($conexion);
        return $res;
    }
                        //  ojo hacerlo primero por $get pasandolos a la funcion 
                        //i despres quan funcione ja tirarli al post
    function autocomp($complete) 
    {
        
        $sql = "SELECT *  FROM products $complete";
        $conexion = Conectar::con();
        $res = mysqli_query($conexion, $sql);
        Conectar::close($conexion);
        return $res;
    }

 
    

}
