posicao = 0
quantidadeImagem = document.querySelectorAll('.box .img-div')
primeiraImagem = document.getElementById('atual')
btnFrente = document.getElementById('frente')
btnTras = document.getElementById('tras')

size = primeiraImagem.offsetWidth;  

btnFrente.addEventListener('click', () => {
    posicao++
    slide()
})

btnTras.addEventListener('click', () => {
    posicao--
    slide()
})

function slide() {
    if (posicao >= quantidadeImagem.length) {
        posicao = 0
    } else if (posicao < 0) {
        posicao = quantidadeImagem.length-1
    }

    primeiraImagem.style.marginLeft = -size*posicao+'px'
}