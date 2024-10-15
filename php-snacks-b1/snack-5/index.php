<?php 
    // Prendere un paragrafo abbastanza lungo, contenente diverse frasi. Prendere il paragrafo e suddividerlo in tanti paragrafi. Ogni punto un nuovo paragrafo.

    $bigParagraph = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est rem obcaecati, omnis nobis tempore doloribus, nulla rerum quidem explicabo tempora, inventore architecto libero perferendis deleniti laborum impedit ex sint unde. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo at suscipit accusantium eligendi recusandae qui reiciendis cupiditate animi provident, illo accusamus pariatur? Repudiandae, perferendis temporibus consectetur aspernatur earum blanditiis exercitationem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae unde earum mollitia tempore libero, quasi iusto numquam doloremque vel fugit, est suscipit odio quae, architecto nostrum. Sint facilis harum iure? Lorem ipsum dolor sit amet consectetur adipisicing elit. A provident suscipit doloremque quae delectus enim ratione ipsa sapiente aspernatur? Quia natus eveniet nostrum velit unde temporibus voluptatibus laborum exercitationem et! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed fuga facere voluptatem natus vitae quasi reprehenderit vero deleniti perspiciatis inventore nulla unde, corporis soluta praesentium veniam velit, illum harum rem? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est rem obcaecati, omnis nobis tempore doloribus, nulla rerum quidem explicabo tempora, inventore architecto libero perferendis deleniti laborum impedit ex sint unde. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo at suscipit accusantium eligendi recusandae qui reiciendis cupiditate animi provident, illo accusamus pariatur? Repudiandae, perferendis temporibus consectetur aspernatur earum blanditiis exercitationem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae unde earum mollitia tempore libero, quasi iusto numquam doloremque vel fugit, est suscipit odio quae, architecto nostrum. Sint facilis harum iure? Lorem ipsum dolor sit amet consectetur adipisicing elit. A provident suscipit doloremque quae delectus enim ratione ipsa sapiente aspernatur? Quia natus eveniet nostrum velit unde temporibus voluptatibus laborum exercitationem et! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed fuga facere voluptatem natus vitae quasi reprehenderit vero deleniti perspiciatis inventore nulla unde, corporis soluta praesentium veniam velit, illum harum rem?';

    $arrayOfSentences = explode('.' , $bigParagraph);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>paragraphs</title>
</head>
<body>
    <h1>Result</h1>
    <?php for($i = 0; $i < count($arrayOfSentences); $i++){?>
    <p>
        <?php echo $arrayOfSentences[$i].'.'; ?>
    </p>
    <?php } ; ?>
</body>
</html>
