<?php 
    echo 'hola';
    echo '<h1>hola</h1>';
    $italianCity = 'Milano';
    $frenchCity= 'Parigi';
    $LatinText = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur aut et dolor sapiente sed ipsam quas aliquam accusantium? Nobis doloribus deleniti nam officia culpa maiores, autem id odio omnis fuga.';

    //!html-like starting-point
    echo '<pre>';
    echo 'Parigi'.' ';
    echo $frenchCity;
    echo '</pre>';
    //!html-like end
?>


<pre>
<?php 
echo $italianCity;
?>
</pre>