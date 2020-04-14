 <?php

  $path = $_SERVER['DOCUMENT_ROOT'] . "/SPORT_V1.3/";
  include($path . "model/connect.php");


  class Daohome
  {

    function select_img()
    {
      $sql = "SELECT link,categoria FROM images ";


      $conexion = Conectar::con();
      $res = mysqli_query($conexion, $sql);
      Conectar::close($conexion);
      return $res;
    }

    // terminar de hacer el insert de los precios

    function select_categori($limit)
    {

      $sql = " SELECT categoria,imagen from categories order by cont_viewed desc limit $limit  ";

      $conexion = Conectar::con();
      $res = mysqli_query($conexion, $sql);
      Conectar::close($conexion);
      return $res;
    }

    function countval($categoria)
    {

      $sql = "update categories set cont_viewed = (cont_viewed + 1) where categoria = '$categoria' ";

      $conexion = Conectar::con();
      $res = mysqli_query($conexion, $sql);
      Conectar::close($conexion);
      return $res;
    }

    function insert_facturas($nickname, $price)
    {
      $sql = "INSERT INTO facturas (nickname,precio,fecha) values ('$nickname','$price',now())";

      $conexion = Conectar::con();
      $res = mysqli_query($conexion, $sql);
      Conectar::close($conexion);
      return $res;
    }
    function insert_codfa($nickname, $id, $cant, $punidad, $cod_fact)
    {
      $sql = "INSERT INTO lineas (nickname,id_prod,cant,precio_unidad,cod_factura,fecha) values ('$nickname','$id','$cant','$punidad','$cod_fact',now())";

      $conexion = Conectar::con();
      $res = mysqli_query($conexion, $sql);
      Conectar::close($conexion);
      return $res;
    }
    function found_cod()
    {
      $sql = "SELECT cod_fact from facturas order by cod_fact desc limit 1";

      $conexion = Conectar::con();
      $res = mysqli_query($conexion, $sql)->fetch_object();
      Conectar::close($conexion);
      return $res;
    }


    function update_stock($id, $cant)
    {
      $sql = "UPDATE products set stock = stock-'$cant' where idprod = '$id'";

      $conexion = Conectar::con();
      $res = mysqli_query($conexion, $sql);
      Conectar::close($conexion);
      return $res;
    }

    function delete_cart($nickname)
    {
      $sql = "DELETE from cart where id='$nickname'";
      $conexion = Conectar::con();
      $res = mysqli_query($conexion, $sql);
      Conectar::close($conexion);
      return $res;
    
    }




    function mypoints_update($mypoins, $nickname)
    {
      $sql = "UPDATE user set points=(points+'$mypoins') WHERE nickname= '$nickname'";
      $conexion = Conectar::con();
      $res = mysqli_query($conexion, $sql);
      Conectar::close($conexion);
      return $res;
    }

    function mypoints_select($nickname)
    {
      $sql = "SELECT points FROM user WHERE nickname= '$nickname'";
      $conexion = Conectar::con();
      $res = mysqli_query($conexion, $sql)->fetch_object();
      Conectar::close($conexion);
      return $res;
    }

    function mycupons_insert($nickname, $checks)
    {
      $sql = "INSERT into check_purchase (id_nick,checks) values('$nickname','$checks')";
      $conexion = Conectar::con();
      $res = mysqli_query($conexion, $sql);
      Conectar::close($conexion);
      return $res;
    }

    function mypoints_rest($mypoints, $nickname)
    {
      $sql = "UPDATE user set points=(points-'$mypoints') WHERE nickname= '$nickname'";
      $conexion = Conectar::con();
      $res = mysqli_query($conexion, $sql);
      Conectar::close($conexion);
      return $res;
    }

   
    function cheque_reg_update($nickname,$chequereg)
    {
      $sql = "UPDATE  check_purchase set chek_status=true  where id_nick='$nickname' and checks='$chequereg'";
     
      $conexion = Conectar::con();
      $res = mysqli_query($conexion, $sql);
      Conectar::close($conexion);
      return $res;
    }



  }
