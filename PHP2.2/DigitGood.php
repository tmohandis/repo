<?php
/**
 * Created by PhpStorm.
 * User: Ghost
 * Date: 19.11.2018
 * Time: 14:31
 */


require_once "Good.php";

class DigitGood extends Good
{
    public function __construct($name, $cost)
    {
        parent::__construct($name, $cost);
    }

   public function getValue($number)
    {
        return parent::$income = parent::$income + $this->cost/2*$number;
    }
}