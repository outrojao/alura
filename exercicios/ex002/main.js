const listaTeclado = document.querySelectorAll('.teclado input[type=button]');
for(c = 0; c < listaTeclado.length; c++){
 console.log(listaTeclado[c].value); 
}

/* na minha solução eu coloquei o metodo .value pra exibir os valores das teclas pq pensei que era isso q o exercicio pedia, mas na real ele só queria q fosse exibido os elementos da lista mesmo, de qualquer for o meu ficou melhor */

/*
const listaDeTeclas = document.querySelectorAll('input[type=button]');
console.log(listaDeTeclas);

solução da alura 
*/