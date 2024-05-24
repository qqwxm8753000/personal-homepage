window.onload = function () {
    if (window.XMLHttpRequest) {
        // code for modern browsers
        var xhr = new XMLHttpRequest();
    } else {
        // code for old IE browsers
        var xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xhr.open("GET", "/manage/files.json");
    xhr.onload = function () {
        if (xhr.status === 200) {
            var elements = document.getElementsByClassName("file-list");
            try {
                var res = JSON.parse(xhr.responseText);
                for (let index = 0; index < elements.length; index++) {//遍历元素
                    const file = elements[index];//元素
                    for (let index = 0; index < res.length; index++) {//遍历文件列表
                        const element = res[index];//文件
                        var link = document.createElement("a");
                        link.href = element['link'];
                        var text = document.createTextNode(element['name']);
                        link.appendChild(text); // 将文本节点添加到链接元素中
                        file.appendChild(link); // 将链接元素添加到文件列表元素中
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
    xhr.send()
};