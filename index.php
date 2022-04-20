<?php 
    /**
     * Creiamo un array contenente le partite di basket di un'ipotetica tappa del calendario.
     * Ogni array avrà una squadra di casa e una squadra ospite, punti fatti dalla squadra di casa e punti fatti dalla squadra ospite.
     * Stampiamo a schermo tutte le partite con questo schema.
        Olimpia Milano - Cantù | 55-60
     *
     */

    $matches =[
        [
            'squadre'=> 'Olimpia Milano - Cantù',
            'risultato' => rand(1 , 100).'-' . rand(1 , 100)
        ],
        [
            'squadre'=> 'Roma - Virtus Bologna',
            'risultato' => rand(1 , 100).'-' . rand(1 , 100)
        ],
        [
            'squadre'=> 'Varese Merda - Pisa Merda',
            'risultato' => rand(1 , 100).'-' . rand(1 , 100)
        ],
        [
            'squadre'=> 'Palermo - Catania',
            'risultato' => rand(1 , 100).'-' . rand(1 , 100)
        ],
        [
            'squadre'=> 'Cagliari - Casteddu',
            'risultato' => rand(1 , 100).'-' . rand(1 , 100)
        ]
    ]
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Partite</h1>
    <ul>
        <?php 
        for ($i = 0; $i < count($matches); $i++) {
            echo '<li>'. $matches[$i]['squadre'] . ' | ' . $matches[$i]['risultato'] . '</li>';
        }
        ; ?>
    </ul>
</body>
</html>
