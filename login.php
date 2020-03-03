<?php
session_start();

$objet = new stdClass();
$objet-> message = "Veuillez réessayer ,mauvais nom d'utilisateur ou mot de passe";
$objet-> success = false;

$found=true;
if($found) {
    $objet->success = true;
}
//a verifier
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');

echo json_encode($obj);
