<?php
/**
 * Created by PhpStorm.
 * User: Ghost
 * Date: 15.11.2018
 * Time: 1:52
 */

require "Good.php";

class Laptop
{
    public $display;
    public $processor;
    public $videoAdapter;
    public $hardDrive;
    public $system;

    public function getChar() {
        echo "Display: {$this->display}\n
        Processor: {$this->processor}\n
        Video Adapter: {$this->videoAdapter}\n
        Hard Drive: {$this->hardDrive}\n";
    }
    public function chooseSystem (int $system) {
        if ($system == 1) $this->system = "Windows";
        else  if ($system == 1) $this->system = "MacOS";
        else $this->system = "Linux";
        return $this->system;

    }

}