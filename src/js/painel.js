/*
    quando clicar na seta para avançar temos que esconder todas as imagens e mostrar a proxima imagem 
        
        a imagem atual comceça no 0 pq é a primeira imagem
        assim que for clicando na avançar eu preciso adicionar mais 1 ao contador de imagens para poder saber que agora eu vou mostrar a segunda imagem

        esconder todas as imagens
            pegar toadas as imagens usando o DOM (document do navegador) e romever a classe mostrar
        mostrar a proxima imagem 
            pegar todas imagens, decobrir qual é a proxima, e colocar a calsse mostrar nela
*/

const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');
let imagemAtual = 0; 

function esconderImagens(){
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar');
    })
}

setaAvancar.addEventListener('click', function() {
    
    const totalImagens = imagensPainel.length -1;
    if(imagemAtual === totalImagens -1){
        setaAvancar.classList.remove('mostrar-seta')
        setaAvancar.classList.add('esconder-seta')
    }

    if(imagemAtual === totalImagens) {
        return
    }
    
    imagemAtual++;

    esconderImagens()

    imagensPainel[imagemAtual].classList.add('mostrar');
    setaVoltar.classList.add('mostrar-seta')
})

setaVoltar.addEventListener('click', function() {
    if(imagemAtual === 1){
        setaVoltar.classList.remove('mostrar-seta')
        setaVoltar.classList.add('esconder-seta')
    }

    if(imagemAtual === 0){
        return
    }

    imagemAtual--;

    esconderImagens()

    imagensPainel[imagemAtual].classList.add('mostrar');
    setaAvancar.classList.add('mostrar-seta')
})