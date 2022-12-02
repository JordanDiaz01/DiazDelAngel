<!DOCTYPE html>
<html lang="en">

<?php
session_start();
if(!isset($_SESSION['user'])|| empty($_SESSION['user'])){
    header("Location: ./login.html");
}
?>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Página principal de la aplicacion</h1>
    <h2>Bienvenido  user: <?php echo $_SESSION['user'];?></h2>
</body>
</html>