let navegacion = document.querySelectorAll('.nav_li-click');

navegacion.forEach( navegaciones =>{
    navegaciones.addEventListener('click', () =>{
        navegaciones.classList.toggle('mostrando');

        let height = 0;
        let menu = navegaciones.nextElementSibling;
        if(menu.clientHeight == "0"){
            height = menu.scrollHeight;
        }
        menu.style.height = `${height}px`;
    })
})

let usuarionav = document.querySelectorAll('.usuario_link-click');

usuarionav.forEach( usuarioelementos =>{
    usuarioelementos.addEventListener('click', () =>{
        usuarioelementos.classList.toggle('mostrar');

        let height = 0;
        let menu = usuarioelementos.nextElementSibling;
        if(menu.clientHeight == "0"){
            height = menu.scrollHeight;
        }
        menu.style.height = `${height}px`;
    })
})