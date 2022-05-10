<?php
include_once __DIR__ . "/models/Food.php";
include_once __DIR__ . "/models/Toy.php";
include_once __DIR__ . "/models/User.php";


$parmigiana = new Food('cane', 'melanzane e parmigiano reggiano D.O.P. col binocolo', 'Parmigggiana Canina Simply the best', 150 , 'la miglior parmigiana che il vostro bau possa mai desiderare', 'turkmenistan', true);

$croccoGourmet;

$ossoBalosso = new Toy('brownish', 'titanio', 'Osso Balosso', 100, 'rifatti i denti alla Stannis Baratheon!', 'King\'s Landing', false);

$quaLaZampa = new Toy('giallo, nero, blu rosa verde e ?tu? i colori poooower raaaaangers', 'eternio indurito a freddo', 'Qua La Zampa!', 199.99, 'Da il cinque automatico in al tuo amichevole anatrone di compagnia', 'Wakanda Foh Evah', true);

$bancomat = new Card(1254588181, 2028, 350);
$bancomatto = new Card(1254588949828, 2020, 350000);
$pocobanco = new Card(12545354646749828, 2022, 35);
$paperipo = new User('Paperipo', false, $bancomat);

var_dump($parmigiana);
var_dump($ossoBalosso);
var_dump($quaLaZampa);
var_dump($bancomat);
var_dump($paperipo);
; ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>transaction</title>
</head>
<body>
    <p>
        <?php 
            echo $paperipo->buyThings($quaLaZampa);
            echo '<br>'.'Credito rimanente: ' . $paperipo->getCreditCard()->getBalance();
        ?>
    </p>
    <p>
        <?php 
            $paperipo->setCreditCard($bancomatto);
            echo $paperipo->buyThings($parmigiana);
        ?>
    </p>
    <p>
        <?php 
            $paperipo->setCreditCard($pocobanco);
            echo $paperipo->buyThings($quaLaZampa);
        ?>
    </p>
    <p>
        <?php 
            $paperipo->setCreditCard($bancomat);
            //echo '<pre>' . $paperipo->getRegistration() . '</pre>';
            $paperipo->setRegistration(true);
            //echo '<pre>' . $paperipo->getRegistration() . '</pre>';
            echo $paperipo->buyThings($ossoBalosso);
        ?>
    </p>
</body>
</html>