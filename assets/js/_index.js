const menuIcono = document.querySelector('.icono');
const menuNavIcono = document.querySelector('.icono i');
const nav = document.querySelector('.nav')


menuIcono.addEventListener('click', () => {
    nav.classList.toggle('mostrar');
    if(nav.classList.contains('mostrar')){
        menuNavIcono.setAttribute('class','fa fa-times');
    }else{
        menuNavIcono.setAttribute('class','fa fa-bars');
    }
})