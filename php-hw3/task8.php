<?php

$country = [
    'Московская область' => ['Москва', 'Зеленоград', 'Клин'],
    'Ленинградская область' => ['Санкт-Петербург', 'Всеволожск', 'Павловск', 'Кронштадт'],
    'Республика Татарстан' => ['Казань', 'Свияжск', 'Набережные челны', 'Черемшан'],
    'Чувашская Республика' => ['Чебоксары', 'Канаш', 'Алатырь', 'Шумерля']
];

foreach ($country as $region => $cities) {
    if ($region == 'Московская область' || $region == 'Ленинградская область') {
        echo $region." : ";
        foreach ($cities as $city) if ((mb_substr($string, 0, 1) == 'K')) echo $city.", ";
        echo "\n";
    }

}