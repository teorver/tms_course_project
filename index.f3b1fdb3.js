// $(function () {
//     $(document).scroll(function () {
//         let $header = $("header");
//         let $header__container = $(".header__container");
//         $header.toggleClass('scrolled', $(this).scrollTop() > $header.height());
//         $header__container.toggleClass('scrolled-border', $(this).scrollTop() > $header.height());
//     });
// });
document.addEventListener("DOMContentLoaded",function(){let e=document.querySelector("header"),d=document.querySelector(".header__container");document.addEventListener("scroll",function(){window.scrollY>e.offsetHeight?(e.classList.add("scrolled"),d.classList.add("scrolled-border")):(e.classList.remove("scrolled"),d.classList.remove("scrolled-border"))})});