const menuBtn = document.querySelector('.menubtn')
const navLinks = document.querySelector('.navlinks')

menuBtn.addEventListener ('click', ()=>{
    navLinks.classList.toggle('activebtn');
})