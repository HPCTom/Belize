const navbar = document.getElementById('navbar')

window.addEventListener('scroll',()=>{
    navbar.classList.toggle('header__sticky',window.scrollY > 0)
})

