function tocaSom (idTagAudio){ //cria uma função que irá tocar todos os audios afim de evitar a repetição do codigo, a escolha do som q deve ser tocado sera feito por parametros

    document.querySelector(idTagAudio).play();
}

const ListaDeTeclas = document.querySelectorAll('.tecla'); /* ao invés de capturarmos um elemento por vez, conseguimos pegar todos de uma só vez. Portanto isto facilitará a manipulação, reutilização e manutenção do nosso código para todos os elementos que recebem o mesmo tipo de função. */

for (c = 0; c < ListaDeTeclas.length; c++){
    ListaDeTeclas[c].onclick = tocaSom();
}