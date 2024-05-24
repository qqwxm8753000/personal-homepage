function init() {
    var elements = document.getElementsByClassName("一言");
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://international.v1.hitokoto.cn/?c=i', true);

    xhr.onload = function() {
        if (xhr.status === 200) {
            var res = JSON.parse(xhr.responseText);

            for (var i = 0; i < elements.length; i++) {
                if (res.from_who == null){
                    elements[i].innerText = `${res.hitokoto} --《${res.from}》`;
                }else{
                    elements[i].innerText = `${res.hitokoto}--${res.from_who} 《${res.from}》`;
                }
            }
        } else {
            console.log('Error: ' + xhr.status);
        }
    };

    xhr.onerror = function() {
        console.log('Error: request failed.');
    };

    xhr.send();
}

document.addEventListener("DOMContentLoaded", init);
