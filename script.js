function habilita1() {
    document.getElementById("frente").disabled = false;
}
function habilita2() {
    document.getElementById("tras").disabled = false;
}
function frente() {
    document.getElementById("frente").disabled = true;

    const items = document.querySelector('.box');
    items.scrollBy(305, 0);
    
    setTimeout(habilita1, 500);
}
function tras() {
    document.getElementById("tras").disabled = true;

    const items = document.querySelector('.box');
    items.scrollBy(-305, 0);

    setTimeout(habilita2, 500);
}