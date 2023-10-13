let lastScroll = 0;
const header = document.querySelector('.header-section');
const main = document.getElementsByClassName('main');

// const scrollPosition = () => window.pageY || document.documentElement.scrollTo();

window.addEventListener('scroll', () => {
    let scrollPosition = () => window.pageY;
    let containHide = () => header.classList.contains('hide');

    if (scrollPosition > lastScroll && !containHide) {
        header.classList.add('hide');
        header.style.backgroundColor = '#2c3154'
    } else if (scrollPosition < lastScroll && containHide) {
        header.classList.remove('hide');
        header.style.backgroundColor = '#2c3154'
    }

    lastScroll = scrollPosition();
});