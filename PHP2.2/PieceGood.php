<?php
/**
 * Created by PhpStorm.
 * User: Ghost
 * Date: 19.11.2018
 * Time: 14:30
 */

require_once "Good.php";

class PieceGood extends Good
{
    public function __construct($name, $cost)
    {
        parent::__construct($name, $cost);
    }

    public function getValue($number)
    {
        parent::$income = parent::$income + $this->cost*$number;
    }
}