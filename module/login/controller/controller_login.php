<?php
$path = $_SERVER['DOCUMENT_ROOT'] . "/SPORT_V1.3/";
include($path . "module/login/model/DAO_login.php");

@session_start();


switch ($_GET['op']) {
    case 'view_register':

        include("module/login/view/register.html");
        break;


    case 'register':

        try {

            $opciones = [
                'cost' => 12,
            ];
            $password =  password_hash($_POST['password'], PASSWORD_BCRYPT, $opciones);
            $has_avatar = $_POST['email'];
            $avatar = "https://api.adorable.io/avatars/80/$has_avatar";
            $daoreg = new DAOLogin();
            $rst = $daoreg->insert_user($_POST['email'], $_POST['nickname'], $password, $avatar);
        } catch (Exception $e) {
            echo json_encode("error");
        }
        if (!$rst) {
            echo json_encode("No se ha insertado correctamente");
        } else {
            echo json_encode("ok");
        }
        break;


    case 'user_exist':

        try {
            $daoreg = new DAOLogin();
            $rst = $daoreg->exist_user($_POST['email'], $_POST['nickname']);
            // echo $rst;
        } catch (Exception $e) {
            echo json_encode("error");
        }
        if ($rst->num_rows === 0) {

            echo json_encode('noexiste');
        } else {
            echo json_encode('existe');
        }
        break;



    case 'logout':
        session_unset($_SESSION['tipo']);

        if (session_destroy()) {
            $url = 'index.php?page=controller_home&op=list';
            die('<script>window.location.href="' . $url . '";</script>');
        }

        break;

    case 'logged_user':
        // print_r($_SESSION);
        if (isset($_SESSION['logged_user'])) {
            echo $_SESSION['logged_user'];
        } else {
            echo "no logged";
        }


    case 'login':

        try {

            $daoreg = new DAOLogin();
            $rdo = $daoreg->loggeduser($_POST['email']);
        } catch (Exception $e) {
            echo json_encode("error");
        }
        if (!$rdo) {
            echo json_encode('noexiste');
        } else {
            $value = get_object_vars($rdo);
            //print_r($value);
            //die();

            if (password_verify($_POST['password'], $value['password'])) {
                $_SESSION['nickname'] = $value['nickname'];
                $_SESSION['tipo'] = $value['type'];
                $_SESSION['avatar'] = $value['avatar'];
                $_SESSION['tiempo'] = time();

                // print_r($_SESSION);
                echo json_encode('existe');
            }
        }
        break;

    case 'activiti':
        if (!isset($_SESSION["tiempo"])) {
            echo "active";
        } else {
            if ((time() - $_SESSION["tiempo"]) >= 50000) {
                echo "inactive";
                //exit();
            } else {
                echo "active";
                //exit();
            }
        }
        break;
    case 'session':
        try {

            $daologin = new DAOLogin();
            $rdo = $daologin->search_session($_SESSION['nickname']);
        } catch (Exception $e) {
            echo json_encode("error");
        }
        if (!$rdo) {
            echo json_encode('noexiste');
        } else {
            $value = get_object_vars($rdo);

            echo json_encode($value);
        }
        break;


        case 'log_user' : 

            //$_SESSION['log'] = $_POST['log'];
            //echo ($_SESSION['log']);
            $log = $_SESSION['log'];
            unset ( $_SESSION['log']);
            echo ($log);

        break;

        case 'change_us':
           
            try {

                $daologin = new DAOLogin();
                $rdo = $daologin->show_nick($_POST['email']);
                foreach ($rdo as $nick => $valor) {
                }   
                $rlt = $daologin->update_nick($valor,$_POST['ip']);
            } catch (Exception $e) {
                echo json_encode("error");
            }
            if (!$rdo || $rlt) {
                echo json_encode('noexiste');
            } else {
                echo json_encode('correct');
            }

            break;
}
