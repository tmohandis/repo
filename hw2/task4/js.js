// http://127.0.0.1:8080/
function requestServer() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://127.0.0.1:8080/json.json');
    xhr.send();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            var request = JSON.parse(xhr.responseText);
            var button = document.getElementById('button');
            if (request.result === 'success')
            {
                button.style.backgroundColor = 'green';
            }
            else if (request.result === 'error') {
                button.style.backgroundColor = 'red';
            }
        }
    }
}

window.onload = function() {
    document.getElementById('button').addEventListener('click', function(event) {
        requestServer();
        event.preventDefault();
    }
)
}