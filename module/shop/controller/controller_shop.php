<?php
$path = $_SERVER['DOCUMENT_ROOT'] . "/SPORT_V1.3/";
include($path . "module/shop/model/DAO_shop.php");

@session_start();

switch ($_GET['op']) {

	case 'view';
		//print_r("entra l");
		include("module/shop/view/shop.html");
		break;

	case 'productos';

		try {
			$daoshop = new Daoshop();
			$rst = $daoshop->select_products($_GET['limit']);
		} catch (Exception $e) {
			echo json_encode("error");
		}

		if (!$rst) {
			echo json_encode("error");
		} else {
			$inf = array();
			foreach ($rst as $row) {
				array_push($inf, $row);
			}
			//print_r($info);
			echo json_encode($inf);
		}
		break;

	case 'producto':
		try {
			$daoshop = new DAOshop();
			$rlt = $daoshop->select_pro($_GET['details']);
		} catch (Exception $e) {
			echo json_encode("error");
		}

		if (!$rlt) {
			echo json_encode("error");
		} else {
			echo json_encode($rlt);
			exit();
		}
		break;

	case 'categoria':

		try {
			$daoshop = new Daoshop();
			$rst = $daoshop->select_cat($_GET['clas']);
		} catch (Exception $e) {
			echo json_encode("error");
		}

		if (!$rst) {
			echo json_encode("error");
		} else {
			$inf = array();
			foreach ($rst as $row) {
				array_push($inf, $row);
			}
			//print_r($info);
			echo json_encode($inf);
		}
		break;

	case 'maps':
		try {
			$daoshop = new DAOshop();
			$rlt = $daoshop->select_maps();
		} catch (Exception $e) {
			echo json_encode("error");
		}

		if (!$rlt) {
			echo json_encode("error");
		} else {
			$dinfo = array();
			foreach ($rlt as $row) {
				array_push($dinfo, $row);
			}
			echo json_encode($dinfo);
		}
		break;
	case 'filter':
		try {
			$daoshop = new DAOshop();
			$rdo = $daoshop->select_filter($_GET['filters']);
		} catch (Exception $e) {
			echo json_encode("error");
			exit;
		}
		if (!$rdo) {
			echo json_encode("error");
			exit;
		} else {
			$lawyer = array();
			foreach ($rdo as $row) {
				array_push($lawyer, $row);
			}
			echo json_encode($lawyer);
			exit;
		}
		break;
	case 'search':
		try {
			$daoshop = new DAOshop();
			$rdo = $daoshop->search($_GET['btnsearch']);
		} catch (Exception $e) {
			echo json_encode("error");
			exit;
		}
		if (!$rdo) {
			echo json_encode("error");
			exit;
		} else {
			$info = array(); ///inicializamos el array
			foreach ($rdo as $row) {
				array_push($info, $row); //lo rellenamos con array_push
			}
			echo json_encode($info); ///lo pasamos a json
			exit;
		}
		break;
	case 'countvi':
		try {
			$daoshop = new DAOshop();
			$rlt = $daoshop->count_views($_GET['idprod']);
		} catch (Exception $e) {
			echo json_encode("error");
		}

		if (!$rlt) {
			echo json_encode("error");
		} else {
			echo json_encode($rlt);
			exit();
		}
		break;

	case 'countp':
		try {
			$daoshop = new DAOshop();
			$rlt = $daoshop->select_countp();
		} catch (Exception $e) {
			echo json_encode("error");
		}

		if (!$rlt) {
			echo json_encode("error");
		} else {
			$dinfo = array();
			foreach ($rlt as $row) {
				array_push($dinfo, $row);
			}
			echo json_encode($dinfo);
		}
		break;
	case 'geomaps':
		try {
			$daoshop = new DAOshop();
			$rlt = $daoshop->geomaps();
		} catch (Exception $e) {
			echo json_encode("error");
		}

		if (!$rlt) {
			echo json_encode("error");
		} else {
			$dinfo = array();
			foreach ($rlt as $row) {
				array_push($dinfo, $row);
			}
			echo json_encode($dinfo);
		}
		break;
	case 'dspmap':
		try {
			$daoshop = new DAOshop();
			$rlt = $daoshop->geomaps_desc($_GET['latitud'], $_GET['longitud']);
		} catch (Exception $e) {
			echo json_encode("error");
		}

		if (!$rlt) {
			echo json_encode("error");
		} else {
			$dinfo = array();
			foreach ($rlt as $row) {
				array_push($dinfo, $row);
			}
			echo json_encode($dinfo);
		}
		break;

	case 'like':
		foreach ($_POST as $idprod => $valor) {
		}
		try {
			$daoshop = new Daoshop();
			$rdo = $daoshop->like($_SESSION['nickname'], $idprod);
		} catch (Exception $e) {
			echo json_encode("error");
			exit;
		}
		if (!$rdo) {
			echo ("its favorite");
		} else {
			echo ("todo correcto");
		}

		break;
	case 'unlike':
		foreach ($_POST as $idprod => $valor) {
		}
		try {
			$daoshop = new Daoshop();
			$rdo = $daoshop->unlike($_SESSION['nickname'], $idprod);
		} catch (Exception $e) {
			echo json_encode("error");
		}
		if (!$rdo) {
			echo ("error");
		} else {
			echo ("unlike");
		}

		break;

	case 'paint':
		try {
			$daoshop = new Daoshop();
			$rst = $daoshop->paint_likes($_SESSION['nickname']);
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


	case 'check_logged':
		if (!isset($_SESSION['nickname'])) {
			echo ("notlogged");
		} else {
			echo json_encode("logged");
		}
		
		break;
	case 'check_fav':
		if (!isset($_SESSION['nickname'])) {
			echo ("notlogged");
		} else {
			echo ($_SESSION['nickname']);
		}
		//echo "dentro de do like $";
		break;

		case 'prod_array' : 
		
			$_SESSION['product'] = $_POST['prod'];
			echo ($_SESSION['product']);

		break;

		case 'add_prod_cart' : 
		
			try {
				$daoshop = new Daoshop();
				$rdo = $daoshop->insert_cart($_POST['id_prod'],$_POST['id'],);
			} catch (Exception $e) {
				echo json_encode("error");
				exit;
			}
			if (!$rdo) {
				echo ("no insertado");
			} else {
				echo ("todo correcto");
			}
		

		break;


	default:
		include("view/inc/error404.php");
		break;
}
