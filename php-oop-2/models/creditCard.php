<?php 
class Card {
    protected $number;
    protected $expiry;
    protected $balance;

    public function __construct($number, $expiry, $balance)
    {
        $this->number = $number;
        $this->expiry = $expiry;
        $this->balance = $balance;
    }

    public function setNumber($number){
        $this->number = $number;
    }
    public function setExpiry($expiry){
        $this->expiry = $expiry;
    }
    public function setBalance($balance){
        $this->balance = $balance;
    }
    public function getNumber(){
        return $this->number;
    }
    public function getExpiry(){
        return $this->expiry;
    }
    /**
     * Undocumented function
     *
     * @return float
     */
    public function getBalance(){
        return $this->balance;
    }

}





; ?>