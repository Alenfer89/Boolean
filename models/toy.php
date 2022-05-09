<?php 
include_once __DIR__ . "/Product.php";

/**
 * Animal toy specific product class
 */
class Toy extends Product {
    protected $color;
    protected $material;

    /**
     * Toy class creator
     *
     * @param string $color : main color(s), no more than three suggested
     * @param string $material : the main material the item is composed of
     * @param string $name : the given product name
     * @param float $price : the given product price
     * @param string $description : a small description of the product
     * @param string $countryOforigin . the country where the item was produced
     * @param boolean $isDiscountable : returning the possibility for the item to be discounted, default FALSE
     */
    public function __construct($color, $material, $name, $price, $description, $countryOfOrigin, $isDiscountable = false)
    {
        parent::__construct($name, $price, $description, $countryOfOrigin , $isDiscountable);
        $this->color = $color;
        $this->material = $material;
    }

    public function setColor($color){
        $this->color = $color;
    }
    public function setMaterial($material){
        $this->material = $material;
    }
    public function getColor(){
        return $this->color;
    }
    public function getMaterial(){
        return $this->material;
    }
}



; ?>