<?php
$path = $_SERVER['DOCUMENT_ROOT'] . "/SPORT_V1.3/";
include($path . "module/contact/model/DAO_map.php");

//@session_start();

switch ($_GET['op']) {
    case 'list';
        include("module/contact/view/contactus.html");
        break;
    case 'maps':
        try {
            $daomaps = new DAOmaps();
            $rlt = $daomaps->select_maps();
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
}
