<?php 
    // Partendo da questa stringa $string = "c,i,n,q,u,e"; 
    // trasforma la stringa in un array con un elemento per carattere,
    
    //     $array = ['c','i','n','q','u','e'];
    
    // infine crea un array associativo della forma:
        
    //     $result = [
    //         'c' => 'c',
    //         'i' => 'i',
    //         'n' => 'n',
    //         'q' => 'q',
    //         'u' => 'u',
    //         'e' => 'e'
    //     ];
    $string = "c,i,n,q,u,e";
    $array = explode(',' , $string);
    //$result = array_fill_keys($array, $array);
    $result = [];
    foreach($array as $character){
        $result[$character] = $character;
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>five</title>
</head>
<body>
    <h1>five</h1>
    <div>
        <?php var_dump($array) ; ?>
    </div>
    <div>
        <?php var_dump($result) ; ?>
    </div>
    
    
</body>
</html>
