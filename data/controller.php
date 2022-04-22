<?php 
    include __DIR__ . '/data.php';

    header('Content-Type: application/json');
    if (isset($_GET["genre"])){
        foreach($disks as $disk){
            if($disk['genre'] == $_GET["genre"]){
                $filteredDisks[] = $disk;
            }
        }
        echo json_encode(
            [
                'results' => $filteredDisks,
                'length' => count($disks)
            ]
        );
    }else{
        echo json_encode(
            [
                'results' => $disks,
                'length' => count($disks)
            ]
        );
    }
    
?>