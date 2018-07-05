window.onload = function () {

    var name = document.getElementById('name');
    var phone = document.getElementById('phone');
    var email = document.getElementById('email');
    var text = document.getElementById('text');
    var city = document.getElementById('city');

    var regName = /[a-zа-яё]$/i;
    var regPhone = /^\+\d\(\d{3}\)\d{3}-\d{3}$/;
    var regEmail = /^[a-z]+[-.][a-z]+@mail.ru$|^[a-z]+@mail.ru$/;


    (function($) {
        $(function (){
            $.get('json.json', {}, function(cities){
                cities.forEach(element => {
                    var $option = $('<option/>', {
                        text: element.name
                    });
                    $('#city').append($option);
                });
            }, 'json');
        });

        $('#date').datepicker({
            firstDay : 1,
            dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пн','Сб'],
            monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август',
            'Сентябрь','Октябрь','Ноябрь','Декабрь']
        })

        $('#slider').slick({
            autoPlay: true
        });
    
        $('#dialog').dialog({
            autoOpen: false,
            buttons : {
                OK : function() {
                    $(this).dialog('close');
                }
            }
        });

        $('#button').on('click', function(event){

            if (!regName.test(name.value)){
                name.style.borderColor = 'red';
                $('#name').effect( "bounce", { times: 3 }, "slow" );
                $('#dialog').children('p').text('Неверное Имя');
                $('#dialog').dialog('open');
            } else if (!regPhone.test(phone.value)){
                name.style.borderColor = null;
                phone.style.borderColor = 'red';
                $('#phone').effect( "bounce", { times: 3 }, "slow" );
                $('#dialog').children('p').text('Неверный номер');
                $('#dialog').dialog('open');
            } else if (!regEmail.test(email.value)){
                phone.style.borderColor = null;
                email.style.borderColor = 'red';
                $('#email').effect( "bounce", { times: 3 }, "slow" );
                $('#dialog').children('p').text('Неверный Email');
                $('#dialog').dialog('open');
            } else {
                email.style.borderColor = null;
                $('#dialog').children('p').text('Форма успешно отправлена');
                $('#dialog').dialog('open');
            }
            event.preventDefault();
        })

    })(jQuery);

}