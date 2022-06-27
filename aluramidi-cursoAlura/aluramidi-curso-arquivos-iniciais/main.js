function tocaSom (idTagAudio){ //cria uma função que irá tocar todos os audios afim de evitar a repetição do codigo, a escolha do som q deve ser tocado sera feito por parametros
    document.querySelector(idTagAudio).play();
}

const ListaDeTeclas = document.querySelectorAll('.tecla'); /* ao invés de capturarmos um elemento por vez, conseguimos pegar todos de uma só vez. Portanto isto facilitará a manipulação, reutilização e manutenção do nosso código para todos os elementos que recebem o mesmo tipo de função. */

for (c = 0; c < ListaDeTeclas.length; c++){

    const tecla = ListaDeTeclas[c]; //constante criada afim de evitar a repetiçaõ de sintaxe
    const som = tecla.classList[1]; //pegamos a segunda class de cada elemento para utiliza em junção com a tag de id
    const idAudio = `#som_${som}`; //#som_xxxxx_xxx

    //exibição
    /*
    console.log(c);
    console.log(idAudio);
    */
    
    tecla.onclick = function (){ //função anônima
        tocaSom(idAudio); 
        //ja sabia a parte do template string antes do video :))
    } 

    tecla.onkeydown = function (){
        tecla.classList.add('ativa');
    }

    tecla.onkeyup = function (){
        tecla.classList.remove('ativa');
    }

}

//fiz o for bem no inicio onde o curso dizia que iria usar um loop