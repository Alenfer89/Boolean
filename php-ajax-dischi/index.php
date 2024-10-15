<?php  
//include_once __DIR__ . '/data/data.php';
?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Disks</title>

    
    <!-- Montserrat google font -->
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700" rel="stylesheet">
    <!-- Font-Awesome cdn v6 -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
    <!-- Bootstrap 5.1 -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <!-- Vue Js 2.6-->
    <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
    <!-- AJAX -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.20.0/axios.min.js"></script>
    <!-- Custom style -->
    <link rel="stylesheet" href="css/style.css">
</head>
<body>

    <?php include __DIR__ . '/partials/header.php' ; ?>
    
    <main id="app">
        <div class="container-fluid">
            <div class="row ">
                <div class="col-12 ">
                    <h1 class="text-white text-center">
                        Today's Choice
                    </h1>
                    <input type="text" v-model='genre' @keydown.enter='filter()'>
                </div>
            </div>
            <div class="row py-5 px-3">
                <div class="col-12 py-5 px-3 d-flex flex-wrap justify-content-between">
                    
                    <div class="card mb-2" v-for='(disk, index) in disksList'>
                        <img :src="disk.cover" class="card-img-top" :alt="disk.title">
                        <div class="card-body">
                            <h5 class="card-title">{{disk.title}}</h5>
                            <p class="card-text">{{disk.author}}</p>
                            <p class="card-text">{{disk.year}}</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        
        <div>
            <?php //$test; ?>
        </div>
    </main>

    <script type="text/javascript" src="js/main.js"></script>
</body>
</html>