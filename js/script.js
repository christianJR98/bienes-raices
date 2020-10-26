const opcionesNavbar = document.getElementById('navegacion')
const imgMovil = document.getElementById('barras-mobile')


imgMovil.addEventListener('click',()=>{
    opcionesNavbar.classList.toggle('mostrar');
})