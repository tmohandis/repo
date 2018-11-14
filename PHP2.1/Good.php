<?php
/**
 * Created by PhpStorm.
 * User: Ghost
 * Date: 15.11.2018
 * Time: 1:32
 */

class Good
{
    protected static $idents = 0;
    public $id;
    public $image;
    public $name;
    public $description;
    public $price;

    public function __construct(string $name, int $price)
    {
        $this->id = self::$idents;
        self::$idents = self::$idents + 1;
        $this->name = $name;
        $this->price = $price;


    }

    public function showDescription () {
        echo "Good's name {$this->name}\n
        Good's description {$this->description}\n";

    }

    public function totalPrice (int $number) {
        return $number*$this->price;
    }


}