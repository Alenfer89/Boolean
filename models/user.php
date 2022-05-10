<?php 
include_once __DIR__ . "/CreditCard.php";
include_once __DIR__ . "/Product.php";
/** this class specifies the shop User */
class User {
    /** User name @var string the name of the user */
    protected $name;
    /** Registration toggle @var boolean specifies if the user is registered to the shop or not */
    protected $isRegistered;
    /** User payments method by card @var object only accepts objects with the class "Card" */
    protected $creditCard;
    /** Discount amount in % @var integer internally calculated based on boolean "isRegistered", can only be 0 or 5 */
    protected $discount;
    /**
     * User creator (no God)
     *
     * @param string $name the name of the user you are creating
     * @param boolean $isRegistered returning value to be used to calculate discount amount based on registration
     * @param Card $creditCard an object with specific attributes, no other options allowed
     */
    public function __construct(string $name, bool $isRegistered, Card $creditCard)
    {
        $this->name = $name;
        $this->isRegistered = $isRegistered;
        $this->setCreditCard($creditCard);
        $this->discount = $this->setDiscount();

    }
    /**
     * setter for the user credit card
     *
     * @param object $creditCard only card object allowed
     * @return void
     */
    public function setCreditCard($creditCard){
        if(!$creditCard instanceof Card){
            return false;
        } else {
            $this->creditCard = $creditCard;
        }
    }
    /**
     * name setter
     *
     * @param string $name enter the new name for the user
     * @return void
     */
    public function setName($name){
        $this->name = $name;
    }
    /**
     * changes the registration to the shop-site and calculates the relative discount
     *
     * @param boolean $isRegistered based on value, discount will be calculated
     * @return void
     */
    public function setRegistration($isRegistered){
        $this->isRegistered = $isRegistered;
        //! IMPORTANTE RIGA SOTTO PER LEARNING, O % A RIGA 86 NON VANNO
        $this->discount = $this->setDiscount();
        //! RIGA SOPRA
    }
    /**
     * discount calculator based on boolean attribute isRegistered
     *
     * @return void
     */
    protected function setDiscount(){
        if($this->isRegistered){
            return $this->discount = 5;
        } else {
            return $this->discount = 0;
        }
    }
    /**
     * name retriever
     *
     * @return a string with the user name
     */
    public function getName(){
        return $this->name;
    }
    /**
     * credit card retriever
     *
     * @return an object of class "Card"
     */
    public function getCreditCard(){
        return $this->creditCard;
    }
    /**
     * registration retriever
     *
     * @return a boolean based on user registration status
     */
    public function getRegistration(){
        return $this->isRegistered;
    }

    public function getDiscount(){
        if($this->isRegistered){
            return 'L\'utente risulta registrato e può usufruire di uno sconto del 5%';
        } else {
            return 'L\'utente non risulta registrato e non può usufruire di uno sconto';
        }
    }

    public function buyThings($thing){
        if($this->creditCard->getExpiry() < date('Y'))
            return 'carta scaduta, corri in banca a rinnovare per comprare '. $thing->name;
        if($this->creditCard->getBalance() < $thing->price)
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