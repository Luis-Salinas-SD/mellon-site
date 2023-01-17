<?php
$name = $_POST['nombre'];
$mail = $_POST['email'];
$project = $_POST['project'];
$message = $_POST['mensaje'];

//Datos para el correo

$destinatario = "contacto@cerolineal.com";
$asunto = "Contacto cerolinal.com.mx";

$carta = "De: $name \n";
$carta .= "Correo: $mail \n";
$carta .= "\n";
$carta .= "Proyecto: $project \n";
$carta .= "Mensaje:\n $message";

//Envio del correo
mail($destinatario, $asunto, $carta);
header('Location:https://cerolineal.com.mx');
