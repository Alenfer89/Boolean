<?php 
include __DIR__ . '/data.php';

header('Content-type: application/json');
echo json_encode(
    [
        'result' => $disks,
        'length' => count($disks)
    ]
)


?>