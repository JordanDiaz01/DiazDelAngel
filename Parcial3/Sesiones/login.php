<?php

session_start();

$user = $_POST['user'];
$pass = $_POST['pass'];

if(isset($_SESSION['user'])){
    printf("REANUDANDO SESION <br>");
    printf("Bienvenido de nuevo",$_SESSION['user']);

}else{
    $_SESSION['user'] = $user;
    printf("Nueva sesion <br>");
    printf("Bienvenido %s",$user);
}
?>

