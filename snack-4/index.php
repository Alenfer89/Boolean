<?php 
    // Creare un array con 15 numeri casuali, tenendo conto che l'array non dovrà contenere lo stesso numero più di una volta
    $arrayOfNumbers = [];

    while (count($arrayOfNumbers) < 15){
        $randomInt = rand(1 , 100);
        if(!in_array($randomInt, $arrayOfNumbers)){
            $arrayOfNumbers[] = $randomInt;
        }
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>numbers</title>
</head>
<body>
    <h1>Result</h1>
    <pre>
        <?php 
        var_dump($arrayOfNumbers);
        ?>
    </pre>
</body>
</html>
