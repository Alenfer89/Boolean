<?php
include_once __DIR__ . "/models/Food.php";
include_once __DIR__ . "/models/Toy.php";


$parmigiana = new Food('cane', 'melanzane e parmigiano reggiano D.O.P. col binocolo', 'Parmigggiana Canina Simply the best', 150 , 'la miglior parmigiana che il vostro bau possa mai desiderare', 'turkmenistan', true);

$croccoGourmet;

$ossoBalosso = new Toy('brownish', 'titanio', 'Osso Balosso', 200, 'rifatti i denti alla Stannis Baratheon!', 'King\'s Landing', false);

$quaLaZampa = new Toy('giallo, nero, blu rosa verde e ?tu? i colori poooower raaaaangers', 'eternio indurito a freddo', 'Qua La Zampa!', 199.99, 'Da il cinque automatico in al tuo amichevole anatrone di compagnia', 'Wakanda Foh Evah', true);

var_dump($parmigiana);
var_dump($ossoBalosso);
var_dump($quaLaZampa);
; ?>