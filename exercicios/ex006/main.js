const button = document.querySelector('#calcular')
const exibeResultado = document.querySelector('.resultado')
button.addEventListener('click', () => {
    exibeResultado.innerHTML = 'Fui clicado'
})

// RESOLUÇÃO ALURA
// const elemento = document.querySelector("#calcular");
// const resultado = document.querySelector(".resultado");

// elemento.addEventListener("click", (evento) => {
//   resultado.innerHTML = "Fui clicado"
// })

//antes eu so tinha colocado para escrever 'Fui clicado' no console.log pq o exercicio não disse onde ele queria que a mensagme fosse escrita, so disse que queria que ela fosse exibida, então quando vi a resposta do instrutor para ver se a minha estava correta vi essa mudança em relação onde a mensagem foi exibida e alterei