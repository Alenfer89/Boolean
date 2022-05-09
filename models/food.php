<?php

include_once __DIR__ . "/Product.php";

class Food extends Product {
    /**
     * target animal for which the item was made
     *
     * @var [string]
     */
    protected $targetAnimal;
    /**
     * a list of the ingredients
     *
     * @var [string]
     */
    protected $ingredients;

    public function __construct($targetAnimal, $ingredients, $name, $price, $description, $countryOfOrigin, $isDiscountable)
    {
        parent::__construct($name, $price, $description, $countryOfOrigin , $isDiscountable);
        $this->targetAnimal = $targetAnimal;
        $this->ingredients = $ingredients;
    }
}





?>