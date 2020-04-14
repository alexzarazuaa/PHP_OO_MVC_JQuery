<?php

$path = $_SERVER['DOCUMENT_ROOT'] . "/SPORT_V1.3/";
include($path . "model/connect.php");

//@session_start();

class Daoshop
{
  // SELECT ALL 
  function select_products($limit)
  {

    $sql = " SELECT * from products order by count_view desc limit $limit , 3";

    $conexion = Conectar::con();
    $res = mysqli_query($conexion, $sql);
    Conectar::close($conexion);
    return $res;
  }


  //SELECT DE UN SOLO PRODUCTO 

  function select_pro($idprod)
  {

    $sql = "SELECT nombre,marca,talla,imagen,precio,descripcion,idprod FROM products  WHERE idprod='$idprod'";
    $conexion = Conectar::con();
    $res = mysqli_query($conexion, $sql)->fetch_object();
    Conectar::close($conexion);
    return $res;
  }

  function select_cat($clas)
  {

    $sql = "SELECT *  FROM products WHERE categoria='$clas' order by count_view desc ";
    $conexion = Conectar::con();
    $res = mysqli_query($conexion, $sql);
    Conectar::close($conexion);
    return $res;
  }

  function select_maps()
  {
    $sql = " SELECT * FROM shops";


    $conexion = Conectar::con();
    $res = mysqli_query($conexion, $sql);
    Conectar::close($conexion);
    return $res;
  }

  function select_filter($filters)
  {
    $sql = " SELECT * FROM products $filters order by count_view desc";

    $conexion = Conectar::con();
    $res = mysqli_query($conexion, $sql);
    Conectar::close($conexion);
    return $res;
  }
  function search($btnsearch)
  {

    $sql = "SELECT *  FROM products $btnsearch order by count_view desc";
    $conexion = Conectar::con();
    $res = mysqli_query($conexion, $sql);
    Conectar::close($conexion);
    return $res;
  }

  function count_views($idprod)
  {

    $sql = "update products set count_view = (count_view + 1) where idprod = '$idprod' ";

    $conexion = Conectar::con();
    $res = mysqli_query($conexion, $sql)->fetch_object();
    Conectar::close($conexion);
    return $res;
  }

  function select_countp()
  {
    $sql = " SELECT count(*) as allpages FROM products";


    $conexion = Conectar::con();
    $res = mysqli_query($conexion, $sql);
    Conectar::close($conexion);
    return $res;
  }

  function geomaps()
  {

    $sql = " SELECT distinct  s.Tienda,s.latitud,s.longitud FROM products p , shops s, geomaps g where s.idshop = g.idshop and p.idprod = g.idprod";


    $conexion = Conectar::con();
    $res = mysqli_query($conexion, $sql);
    Conectar::close($conexion);
    return $res;
  }

  function geomaps_desc($latitud, $longitud)
  {

    $sql = " SELECT distinct p.nombre FROM products p , shops s, geomaps g where s.idshop = g.idshop and p.idprod = g.idprod and s.latitud = '$latitud 'and s.longitud = '$longitud' ";


    $conexion = Conectar::con();
    $res = mysqli_query($conexion, $sql);
    Conectar::close($conexion);
    return $res;
  }



  function like($nickname, $idprod)
  {

    $sql = "INSERT INTO likes (user_ID,product_code) values ('$nickname','$idprod')";

    $conexion = Conectar::con();
    $res = mysqli_query($conexion, $sql);
    Conectar::close($conexion);
    return $res;
  }

  function unlike($nickname, $idprod)
  {

    $sql = " DELETE from likes where user_ID = '$nickname' and product_code = '$idprod' ";


    $conexion = Conectar::con();
    $res = mysqli_query($conexion, $sql);
    Conectar::close($conexion);
    return $res;
  }

  function paint_likes($nickname)
  {

    $sql = " SELECT *  from likes where user_ID = '$nickname'  ";


    $conexion = Conectar::con();
    $res = mysqli_query($conexion, $sql);
    Conectar::close($conexion);
    return $res;
  }

  function insert_cart ($idprod,$id) {
   
    $sql = " INSERT INTO cart values ('$idprod','$id') ";


    $conexion = Conectar::con();
    $res = mysqli_query($conexion, $sql);
    Conectar::close($conexion);
    return $res;
  }
}
