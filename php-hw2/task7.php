<?php



function mathOperation()
{
    $a = date("G");
    $b = date("i");

    switch ($a % 10) {
        case 0:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
            echo $a . " часов ";
            break;
        case 2:
        case 3:
        case 4:
            echo $b . " часа ";
            break;
        case 1:
            echo $b . " час ";
            break;

    }

    switch ($b % 10) {
        case 0:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
            echo $b . " минут";
            break;
        case 2:
        case 3:
        case 4:
            echo $b . " минуты";
            break;
        case 1:
            echo $b . " минутa";
            break;

    }
}