<?php 
class Movie {
    public $title;
    public $genre;
    public $originalLanguage;
    public $releaseYear;
    
    function __construct($_title, $_genre, $_originalLanguage, $_releaseYear)
    {
        $this->title = $_title;
        $this->genre = $_genre;
        $this->originalLanguage = $_originalLanguage;
        $this->releaseYear = $_releaseYear;
    }
    
    public function setTitle($newTitle){
        //controls and checks go here
        $this->title = $newTitle;
    }
    public function getTitle(){
        return $this->title;
    }
    public function sword(){
        echo 'hai la mia spada';
    }
    public function bow(){
        echo 'e hai il mio arco';
    }
    public function axe(){
        echo 'e la mia assshcia';
    }
}
$tlotrI = new Movie('Il Signore Degli Anelli - La compagnia dell\'Anello', 'Fantasy', 'Inglese', 2000);
$tlotrII = new Movie('Il Signore Degli Anelli - Le due torri', 'Fantasy', 'Inglese', 2001);
$tlotrIII = new Movie('Il Signore Degli Anelli - Il ritorno del Re', 'Fantasy', 'Inglese', 2002);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>tlotr</title>
</head>
<body>
    <header></header>
    <main>
    <h1>movies</h1>
    <p>
        <?php 
        var_dump($tlotrI) ; ?>
    </p>
    <p>
        Titolo: <?php echo $tlotrI->title; ?> <br>
        Genere: <?php  echo $tlotrI->genre; ?> <br>
        Lingua: <?php  echo $tlotrI->originalLanguage; ?> <br>
        Anno: <?php  echo $tlotrI->releaseYear; ?> <br>
        <?php $tlotrI->sword() ; ?>
    </p>
    <p>
        <?php 
        var_dump($tlotrII) ; ?>
    </p>
    <p>
        Titolo: <?php echo $tlotrII->title; ?> <br>
        Genere: <?php  echo $tlotrII->genre; ?> <br>
        Lingua: <?php  echo $tlotrII->originalLanguage; ?> <br>
        Anno: <?php  echo $tlotrII->releaseYear; ?> <br>
        <?php $tlotrII->bow() ; ?>
    </p>
    <p>
        <?php 
        var_dump($tlotrIII) ; ?>
    </p>
    <p>
        Titolo: <?php echo $tlotrIII->title; ?> <br>
        Genere: <?php  echo $tlotrIII->genre; ?> <br>
        Lingua: <?php  echo $tlotrIII->originalLanguage; ?> <br>
        Anno: <?php  echo $tlotrIII->releaseYear; ?> <br>
        <?php $tlotrIII->axe() ; ?>
    </p>
    </main>
    <footer></footer>
</body>
</html>