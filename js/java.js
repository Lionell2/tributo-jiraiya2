const menumobile = document.getElementById('menu-mobile')
function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    
}
menumobile.addEventListener('click', toggleMenu)