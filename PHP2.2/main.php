<?php
/**
 * Created by PhpStorm.
 * User: Ghost
 * Date: 19.11.2018
 * Time: 14:39
 */
require_once "DigitGood.php";
require_once "PieceGood.php";
require_once "WeightGood.php";

$digitGood = new DigitGood('DigitGood',100);
$pieceGood = new PieceGood('PieceGood', 150);
$weightGood = new WeightGood('WeightGood', 150);

$digitGood->getValue(2);
$pieceGood->getValue(4);
$weightGood->getValue(8.36);

echo $digitGood->printValue();