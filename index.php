<?php 
    echo 'hola';
    echo '<h3>hola</h3>';
    // $argomentoUno = $argv[1];
    // // 'word'
    // echo $argomentoUno;
    // $argomentoDue = $argv[2];
    // // 'altro'
    // echo $argomentoDue;
    $italianCity = 'Milano';
    $frenchCity= 'Parigi';
    //ù html-like starting-point
    echo '<pre>';
    echo 'Parigi'.' ';
    echo $frenchCity;
    echo '</pre>';
    //ù html-like end
?>
<pre> <?php echo $italianCity;?> </pre>

<!-- ESERCIZIO -->
<?php 
    //!ESERCIZIO
    $LatinText = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur aut et dolor sapiente sed ipsam quas aliquam accusantium? Nobis doloribus deleniti nam officia culpa maiores, autem id odio omnis fuga.';
    $spanishInquisition = $_GET['word'];
    echo 'La tua parola è ' . $spanishInquisition;
?>
<h1>consegna 1</h1>
<p>
    <?php  
    echo $LatinText;
    ?>
</p>
<p>
    <?php echo strlen($LatinText); ?>
</p>

