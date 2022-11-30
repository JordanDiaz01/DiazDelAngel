<!DOCTYPE html>
<?php
$cookie_name = "Jordan";
$cookie_value = "Diaz Del Angel";
setcookie($cookie_name, $cookie_value, time() + (86400 * 30), "/"); // 86400 = 1 day
?>
<html>
<body>

<?php
if(!isset($_COOKIE[$cookie_name])) {
     echo "Cookie named '" . $cookie_name . "' no está seteado!";
} else {
     echo "Cookie '" . $cookie_name . "' se insertó correctamente!<br>";
     echo "Valor de la cookie: " . $_COOKIE[$cookie_name];
}
?>

</body>
</html>