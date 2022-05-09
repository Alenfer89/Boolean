<?php

include_once __DIR__ . "/Product.php";
/**
 * Animal food specific product
 */
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

    /**
     * Food product creator
     *
     * @param [string] $targetAnimal: the animal the food is for
     * @param [string] $ingredients : main ingredients (reasonably) short list
     * @param [string] $name : the given product name
     * @param [float] $price : the given product price
     * @param [string] $description : a small description of the product
     * @param [string] $countryOforigin . the country where the item was produced
     * @param boolean $isDiscountable : returning the possibility for the item to be discounted, default FALSE
     */
    public function __construct($targetAnimal, $ingredients, $name, $price, $description, $countryOfOrigin, $isDiscountable = false)
    {
        parent::__construct($name, $price, $description, $countryOfOrigin , $isDiscountable);
        $this->targetAnimal = $targetAnimal;
        $this->ingredients = $ingredients;
    }

    public function setTargetAnimal($targetAnimal){
        $this->targetAnimal = $targetAnimal;
    }
    public function setIngredients($ingredients){
        $this->ingredients = $ingredients;
    }
    public function getTargetAnimal(){
        return $this->targetAnimal;
    }
    public function getIngredients(){
        return $this->ingredients;
    }
}





?>