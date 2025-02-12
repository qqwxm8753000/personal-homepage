$(document).ready(function() {
    // 处理点击事件
    $("#nav a").on("click", function () {
        var position = $(this).parent().position();
        var width = $(this).parent().width();
        $("#nav .slide1").css({ opacity: 1, left: position.left, width: width });
    });

    // 处理鼠标悬停事件
    $("#nav a").on("mouseover", function () {
        var position = $(this).parent().position();
        var width = $(this).parent().width();
        $("#nav .slide2").css({ opacity: 1, left: position.left, width: width }).addClass("squeeze");
    });

    // 处理鼠标离开事件
    $("#nav a").on("mouseout", function () {
        $("#nav .slide2").css({ opacity: 0 }).removeClass("squeeze");
    });

    // 页面加载时为第三个导航项设置位置和宽度
    var currentWidth = $("#nav li:nth-of-type(3) a").parent("li").width();
    var current = $("li:nth-of-type(3) a").position();
    $("#nav .slide1").css({ left: current.left, width: currentWidth });
});
