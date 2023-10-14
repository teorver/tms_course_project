$(function () {
    $(document).scroll(function () {
        let $header = $("header");
        let $header__container = $(".header__container");
        $header.toggleClass('scrolled', $(this).scrollTop() > $header.height());
        $header__container.toggleClass('scrolled-border', $(this).scrollTop() > $header.height());
    });
});