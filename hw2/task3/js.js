// http://127.0.0.1:8080/
function request() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://127.0.0.1:8080/json.json');

    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            console.log(xhr.responseText);
        }
    }
}

window.onload = function() {
    request();
}