<?php 

class Product {
    protected $name;
    protected $price;
    protected $description;

    public function __construct($name, $price, $description)
    {
        $this->name = $name;
        $this->price = $price;
        $this->description = $description;

    }

    public function setName($name){
        return $this->name = $name;
    }
    public function setPrice($price){
        return $this->price = $price;
    }
    public function setDescription($description){
        return $this->description = $description;
    }
    public function getName($name){
        echo $this->name;
    }
    public function getPrice($price){
        echo $this->price;
    }
    public function getDescription($description){
        echo $this->description;
    }
}


?>