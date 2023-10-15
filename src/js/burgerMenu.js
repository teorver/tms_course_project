// $(document).ready(function(){
//     $('.burger-menu').click(function(){
//         $('.navigation').toggleClass('active');
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
    let burgerMenu = document.querySelector('.burger-menu');
    let navigation = document.querySelector('.navigation');

    burgerMenu.addEventListener('click', function() {
        navigation.classList.toggle('active');
    });
});