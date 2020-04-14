<?php

$path = $_SERVER['DOCUMENT_ROOT'] . "/SPORT_V1.3/";
include($path . "model/connect.php");
  //  include("model/connect.php");

    
	class DAO_Sport{
		function new_prod($datos){
				// print_r($datos);
				// die();
				$codref=$datos['codref'];
				$name=$datos['name'];
				$email=$datos['email'];
				$cityShop=$datos['cityShop'];
				$userType=$datos['user'];
				// print_r($datos);
				// die();
				$habitual=$datos['habitual'];
				//$Sport=$datos['sport'];
			//	foreach ($datos['sport[]'] as $indice) {
				//	$Sport=$indice."::$indice";
				//}
				$Sport = implode(",",$datos['sport']);
				
				$date_birthday=$datos['date_birthday'];
		
				
				$sql = " INSERT INTO sport_pro ( codref,name, email,cityShop,userType, habitual,Sport, date_birthday)
				 VALUES ( '$codref','$name', '$email', '$cityShop', '$userType' ,'$habitual', '$Sport','$date_birthday')";
				

            
            $conexion = Conectar::con();
            $res = mysqli_query($conexion, $sql);
            Conectar::close($conexion);
			return $res;
		}
		
		function select_all_sport(){
			$sql = "SELECT * FROM sport_pro ORDER BY codref ASC";
			
			
			$conexion = Conectar::con();
            $res = mysqli_query($conexion, $sql);
            Conectar::close($conexion);
            return $res;
		}
		
		function select_sport($codref){
			$sql = "SELECT * FROM sport_pro WHERE codref='$codref'";
			
			$conexion = Conectar::con();
            $res = mysqli_query($conexion, $sql)->fetch_object();
            Conectar::close($conexion);
            return $res;
		}
		
		function update_sport($datos){
			$codref=$datos['codref'];
			$name=strtoupper($datos['name']);
			$email=$datos['email'];
			$cityShop=$datos['cityShop'];
			$userType=$datos['user'];
			// print_r($datos);
			// die();
			$habitual=$datos['habitual'];
			$Sport = implode(",",$datos['sport']);
			$date_birthday=$datos['date_birthday'];
	
			
			$sql = " UPDATE sport_pro SET name = '$name', email = '$email',cityShop = '$cityShop',
			userType = '$userType', habitual = '$habitual',
			Sport = '$Sport', date_birthday = '$date_birthday' where codref = '$codref'";
		
            $conexion = Conectar::con();
            $res = mysqli_query($conexion, $sql);
            Conectar::close($conexion);
			return $res;
		}
		
		function delete_sport($codref){
			$sql = "DELETE FROM sport_pro WHERE codref='$codref'";
			
			$conexion = Conectar::con();
            $res = mysqli_query($conexion, $sql);
            Conectar::close($conexion);
            return $res;
		}

		function delete_all_sport(){
			// print_r('codref');
			// die();
	
			$sql = "DELETE FROM sport_pro";
	
			$conexion = Conectar::con();
			$res = mysqli_query($conexion, $sql);
			Conectar::close($conexion);
			return $res;
	
		}


		function check_prod($codref){
			 //print_r("hola");
			 // die();
			$sql = "SELECT codref FROM sport_pro WHERE codref='$codref'";
			//print_r($sql);
			//die();
			$conexion = Conectar::con();
			// print_r($conexion);
			// die();
            $res = mysqli_query($conexion, $sql)->fetch_object();
            Conectar::close($conexion);
            return $res;
		}

	}
	


	