<?php
    $server= "localhost";
    $db= "proyectoweb";
    $user= "root";
    $pass= "1234";
    $con = mysqli_connect($server,$user,$pass,$db) or die("no se pudo conectar a la base de datos");
    $query= "select * from empleados";
    $registros= mysqli_query($con,$query) or die("problemas en la consulta");

    $result= mysqli_fetch_all($registros);
    mysqli_close($con);
    echo json_encode($result)
?>