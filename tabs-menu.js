$(function() {
    $(".tabmenu1 li").click(function() {
        var num = $(".tabmenu1 li").index(this);
        $(".tabContent1").removeClass('active');
        $(".tabContent1").eq(num).addClass('active');
        $(".tabmenu1 li").removeClass('active');
        $(this).addClass('active')
    });
});
$(function() {
    $(".tabmenu2 li").click(function() {
        var num = $(".tabmenu2 li").index(this);
        $(".tabContent2").removeClass('active');
        $(".tabContent2").eq(num).addClass('active');
        $(".tabmenu2 li").removeClass('active');
        $(this).addClass('active')
    });
});
$(function() {
    $(".tabmenu3 li").click(function() {
        var num = $(".tabmenu3 li").index(this);
        $(".tabContent3").removeClass('active');
        $(".tabContent3").eq(num).addClass('active');
        $(".tabmenu3 li").removeClass('active');
        $(this).addClass('active')
    });
});
$(function() {
    $(".tabmenu4 li").click(function() {
        var num = $(".tabmenu4 li").index(this);
        $(".tabContent4").removeClass('active');
        $(".tabContent4").eq(num).addClass('active');
        $(".tabmenu4 li").removeClass('active');
        $(this).addClass('active')
    });
});
$(function() {
    $(".tabmenu5 li").click(function() {
        var num = $(".tabmenu5 li").index(this);
        $(".tabContent5").removeClass('active');
        $(".tabContent5").eq(num).addClass('active');
        $(".tabmenu5 li").removeClass('active');
        $(this).addClass('active')
    });
});
