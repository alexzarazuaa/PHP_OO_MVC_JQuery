<?php

$path = $_SERVER['DOCUMENT_ROOT'] . "/SPORT_V1.3/";
include($path . "view/js/search/model/DAO_Search.php");

switch($_GET['op']){

    case 'talla':
        try{
            $daosearch = new DAOSearch();
            $rdo = $daosearch->readtalla($_GET['marca']);
        }catch (Exception $e){
            echo json_encode("error");
            exit;
        }
        if(!$rdo){
            echo json_encode("error");
            exit;
        }else{
            $info = array();///inicializamos el array
            foreach ($rdo as $row) {
                array_push($info, $row);//lo rellenamos con array_push
            }
            echo json_encode($info);///lo pasamos a json
            exit;
        }
        break;

        case 'marca':
            try{
                $daosearch = new DAOSearch();
                $rdo = $daosearch->readMarca($_GET['talla']);
    
            }catch (Exception $e){
                echo json_encode("error");
                exit;
            }
            if(!$rdo){
                echo json_encode("error");
                exit;
            }else{
                $info = array();///inicializamos el array
                foreach ($rdo as $row) {
                    array_push($info, $row);//lo rellenamos con array_push
                }
                echo json_encode($info);///lo pasamos a json
                exit;
            }
            break;
        
        case 'autocomplete':
                try{
                    $daosearch = new DAOSearch();
                    $rdo = $daosearch->autocomp($_GET['complete']);
                }catch (Exception $e){
                    echo json_encode("error");
                    exit;
                }
                if(!$rdo){
                    echo json_encode("error");
                    exit;
                }else{
                    $info = array();///inicializamos el array
                    foreach ($rdo as $row) {
                        array_push($info, $row);//lo rellenamos con array_push
                    }
                    echo json_encode($info);///lo pasamos a json
                    exit;
                }
                break;
              
            
        default:
            include("view/inc/error/error404.php");
            break;

    }
