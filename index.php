<?php

$servidor = "localhost";
$usuario = "root";
$clave = "";
$bd = "coffa";

$enlace = mysqli_connect($servidor, $usuario, $clave, $bd);


$name = htmlspecialchars($_POST['names']);
$apaterno = $_POST['ap_paterno'];
$amaterno = $_POST['ap_materno'];
$email = $_POST['email'];

$username = $_POST["username"];
$contraseña = $_POST["contraseña"];

if (empty($_POST["phone"])) {
    $phone = 0;
} else {
    $phone = $_POST["phone"];
}

//Prueba para verificar un correo existente
if ($resultado->num_rows > 0) {
    echo "El correo " . $email . " ya está registrado.";
} else {

    $insertar_datos = "INSERT INTO usuario VALUES('', '$name', '$apaterno', '$amaterno', '$email', '$phone', '$username', '$contraseña')";
    $ejecutar_insertar = mysqli_query($enlace, $insertar_datos);


    // Redirigir a página principal
    header("Location: index.html");
}

$stmt->close();
$enlace->close();


exit;
