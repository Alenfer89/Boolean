<?php 
    /**
     * Secondo snack
     *
     *  Passare come parametri GET name, mail e age e verificare (cercando i metodi che non conosciamo nella documentazione) che:
     * - name sia più lungo di 3 caratteri,
     * - che mail contenga un punto e una chiocciola e 
     * - che age sia un numero.
     * 
     *  Se tutto è ok stampare "Accesso riuscito", altrimenti "Accesso negato"
     */

    $name = $_GET['name'];
    $mail = $_GET['mail'];
    $age = $_GET['age'];

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Access</title>
</head>
<body>
    <h1>Result</h1>
    <p>
        <?php 
        if(strlen($name)>3 && strpos('.' , $mail) && strpos('@' , $mail) && is_numeric($age) ){
            echo 'Accesso Riuscito';
        } else {
            echo 'Accesso Negato';
        }
        ; ?>
    </p>
</body>
</html>
