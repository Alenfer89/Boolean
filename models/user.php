<?php 
include_once __DIR__ . "/CreditCard.php";
include_once __DIR__ . "/Product.php";

class User {
    protected $name;
    public $isRegistered;
    public $creditCard;
    protected $discount;

    public function __construct($name, $isRegistered, $creditCard)
    {
        $this->name = $name;
        $this->isRegistered = $isRegistered;
        $this->setCreditCard($creditCard);
        $this->discount = $this->setDiscount();

    }

    public function setCreditCard($creditCard){
        if(!$creditCard instanceof Card){
            return false;
        } else {
            $this->creditCard = $creditCard;
        }
    }
    public function setRegistration($isRegistered){
        $this->isRegistered = $isRegistered;
        //! IMPORTANTE RIGA SOTTO PER LEARNING, O % A RIGA 51 NON VANNO
        $this->discount = $this->setDiscount();
        //! RIGA SOPRA
    }

    protected function setDiscount(){
        if($this->isRegistered){
            return $this->discount = 5;
        } else {
            return $this->discount = 0;
        }
    }

    public function buyThings($thing){
        if($this->creditCard->expiry < date('Y'))
            return 'carta scaduta, corri in banca a rinnovare per comprare '. $thing->name;
        if($this->creditCard->balance < $thing->price)
            return 'credito insufficiente, purtroppo sei povero e non puoi permetterti ' . $thing->name;
        
        if ($this->isRegistered) {
            $price = $thing->price - $thing->price / 100 * $this->discount;
            $this->creditCard->balance -= $price;

            return "Perfetto! Hai avuto uno sconto del $this->discount% e hai pagato " . round($price, 2) . "€, per il tuo " . $thing->name;
        } else {
            $this->creditCard->balance -= $thing->price;

            return "Hai pagato " . round($thing->price, 2) . "€, per il tuo " . $thing->name;
        }
    }
}


; ?>