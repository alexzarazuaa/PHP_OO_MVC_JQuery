<?php
$path = $_SERVER['DOCUMENT_ROOT'] . "/SPORT_V1.3/";
include($path . "module/home/model/DAO_home.php");

@session_start();

switch ($_GET['op']) {
	case 'list';
		//print_r("entra l");
		include("module/home/view/inicio.html");
		break;

	case 'carousel';

		try {
			$daohome = new Daohome();
			$rlt = $daohome->select_img();
		} catch (Exception $e) {
			echo json_encode("error");
		}

		if (!$rlt) {
			echo json_encode("error");
		} else {
			$info = array();
			foreach ($rlt as $row) {
				array_push($info, $row);
			}
			//print_r($info);
			echo json_encode($info);
		}
		break;

	case 'categories';

		try {
			$daohome = new Daohome();
			$rst = $daohome->select_categori($_GET['limit']);
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

	case 'count';

		try {
			$daohome = new Daohome();
			$rst = $daohome->countval($_GET['categoria']);
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

	case 'check_cart':

		$info = $_POST['addcart'];
		try {
			$daohome = new Daohome();
			$rst = $daohome->insert_facturas($info[0][3], $info[0][4]);
			$rlt = $daohome->found_cod();
			foreach ($rlt as $id => $valor) {
			}
			foreach ($info as $row) {
				$infc = $daohome->insert_codfa($info[0][3], $row[0], $row[1], $row[2], $valor);
				//$infc = $daohome->insert_codfa($info[0][3],$row[0],$row[1],$row[2] ,$valor);
				//echo json_encode($valor);
				$upt = $daohome->update_stock($row[0], $row[1]);
				$dtl = $daohome->delete_cart($row[3]);
			}

			//echo json_encode($valor);

		} catch (Exception $e) {
			echo json_encode("error");
		}

		if (!$rst || !$infc || !$upt || !$dtl) {
			echo json_encode("NOT INSERT");
		} else {
			echo json_encode("todo correcto");
		}


		break;

	case 'mypoints':

		//echo json_encode($_POST);
		try {
			$daohome = new DAOhome();
			$rlt = $daohome->mypoints_update($_POST['mypoints'], $_POST['nickname']);
			$mypoints = $daohome->mypoints_select($_POST['nickname']);
			//echo($mypoints);
			foreach ($mypoints as $ray => $valor) {
			}

			$check = intval($valor / 6000);
			$carac = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ01654977556482648';
			$string = "";
			for ($i = 0; $i < $check; $i++) {
				$random = substr(str_shuffle($carac), 0, 5);
				$rdo = $daohome->mycupons_insert($_POST['nickname'], $random);
				$string .=  $random . "\n";
			}
			$mypoints_neg = $check * 6000;
			$mypoints_ret = $daohome->mypoints_rest($mypoints_neg, $_POST['nickname']);
			if (($_POST['chequereg']) != '') {
				$rst = $daohome->cheque_reg_update($_POST['nickname'], $_POST['chequereg']);
			}
		} catch (Exception $e) {
			echo json_encode("error");
		}
		if (!$rlt || !$mypoints || !$mypoints_ret) {
			echo ("error in points");
		} else if (!$rdo) {
			//echo ($valor);
			echo ('Le quedan ' . (6000 - $valor) . ' puntos para el proximo cheque');
		} else {
			//echo ("entra else " +  $check);
			if ($check > 1) {
				echo ('Se le han generado ' . $check . " cheque: \n" . $string);
			} else {
				echo ('Se le ha generado ' . $check . " cheque: \n" . $string);
			}
		}

		break;




	default:
		include("view/inc/error404.php");
		break;
}
