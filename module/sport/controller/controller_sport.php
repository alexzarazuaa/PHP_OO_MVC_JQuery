<?php
    $path = $_SERVER['DOCUMENT_ROOT'] . "/SPORT_V1.3/";
    include($path . "module/sport/model/DAO_Sport.php");

//include("module/sport/model/DAO_Sport.php");


//session_start();

switch ($_GET['op']) {

    case 'list';
        // print_r("entra list");
        //    die();
        try {
            // print_r("entra try");
            //  die();
            $daosport = new DAO_Sport();
            $rdo = $daosport->select_all_sport();
            //  print_r( $rdo);
            //   die();
        } catch (Exception $e) {
            $callback = 'index.php?page=503';
            die('<script>window.location.href="' . $callback . '";</script>');
        }

        if (!$rdo) {
            $callback = 'index.php?page=503';
            die('<script>window.location.href="' . $callback . '";</script>');
        } else {
            include("module/sport/view/list_sport.php");
        }
        break;

    case 'create';
        // print_r('hola');
        //exit;
        include("module/sport/model/validate.php");
        $check = true;

        if ($_POST) {
            //$check = validate($codref);
            $daosport = new DAO_Sport();

            $check_cod = $daosport->check_prod($_POST['codref']);
            // print_r($check_cod);
            //die();

            if (!$check_cod) {
                // print_r("entra");
                // die();
                $_SESSION['codref'] = $_POST;
                //  print_r($_SESSION);
                try {
                    $daosport = new DAO_Sport();
                    // print_r($daosport);
                    //die();
                    $rdo = $daosport->new_prod($_POST);
                    //print_r($rdo);
                    //   die();
                } catch (Exception $e) {
                    // print_r("entra en el catch");
                    // die();
                    $callback = 'index.php?page=503';
                    die('<script>window.location.href="' . $callback . '";</script>');
                }

                if ($rdo) {
                    echo '<script language="javascript">alert("Registrado en la base de datos correctamente")</script>';
                    $callback = 'index.php?page=controller_sport&op=list';
                    die('<script>window.location.href="' . $callback . '";</script>');
                } else {
                    //print_r("entra en el else rdo");
                    //die();
                    $callback = 'index.php?page=503';
                    die('<script>window.location.href="' . $callback . '";</script>');
                }
            } else {
                $error_c = "Este codigo ya existe en la Base de Datos.";
            }
        }
        include("module/sport/view/create_sport.php");
        break;

    case 'update';
        // print_r("eeeentra");
        //die();

        include("module/sport/model/validate.php");
        $check = true;

        if ($_POST) {
            // print_r("eeeentra");
            //die();
            if ($check) {
                //$_SESSION['codref']=$_POST;
                try {
                    //print_r($_POST);
                    //die();
                    $daosport = new DAO_Sport();
                    $rdo = $daosport->update_sport($_POST);
                    // print_r($rdo);
                    // die();
                } catch (Exception $e) {

                    $callback = 'index.php?page=503';
                    die('<script>window.location.href="' . $callback . '";</script>');
                }

                if ($rdo) {
                    echo '<script language="javascript">alert("Actualizado en la base de datos correctamente")</script>';
                    $callback = 'index.php?page=controller_sport&op=list';
                    die('<script>window.location.href="' . $callback . '";</script>');
                } else {
                    $callback = 'index.php?page=503';
                    die('<script>window.location.href="' . $callback . '";</script>');
                }
            }
        }

        try {
            $daosport = new DAO_Sport();
            $rdo = $daosport->select_sport($_GET['codref']);
            // print_r($rdo);
            //die();
            $sport = get_object_vars($rdo);
        } catch (Exception $e) {
            $callback = 'index.php?page=503';
            die('<script>window.location.href="' . $callback . '";</script>');
        }

        if (!$rdo) {
            $callback = 'index.php?page=503';
            die('<script>window.location.href="' . $callback . '";</script>');
        } else {
            include("module/sport/view/update_sport.php");
        }
        break;



    case 'read';
        try {
            $daosport = new DAO_Sport();
            $rdo = $daosport->select_sport($_GET['codref']);
            $sport = get_object_vars($rdo);
        } catch (Exception $e) {
            $callback = 'index.php?page=503';
            die('<script>window.location.href="' . $callback . '";</script>');
        }
        if (!$rdo) {
            $callback = 'index.php?page=503';
            die('<script>window.location.href="' . $callback . '";</script>');
        } else {
            include("module/sport/view/read_sport.php");
        }
        break;

    case 'delete';
        if (isset($_POST['delete'])) {
            try {
                $daosport = new DAO_Sport();
                $rdo = $daosport->delete_sport($_GET['codref']);
            } catch (Exception $e) {
                $callback = 'index.php?page=503';
                die('<script>window.location.href="' . $callback . '";</script>');
            }

            if ($rdo) {
                echo '<script language="javascript">alert("Borrado en la base de datos correctamente")</script>';
                $callback = 'index.php?page=controller_sport&op=list';
                die('<script>window.location.href="' . $callback . '";</script>');
            } else {
                $callback = 'index.php?page=503';
                die('<script>window.location.href="' . $callback . '";</script>');
            }
        }
        try {
            $daosport = new DAO_Sport();
            $rdo = $daosport->select_sport($_GET['codref']);
            $sport = get_object_vars($rdo);
        } catch (Exception $e) {
            $callback = 'index.php?page=503';
            die('<script>window.location.href="' . $callback . '";</script>');
        }
        if (!$rdo) {
            $callback = 'index.php?page=503';
            die('<script>window.location.href="' . $callback . '";</script>');
        } else {
            include("module/sport/view/delete_sport.php");
        }


        break;
    case 'delete_all';
        if ($_POST) {
            try {
                $daosport = new DAO_Sport();
                $rdo = $daosport->delete_all_sport();
            } catch (Exception $e) {
                $callback = 'index.php?page=503';
                die('<script>window.location.href="' . $callback . '";</script>');
            }

            if ($rdo) {
                echo '<script language="javascript">alert("Borrado en la base de datos correctamente")</script>';
                $callback = 'index.php?page=controller_sport&op=list';
                die('<script>window.location.href="' . $callback . '";</script>');
            } else {
                $callback = 'index.php?page=503';
                die('<script>window.location.href="' . $callback . '";</script>');
            }
        }
        include("module/sport/view/delete_all_sport.php");
        break;


    case 'read_modal';
        //echo $_GET["sport_modal"]; 

        // print_r("entra"); 
        //die();

        try {
            $daosport = new DAO_Sport();
            $rdo = $daosport->select_sport($_GET['sport_modal']);
        } catch (Exception $e) {
            echo json_encode("error");
            exit;
        }
        if (!$rdo) {
            echo json_encode("error");
            exit;
        } else {
            $sport = get_object_vars($rdo);
            echo json_encode($sport);
            //echo json_encode("error");
            exit;
        }
    default;
        include("view/inc/error404.php");
        break;
}
