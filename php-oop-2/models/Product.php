<?php 
/**
 * General-main product class for this shop
 */
class Product {
    /**
     * the name of the added product
     * @var [string] 'public'
     */
    public $name;
    /**
     * the price of the added product
     * @var [float] 'public'
     */
    public $price;
    /**
     * small description of the added product
     * @var [string]
     */
    public $description;
    /**
     * The country where the item was produced
     *
     * @var [string]
     */
    public $countryOfOrigin;
    /**
     * boolean of the possibility to discount the given product, default FALSE
     * @var [boolean]
     */
    public $isDiscountable;


    /**
     * Function to add a new product to the list
     *
     * @param [string] $name : the given product name
     * @param [float] $price : the given product price
     * @param [string] $description : a small description of the product
     * @param [string] $countryOforigin . the country where the item was produced
     * @param boolean $isDiscountable : returning the possibility for the item to be discounted, default FALSE
     */
    public function __construct($name, $price, $description, $countryOfOrigin , $isDiscountable = false)
    {
        $this->name = $name;
        $this->price = $price;
        $this->description = $description;
        $this->countryOfOrigin= $countryOfOrigin;
        $this->isDiscountable = $isDiscountable;

    }
    /**
     * Product name changer
     *
     * @param [string] $name : the new name of the product
     * @return a string with the new name of the product in the object
     */
    public function setName($name){
        $this->name = $name;
    }
    /**
     * Product price changer
     *
     * @param [float] $price : the new price of the product
     * @return a number which is the new price of the product in the object
     */
    public function setPrice($price){
        $this->price = $price;
    }
    /**
     * Product description changer, keep it reasonably short
     *
     * @param [string] $description : the new description of the product
     * @return a string with the new description of the product in the object
     */
    public function setDescription($description){
        $this->description = $description;
    }
    /**
     * Product country changer
     *
     * @param [string] $description : the new country of the product
     * @return a string with the country of origin of the product in the object
     */
    public function setCountry($countryOfOrigin){
        $this->countryOfOrigin = $countryOfOrigin;
    }


    /**
     * retriever of the product name
     *
     * @return string
     */
    public function getName(){
        return $this->name;
    }
    /**
     * retriever of the product price
     *
     * @return number
     */
    public function getPrice(){
        return $this->price;
    }
    /**
     * retriever of the product description
     *
     * @return string
     */
    public function getDescription(){
        return $this->description;
    }
    /**
     * retriever of the country where the product was made
     *
     * @return string
     */
    public function getCountry(){
        return $this->countryOfOrigin;
    }
}


?>