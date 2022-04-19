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
    $LatinText = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur aut et dolor sapiente sed ipsam quas aliquam accusantium? Nobis doloribus deleniti nam officia culpa maiores, autem id odio omnis fuga. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, sed autem ab repudiandae possimus eaque, velit blanditiis placeat aliquid quibusdam expedita unde. Corporis porro unde placeat quisquam, dolorum amet? Hic? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem laudantium eos quos ab eaque fugit suscipit aliquam aliquid quidem, delectus quis nulla illum provident repellat sapiente minus nemo, rem esse.';
    $spanishInquisition = $_GET['word'];
    
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
<h1>consegna 2 non case-sensitive</h1>
<p>
    <?php  echo 'La tua parola è ' . $spanishInquisition; ?>
</p>
<p>
    <?php 
    $theVatican = str_replace($spanishInquisition, '***', $LatinText);
    echo $theVatican  ?>
</p>

<p>
<?php echo strlen($theVatican); ?>
</p>
<h1>consegna 2 che altera il testo</h1>
<p>
    <?php  echo 'La tua parola è ' . $spanishInquisition; ?>
</p>
<p>
    <?php 
    $nobodyExpects = str_replace(strtolower($spanishInquisition), '***', strtolower($LatinText));
    echo $nobodyExpects  ?>
</p>

<p>
<?php echo strlen($nobodyExpects); ?>
</p>

<h1>consegna 2 mantenendo inalterato il testo</h1>
<p>
    <?php 
    $censorship = str_replace([$spanishInquisition,ucfirst($spanishInquisition),lcfirst($spanishInquisition), strtolower($spanishInquisition), strtoupper($spanishInquisition)], '***', $LatinText ) ;
    echo $censorship  ?>
</p>
<p>
<?php echo strlen($censorship); ?>
</p>


<!-- unnecessary implode/explode -->
<!-- <h1>consegna 2 mantenendo inalterato il testo</h1>
<p>
<?php 
    $censorship = implode(' ', str_replace([$spanishInquisition,ucfirst($spanishInquisition),lcfirst($spanishInquisition), strtolower($spanishInquisition), strtoupper($spanishInquisition)], '***', explode(' ', $LatinText )) );
    echo $censorship  ?>
</p>
<p>
<?php echo strlen($censorship); ?>
</p> -->
