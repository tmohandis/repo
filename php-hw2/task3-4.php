<?php

$x = 5;
$y = 6;

function sum ($a, $b){
    return $a + $b;
}

function sub ($a, $b){
    return $a - $b;
}

function multp ($a, $b){
    return $a * $b;
}

function div ($a, $b){
    return $a / $b;
}

function mathOperation($arg1, $arg2, $operation) {
    switch ($operation) {
        case sum:    return sum($arg1, $arg2);
        case sub:    return sub($arg1, $arg2);
        case multp : return multp ($arg1, $arg2);
        case div:    return div ($arg1, $arg2);

    }

}

echo mathOperation($x, $y, 'sum');