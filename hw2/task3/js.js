// http://127.0.0.1:8080/
function request() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://127.0.0.1:8080/json.json');
    xhr.send();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            var images = JSON.parse(xhr.responseText);
            images.forEach(element => {
                var image = document.createElement('img');
                image.title = element.title;
                image.src = element.icon;
                var link = document.createElement('a');
                link.href = element.full;
                link.appendChild(image);
                document.body.appendChild(link);

            });
        }
    }
}

window.onload = function() {
    request();
}