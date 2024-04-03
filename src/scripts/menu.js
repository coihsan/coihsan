const openNavbar = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');
const active = 'active'

openNavbar.addEventListener('click', function(){
    if (openNavbar.checked){
        navbar.classList.add(active)
        console.log('clicked')
    } else{
        navbar.classList.remove(active)
    }
})