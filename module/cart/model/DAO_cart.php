<?php

$path = $_SERVER['DOCUMENT_ROOT'] . "/SPORT_V1.3/";
include($path . "model/connect.php");

class DAOcart
{

    function addcart($id_prod, $cant, $price)
    {

        $sql = "INSERT INTO `cart` (`id_prod`, `cant`, `price`) VALUES ('$id_prod', '$cant', '$price')";
        //echo $sql;
        $conexion = Conectar::con();
        $res = mysqli_query($conexion, $sql);
        Conectar::close($conexion);

        return $res;
    }
    function delete_prod($id_prod,$id)
    {

        $sql = "DELETE FROM `cart` WHERE id_prod ='$id_prod' and id = '$id'";
        //echo $sql;
        $conexion = Conectar::con();
        $res = mysqli_query($conexion, $sql);
        Conectar::close($conexion);

        return $res;
    }
    
    function delete_all_cart($id)
    {

        $sql = "DELETE FROM `cart` where id = '$id'";
        //echo $sql;
        $conexion = Conectar::con();
        $res = mysqli_query($conexion, $sql);
        Conectar::close($conexion);

        return $res;
    }

    function show_cart($id_prod)
    {
        $sql = "SELECT * FROM `cart` WHERE id_prod ='$id_prod'";
        //echo $sql;
        $conexion = Conectar::con();
        $res = mysqli_query($conexion, $sql);
        Conectar::close($conexion);

        return $res;
    }

    function show_price($idprod)
    {
        $sql = "SELECT precio FROM products WHERE idprod ='$idprod'";
        //echo $sql;
        $conexion = Conectar::con();
        $res = mysqli_query($conexion, $sql)->fetch_object();
        Conectar::close($conexion);

        return $res;
    }
   

    function info_prod($id)
    {
        $sql = "SELECT * FROM products where idprod in (SELECT id_prod FROM cart where id='$id')";
        //echo $sql;
        $conexion = Conectar::con();
        $res = mysqli_query($conexion, $sql);
        Conectar::close($conexion);

        return $res;
    }

    function info_name ($name) {

        $sql = "SELECT idprod,precio FROM products where nombre = '$name' ";
        //echo $sql;
        $conexion = Conectar::con();
        $res = mysqli_query($conexion, $sql)-> fetch_object();
        Conectar::close($conexion);

        return $res;

    }

    function show_nick($email)
    {
        $sql = "select nickname from user where user_email = '$email'";
        //echo $sql;
        $conexion = Conectar::con();
        $res = mysqli_query($conexion, $sql)->fetch_object();
        Conectar::close($conexion);

        return $res;
    }

    function update_id($email)
    {
        $sql = "select nickname from user where user_email = '$email'";
        //echo $sql;
        $conexion = Conectar::con();
        $res = mysqli_query($conexion, $sql);
        Conectar::close($conexion);

        return $res;
    }

    function select_mycheck ($id) {
        $sql = "select checks from check_purchase where id_nick = '$id' and chek_status=false limit 1 ";
  
        $conexion = Conectar::con();
        $res = mysqli_query($conexion, $sql);
        Conectar::close($conexion);

        return $res;

    }


}
