const controle = document.querySelectorAll('[data-controle]')
const estatisticas = document.querySelectorAll('[data-estatistica]')
const button = document.querySelector('#cor')
const img = document.querySelector('.robo')
const cores = document.querySelector('#select_cor')
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}


controle.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode) //toda vez que um input é o value e quando é texto é o textContent
        atualizaEstatisticas(evento.target.dataset.peca)
    })
})

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector('[data-contador]')

    if(operacao === '-'){
        peca.value = Number(peca.value) - 1
    } else {
        peca.value = Number(peca.value) + 1
    }
}

function atualizaEstatisticas(peca){
    estatisticas.forEach ((elemento) => {
        elemento.textContent = Number(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
}

cores.onchange = function() {
    let cor = cores.value;
  
    switch(cor) {
        case 'Preto':
        img.src = 'img/Robotron 2000 - Preto.png'
        break;
        case 'Amarelo':
        img.src = 'img/Robotron 2000 - Amarelo.png'
        break;
        case 'Branco':
        img.src = 'img/Robotron 2000 - Branco.png'
        break;
        case 'Azul':
        img.src = 'img/Robotron 2000 - Azul.png'
        break;
        case 'Rosa':
        img.src = 'img/Robotron 2000 - Rosa.png'
        break;
        case 'Vermelho':
        img.src = 'img/Robotron 2000 - Vermelhopng'
        break;
    }
  }



//ao inves de criar um botão para cada cor, o que seria mais trabalhoso, eu posso criar um botão que sempre ao ser clicado mude a cor do robotron mas por enquanto não sei como fazer, talvez como a mesma logica do projeto do soundpad da alura ou algo semelhante