$(function() {
    $("[class^=tabmenu] li").click(function() {
        var num = $("[class^=tabmenu] li").index(this);
        $("[class^=tabContent]").removeClass('active');
        $("[class^=tabContent]").eq(num).addClass('active');
        $("[class^=tabmenu] li").removeClass('active');
        $(this).addClass('active')
    });
});
