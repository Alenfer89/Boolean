<?php 
    include __DIR__ . '/data.php';

    header('Content-Type: application/json');
    echo json_encode(
        [
            'results' => $disks,
            'length' => count($disks)
        ]
    );
?>