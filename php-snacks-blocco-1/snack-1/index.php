<?php 
    // Creare un array contenente qualche alunno di un'ipotetica classe. 
    // Ogni alunno avrà Nome, Cognome e un array contenente i suoi voti scolastici. 
    // Stampare Nome, Cognome e la media dei voti di ogni alunno.

    $students = [
        [
            'name' => 'Laura',
            'lastname' => 'Bianchi',
            'votes' => [9, 9, 9, 9, 10]
        ],
        [
            'name' => 'Michele',
            'lastname' => 'Papagni',
            'votes' => [8, 5, 7, 6]
        ],
        [
            'name' => 'Fabio',
            'lastname' => 'Forghieri',
            'votes' => [10, 2, 4]
        ],
        [
            'name' => 'Roberto',
            'lastname' => 'Marazzini',
            'votes' => [2, 8, 3, 4, 5]
        ],
        [
            'name' => 'Roberta',
            'lastname' => 'Danderini',
            'votes' => [2, 8, 9, 5, 4]
        ]
    ];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Studenti</title>
</head>
<body>
    <h1>Studenti</h1>
    
        <?php foreach($students as $student){ ?>
        <div>Studente :
            <?php echo $student['name']. ' '. $student['lastname']  ; ?>
            <em>. Media Corretta:
                <!-- //. metodo semplice -->
            <?php  echo array_sum($student['votes']) / count($student['votes']); ?>
            </em>
            . Media Mia:
            <!-- //. metodo homemade -->
            <?php $voteSum = 0;
                    for($i = 0; $i < count($student['votes']); $i++){
                        $vote = $student['votes'][$i];
                        //echo $vote;
                        //var_dump($vote);
                        $voteSum += $vote;
                        //echo $voteSum;
                    }
                        echo $voteSum/count($student['votes']);
                    ?>
            
            
        </div>
        <?php  }; ?>
    
</body>
</html>
