const   hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu'),
        close = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

close.addEventListener('click', () => {
    menu.classList.remove('active');
});

const   persents = document.querySelectorAll('.skills__percent-percents'),
        indicators = document.querySelectorAll('.skills__percent-indicator span');
// console.log(persents);
// console.log(indicators);

persents.forEach( (item, i) => {
    console.log(item)
    console.log(i)
    console.log(indicators[i])
    indicators[i].style.width = item.innerHTML;
});