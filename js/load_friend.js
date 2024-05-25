window.onload = function () {
    var xhr;
    if (window.XMLHttpRequest) {
        // code for modern browsers
        xhr = new XMLHttpRequest();
    } else {
        // code for old IE browsers
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xhr.open("GET", "/manage/friend.json");
    xhr.onload = function () {
        if (xhr.status === 200) {
            var elements = document.getElementsByClassName("friend-list");
            console.log(elements);
            try {
                var res = JSON.parse(xhr.responseText);
                for (let fileIndex = 0; fileIndex < elements.length; fileIndex++) {//遍历文件元素
                    const file = elements[fileIndex];//文件元素
                    for (let linkIndex = 0; linkIndex < res.length; linkIndex++) {//遍历文件列表中的链接
                        const link = res[linkIndex]['link'];//链接地址
                        if (link) { // 检查链接地址是否存在
                            var linkElement = document.createElement("a");
                            linkElement.href = link;
                            var text = document.createTextNode(res[linkIndex]['name']);
                            linkElement.appendChild(text); // 将文本节点添加到链接元素中
                            file.appendChild(linkElement); // 将链接元素添加到文件列表元素中
                            file.appendChild(document.createElement("br")); // 添加换行
                        }
                    }
                }
            } catch (e) {
                console.error("Failed to parse JSON response: " + e.message);
                return;
            }
        }
    };
    xhr.onerror = function () {
        console.error("Failed to request file list");
    };
    xhr.send();
};