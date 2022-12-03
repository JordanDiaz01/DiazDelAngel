<?php
    $nombre=$_POST['nombre-Eliminar'];
    $apellidoP=$_POST['apellidoP-Eliminar'];
    $apellidoM=$_POST['apellidoM-Eliminar'];

    $server= "localhost";
    $db= "proyectoweb";
    $user= "root";
    $pass= "1234";
    $con = mysqli_connect($server,$user,$pass,$db) or die("no se pudo conectar a la base de datos");
    $query= "delete from empleados where nombre = '$nombre' and (ap_paterno='$apellidoP' and ap_materno='$apellidoM')";
    $registros= mysqli_query($con,$query) or die("problemas en la consulta");
    $result= mysqli_fetch_array($registros,MYSQLI_ASSOC);
    mysqli_close($con);
    echo json_encode($result)
?>