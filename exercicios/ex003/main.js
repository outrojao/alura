const lista = document.querySelectorAll('.teclado input[type=button]');

for(c = 0; c < lista.length; c++){
  const teclas = lista[c];
  const digitos = teclas.value;
  const tel = document.querySelector('input[type=tel]');
  
  teclas.onclick = function() {//função anonima
    tel.value = tel.value + digitos;  //havia travado somente nessa parte, eu não sabia como fazer para adicionar novos numeros ao inves do mesmo que foi selecionado sempre, ao inves de tel.value + digitos meu codigo estava somente digitos, faça a mudança caso queira entender o que eu fiz errado anteriormente. Dessa forma qu esta agora o codigo ira pegar o valor que ja foi digitado no campo e somar com o novo
  }
  
}

/*
    RESOLUÇÃO ALURA
    const listaDeTeclas = document.querySelectorAll('input[type=button]');
    const inputTel = document.querySelector('input[type=tel]');

    for (indice = 0; indice < listaDeTeclas.length; indice++) {

    const tecla = listaDeTeclas[indice];

    tecla.onclick = function () {
    inputTel.value = inputTel.value + tecla.value;
  }
}

    EXPLICAÇÃO:
    Primeiro, você precisa criar uma referência para receber a lista com todas as teclas do AluraFone e uma outra para capturar o input Digite seu telefone, que no caso do código foi const listaDeTeclas e const inputTel, respectivamente.
    O segundo passo é criar o laço de repetição for, que vai percorrer a lista de teclas, por esta razão, a condição do for é indice < listaDeTeclas.length, ou seja, enquanto o indice for menor que o tamanho de listaDeTeclas, executa um comando.
    Dentro do for, é necessário que se crie uma referência constante const tecla para que a cada iteração, receba o valor correspondente da tecla listaDeTeclas[indice].
    Após isto, adicione no onclick uma função anônima que receberá o valor do campo Digite seu telefone inputTel.value, e atribua a ela a soma entre o valor do campo Digite seu telefone e o valor da tecla clicada tecla.value, ficando inputTel.value = inputTel.value + tecla.value.

*/