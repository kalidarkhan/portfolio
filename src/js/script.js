const   hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu'),
        close = document.querySelector('.menu__close');
        // block = document.querySelector('.menu__block');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

close.addEventListener('click', () => {
    menu.classList.remove('active');
});

// function onClickClose(block) { // вызвать в момент показа окна, где elem - окно
//     function outsideClickListener(event) {
//         if (!elem.contains(event.target) && isVisible(block)) {  // проверяем, что клик не по элементу и элемент виден
//             //  elem.style.display = 'none'; //скрыть
//              menu.classList.remove('active');
//              document.removeEventListener('click', outsideClickListener);
//         }
//     }
//     document.addEventListener('click', outsideClickListener)
// }

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