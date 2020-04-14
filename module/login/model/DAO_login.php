<?php

$path = $_SERVER['DOCUMENT_ROOT'] . "/SPORT_V1.3/";
include($path . "model/connect.php");

class DAOlogin
{

    function insert_user($user_email, $nickname, $password,$avatar){

        //$sql = "INSERT INTO 'user' ('user_email', 'nickname', 'password','avatar') VALUES ('$user_email', '$nickname', '$password','$avatar')";
        $sql = "INSERT INTO `user` (`user_email`, `nickname`, `password`,`avatar`) VALUES ('$user_email', '$nickname', '$password','$avatar')";
        //echo $sql;
        $conexion = Conectar::con();
        $res = mysqli_query($conexion, $sql);
        Conectar::close($conexion);

        return $res;
   
  
    }

 

    function exist_user($user_email,$nickname){
        $sql = "SELECT * FROM user WHERE user_email='$user_email' AND nickname='$nickname'";

        // echo $sql;
        $conexion = Conectar::con();
        $res = mysqli_query($conexion, $sql);
        Conectar::close($conexion);
        
        return $res;
    }



    function loggeduser($user_email){

        $sql = "SELECT * FROM user WHERE user_email LIKE '$user_email'"; 

        // echo $sql;
        $conexion = Conectar::con();
        $res = mysqli_query($conexion, $sql)->fetch_object();
        Conectar::close($conexion);
        
        return $res;
    }

    

    function search_session($nickname){
        $sql= "SELECT user_email,nickname,avatar from user where nickname like '$nickname'";

        $conexion = Conectar::con();
        $rst = mysqli_query($conexion, $sql)->fetch_object();
        Conectar::close($conexion);
        return $rst;
    }

    function show_nick($email)
    {
        $sql = "select nickname from user where user_email = '$email'";
        //echo $sql;
        $conexion = Conectar::con();
        $res = mysqli_query($conexion, $sql)->fetch_object();
        Conectar::close($conexion);

        return $res;
    }

    function update_nick($nick,$ip)
    {
        $sql = "UPDATE cart set id = '$nick' where id = '$ip'";
        //echo $sql;
        $conexion = Conectar::con();
        $res = mysqli_query($conexion, $sql);
        Conectar::close($conexion);

        return $res;
    }
   




}
		
