<?php
/**
 * Created by PhpStorm.
 * User: Ghost
 * Date: 19.11.2018
 * Time: 14:25
 */

abstract class Good
{
    protected $name;
    protected $cost;

    protected static $income = 0;

    abstract protected function getValue($number);

    public function __construct($name, $cost)
    {
        $this->name = $name;
        $this->cost = $cost;
    }

    public function printValue() {
        print self::$income . "\n";
    }


}