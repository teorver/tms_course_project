// $(function () {
//     $(document).scroll(function () {
//         let $header = $("header");
//         let $header__container = $(".header__container");
//         $header.toggleClass('scrolled', $(this).scrollTop() > $header.height());
//         $header__container.toggleClass('scrolled-border', $(this).scrollTop() > $header.height());
//     });
// });

document.addEventListener('DOMContentLoaded', function () {
    let header = document.querySelector('header');
    let headerContainer = document.querySelector('.header__container');

    document.addEventListener('scroll', function () {
        let scrollPosition = window.scrollY;
        let headerHeight = header.offsetHeight;

        if (scrollPosition > headerHeight) {
            header.classList.add('scrolled');
            headerContainer.classList.add('scrolled-border');
        } else {
            header.classList.remove('scrolled');
            headerContainer.classList.remove('scrolled-border');
        }
    });
});