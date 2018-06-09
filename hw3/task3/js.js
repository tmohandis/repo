window.onload = function () {

    var name = document.getElementById('name');
    var phone = document.getElementById('phone');
    var email = document.getElementById('email');
    var text = document.getElementById('text');

    var regName = /[a-zа-яё]$/i;
    var regPhone = /^\+\d\(\d{3}\)\d{3}-\d{3}$/;
    var regEmail = /^[a-z]+[-.][a-z]+@mail.ru$|^[a-z]+@mail.ru$/;



    document.getElementById('button').addEventListener('click', function (event) {
        if (!regName.test(name.value)){
            name.style.borderColor = 'red';
            alert ('Неверное имя');
        } else if (!regPhone.test(phone.value)){
            name.style.borderColor = null;
            phone.style.borderColor = 'red';
            alert('Неверный Номер');
        } else if (!regEmail.test(email.value)){
            phone.style.borderColor = null;
            email.style.borderColor = 'red';
            alert('Неверный Email');
        } else {
            email.style.borderColor = null;
            alert('Форма отправлена');
        }
        event.preventDefault();
    }
    )
}