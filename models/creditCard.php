<?php 
class Card {
    public $number;
    public $expiry;
    public $balance;

    public function __construct($number, $expiry, $balance)
    {
        $this->number = $number;
        $this->expiry = $expiry;
        $this->balance = $balance;
    }
}





; ?>