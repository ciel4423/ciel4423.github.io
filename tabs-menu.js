$(function() {
    $("ul[class^=tabmenu] li").click(function() {
        var num = $("ul[class^=tabmenu] li").index(this);
        $("div[class^=tabContent]").removeClass('active');
        $("div[class^=tabContent]").eq(num).addClass('active');
        $("ul[class^=tabmenu] li").removeClass('active');
        $(this).addClass('active')
    });
});
