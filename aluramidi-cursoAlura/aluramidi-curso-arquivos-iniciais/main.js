function tocarPom(){
    document.querySelector('#som_tecla_pom').play();
}

let tecla_pom = document.querySelector('.tecla_pom');
tecla_pom.addEventListener('click', tocarPom)

function tocarClap(){
    document.querySelector('#som_tecla_clap').play();
}

let tecla_clap = document.querySelector('.tecla_clap');
tecla_clap.addEventListener('click', tocarClap)