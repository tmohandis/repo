<?php
/**
 * Created by PhpStorm.
 * User: Ghost
 * Date: 15.11.2018
 * Time: 1:47
 */

require "Good.php";
class SmartPhone
{
    public $display;
    public $systemVersion;
    public $camera;

    public function getChar() {
        echo "Display: {$this->display}\n
        System: {$this->systemVersion}\n
        Camera {$this->camera}\n";
    }



}