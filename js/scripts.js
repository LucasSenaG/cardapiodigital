function abreMenu(){
    const menu = document.querySelector('.opcoes');
    const abreMenu = document.querySelector('#menu');
    const fechamenu = document.querySelector('#fechamenu');
    menu.style.display = "flex";
    abreMenu.style.display = "none";
    fechamenu.style.display = "flex";
}

function fechaMenu(){
    const menu = document.querySelector('.opcoes');
    const abreMenu = document.querySelector('#menu');
    const fechamenu = document.querySelector('#fechamenu');
    menu.style.display = "none";
    abreMenu.style.display = "flex";
    fechamenu.style.display = "none";
}