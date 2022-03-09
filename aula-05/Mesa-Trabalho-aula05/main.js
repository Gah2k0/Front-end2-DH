let bodyReference = document.querySelector('body');
let btn = document.querySelector('#btn')

function changeMode() {

    bodyReference.classList.toggle("dark")


    if(bodyReference.classList.contains("dark")) {
        btn.innerText = "Ativar Modo Light"
    } else {
        btn.innerText = "Ativar Modo Dark"
    }

}

