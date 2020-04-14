<?php
	class Conectar{
		public static function con(){
			$host = 'localhost';  
    		$user = "root";                  
    		$pass = "";                        
    		$db = "sport";                     
            $port = 3306;  
                                     
    		
    		$conexion = mysqli_connect($host, $user, $pass, $db, $port)or die();
            return $conexion;
            
		//	print_r($conexion);
		//  die();
		}
		public static function close($conexion){
			mysqli_close($conexion);
		}
	}