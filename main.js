const pick = document.querySelectorAll('.submenu li a');


pick[1].addEventListener('mouseover', () => {
    pick[1].classList.add('pick');
});
pick[1].addEventListener('mouseout', () => {
    pick[1].classList.remove('pick');
});