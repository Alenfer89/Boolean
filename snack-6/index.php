<?php 
    // Utilizzare questo array: https://pastebin.com/CkX3680A. Stampiamo il nostro array mettendo gli insegnanti in un rettangolo grigio e i PM in un rettangolo verde.
?>
<?php

$db = [
    'teachers' => [
        [
            'name' => 'Michele',
            'lastname' => 'Papagni'
        ],
        [
            'name' => 'Fabio',
            'lastname' => 'Forghieri'
        ]
    ],
    'pm' => [
        [
            'name' => 'Roberto',
            'lastname' => 'Marazzini'
        ],
        [
            'name' => 'Federico',
            'lastname' => 'Pellegrini'
        ]
    ]
];
$bgGreen = "style='background-color:green'";
$bgGray = "style='background-color:gray'";
$db_keys = array_keys($db);
$db_values = array_values($db);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>school</title>
</head>
<body>
    <h1>Result</h1>
    <?php for($i = 0; $i < count($db); $i++){ ; ?>
    <div <?php if($db_keys[$i] == 'teachers'){
        echo $bgGreen;}
        else{
            echo $bgGray;
        } ?>>
        <h3>Our <?php echo $db_keys[$i] ; ?></h3>
        <?php for($index=0; $index < count($db_values[$i]); $index++){ ; ?>
            <p>
                <?php echo $db_values[$i][$index]['name'].' '.$db_values[$i][$index]['lastname']; ?>
            </p>
        <?php } ; ?>

    </div>
    <?php } ; ?>
</body>
</html>
