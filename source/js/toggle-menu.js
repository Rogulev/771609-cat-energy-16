var toggleMain = document.querySelector('.toggle-menu');
var navigation = document.querySelector('.main-nav');

toggleMain.classList.remove('toggle-menu--nojs');

toggleMain.addEventListener('click', function() {
toggleMain.classList.toggle('toggle-menu--opened');
navigation.classList.toggle('main-nav--opened');
});
