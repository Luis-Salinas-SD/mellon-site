<?php
$name = $_POST['name'];
$mail = $_POST['email'];
$project = $_POST['project'];
$message = $_POST['mensaje'];

//Datos para el correo

$destinatario = "hola@cerolineal.com";
$asunto = "Proyecto desde cerolineal.com";

$carta = "De: $name \n";
$carta = "Correo: $mail \n";

//Envio del correo
mail($destinatario, $asunto, $carta);
header('Location:https://cerolineal.com');
