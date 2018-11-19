<?php
/**
 * Created by PhpStorm.
 * User: Ghost
 * Date: 19.11.2018
 * Time: 14:31
 */

require_once "Good.php";

class WeightGood extends Good
{

    public function __construct($name, $cost)
    {
        parent::__construct($name, $cost);

    }

    protected function getPrice($weight) {

        if ($weight < 10) return $this->cost;
         else return $this->cost*0.8;

    }


    public function getValue($number)
    {
        parent::$income = parent::$income + $number * $this->getPrice($number);
    }
}