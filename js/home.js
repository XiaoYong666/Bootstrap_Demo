$(function () {
    $("#navbar-list .dropdown-menu a").click(function () {
        var href = $(this).attr("href");
        $("#tab-list a[href='" + href + "']").tab("show");
    });

    $("#about").click(function () {
        //视频
        // layer.open({
        //     type: 2,
        //     title: false,
        //     area: ['630px', '360px'],
        //     shade: 0.8,
        //     closeBtn: 0,
        //     shadeClose: true,
        //     content: '//player.youku.com/embed/XMjY3MzgzODg0'
        // });

        layer.open({
            type: 1,
            title: false,
            closeBtn: 0,
            area: ['auto'],
            skin: 'layui-layer-nobg', //没有背景色
            shadeClose: true,
            content: $('#self')
          });
    });
})