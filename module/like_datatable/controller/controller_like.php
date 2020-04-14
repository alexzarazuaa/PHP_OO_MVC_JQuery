<?php
    $path = $_SERVER['DOCUMENT_ROOT'] . "/SPORT_V1.3/";
    include($path . "module/like_datatable/model/DAO_like.php");

    
    switch ($_GET['op']) {
		case 'list';
		//print_r("entra l");
				include("module/like_datatable/view/datatable.html");
			break;
			
		case 'datatable';
		//print_r("entra");
            try{
				$daolike = new DaoLikes();
				$rlt = $daolike->select_likes();
			} catch(Exception $e){
				echo json_encode("error");
			}

			if(!$rlt){
				echo json_encode("error");
			}
			else{
				$info = array();
				foreach ($rlt as $row) {
					array_push($info, $row);
				}
				//print_r($info);
                echo json_encode($info);
                
			}
			break;
			
		default:
			include("view/inc/error404.php");
			break;
	}
   