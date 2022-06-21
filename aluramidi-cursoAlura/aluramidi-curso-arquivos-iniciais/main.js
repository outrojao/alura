function tocaPom(){
    let somPom = document.querySelector('#som_tecla_pom');
    somPom.play();
}

const ListaDeTeclas = document.querySelectorAll('.tecla'); /* ao invés de capturarmos um elemento por vez, conseguimos pegar todos de uma só vez. Portanto isto facilitará a manipulação, reutilização e manutenção do nosso código para todos os elementos que recebem o mesmo tipo de função. */

ListaDeTeclas[0].onclick = tocaPom;