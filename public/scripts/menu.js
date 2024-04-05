const openNavbar = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');
const navlink = document.querySelector('.navlink')
const active = 'active'

openNavbar.addEventListener('click', function(){
    if (openNavbar.checked){
        navbar.classList.add(active);
        if(navlink) {
            navlink.classList.add(active);
        }
    } else {
        navbar.classList.remove(active);
        if(navlink) {
            navlink.classList.remove(active);
        }
    }
});