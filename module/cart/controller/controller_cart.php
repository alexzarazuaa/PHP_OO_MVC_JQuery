<?php
$path = $_SERVER['DOCUMENT_ROOT'] . "/SPORT_V1.3/";
include($path . "module/cart/model/DAO_cart.php");

@session_start();


switch ($_GET['op']) {
  case 'view';
    //print_r("entra l");
    include("module/cart/view/cart.html");
    break;


  case 'delete_prod_cart';

    try {
      $daocart = new DAOcart();
      $rlt = $daocart->delete_prod($_POST['idprod'], $_POST['id']);
    } catch (Exception $e) {
      echo json_encode("error");
    }

    if (!$rlt) {
      echo json_encode("not found");
    } else {
      echo json_encode("eliminated");
    }
    break;

  case 'delete_all_cart';

    try {
      $daocart = new DAOcart();
      $rlt = $daocart->delete_all_cart($_POST['id']);
    } catch (Exception $e) {
      echo json_encode("error");
    }

    if (!$rlt) {
      echo json_encode("not found");
    } else {
      echo json_encode("eliminated");
    }
    break;


  case 'check_cart':

    if (!isset($_SESSION['nickname'])) {
      echo ("notlogged");
    } else {
      //echo ("logged");
      echo ($_SESSION['nickname']);
    }

    break;


  case 'showcart':
    try {
      $daocart = new DAOcart();
      $rst = $daocart->show_cart($_POST['id_prod']);
      //echo $rst;
    } catch (Exception $e) {
      echo  json_encode("error");
    }
    if (!$rst) {
      echo ("error paint");
    } else {
      $inf = array();
      foreach ($rst as $row) {
        array_push($inf, $row);
      }
      //print_r($info);
      echo json_encode($inf);
    }
    break;

  case 'dates':

    $_SESSION['product'] = $_POST['id_prod'];
    echo ($_SESSION['product']);

    break;

  case 'inf_prods':

    //      echo json_encode($_POST['id']);

    // foreach ($_POST as $id => $valor) {
    // }
    try {
      $daocart = new DAOcart();
      $rst = $daocart->info_prod($_POST['id']);
    } catch (Exception $e) {
      echo json_encode("error");
    }

    if (!$rst) {
      echo json_encode("not found");
    } else {
      $info = array();
      foreach ($rst as $row) {
        array_push($info, $row);
      }
      echo json_encode($info);
    }
    break;
  case 'inf_price':
    foreach ($_POST as $idprod => $valor) {
    }
    try {
      $daocart = new DAOcart();
      $rst = $daocart->show_price($idprod);
    } catch (Exception $e) {
      echo json_encode("error");
    }

    if (!$rst) {
      echo json_encode("NOT FOUND PRICE");
    } else {
      echo json_encode($rst);
    }
    break;

  case 'name_product':
    try {
      $daocart = new DAOcart();
      $rst = $daocart->info_name($_POST['nick']);
      //echo $rst;
    } catch (Exception $e) {
      echo  json_encode("error");
    }
    if (!$rst) {
      echo ("error insert");
    } else {
      //print_r($info);
      echo json_encode($rst);
    }
    break;

  case 'save_cart':

    $_SESSION['add_cart'] = $_POST['addcart'];
    echo json_encode($_SESSION['add_cart']);
    break;


  case 'savelog':

    $_SESSION['log'] = $_POST['log'];
    echo json_encode($_SESSION['log']);
    break;


  case 'checks':
   // echo ($_POST['id']);
    try {
      $daocart = new DAOcart();
      $rst = $daocart->select_mycheck($_POST['id']);
      //echo $rst;
    } catch (Exception $e) {
      echo  json_encode("error");
    }
    if (!$rst) {
      echo ("error select");
    } else {
      $info = array();
      foreach ($rst as $row) {
          array_push($info, $row['checks']);
      }
  }
      echo json_encode($info);
    
    break;
}
