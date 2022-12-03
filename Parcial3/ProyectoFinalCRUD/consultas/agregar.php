<?php
    $nombre=$_POST['Nombre-Emp'];
    $apellidoP=$_POST['AP-Emp'];
    $apellidoM=$_POST['AM-Emp'];
    $edad=$_POST['Edad-Emp'];
    $domicilio=$_POST['Dir-Emp'];
    $ciudad=$_POST['Ciudad-Emp'];
    $estado=$_POST['Estado-Emp'];
    $codigoP=$_POST['CodP-Emp'];
    $email=$_POST['Email-Emp'];
    $curp=$_POST['Curp-Emp'];
    $rfc=$_POST['Rfc-Emp'];
    $server= "localhost";
    $db= "proyectoweb";
    $user= "root";
    $pass= "1234";
    $con = mysqli_connect($server,$user,$pass,$db) or die("no se pudo conectar a la base de datos");
    $query= "insert into empleados VALUES ('$nombre','$apellidoP','$apellidoM','$edad','$domicilio','$ciudad','$estado','$codigoP','$email','$curp','$rfc') ";
    $registros= mysqli_query($con,$query) or die("problemas en la consulta");
    $result= mysqli_fetch_array($registros,MYSQLI_ASSOC);
    mysqli_close($con);
    echo json_encode($result)

?>