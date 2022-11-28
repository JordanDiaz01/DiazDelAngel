<?php
    $server= "localhost";
    $db= "proyectoweb";
    $user= "root";
    $pass= "1234";
    $con = mysqli_connect($server,$user,$pass,$db) or die("no se pudo conectar a la base de datos");
    $query= "select Nombre,Apellido_Paterno,Apellido_Materno from empleados";
    $registros= mysqli_query($con,$query) or die("problemas en la consulta");


    //array asociativo
    $result= mysqli_fetch_all($registros,MYSQLI_ASSOC);
    mysqli_close($con);
    echo json_encode($result)
?>