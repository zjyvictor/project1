const menuButton = document.getElementById('menu-button');
const navigation = document.getElementById('navigation');

menuButton.addEventListener('click', e => {
    navigation.classList.toggle('open');
    menuButton.classList.toggle('active');
    e.stopPropagation();
})

document.addEventListener('click', () => {
    navigation.classList.remove('open');
    menuButton.classList.remove('active');
})