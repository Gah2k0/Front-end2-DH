let inputNomeReference = document.querySelector("#nome");
let inputSobreNomeReference = document.querySelector("#sobrenome");
let submit = document.querySelector("button");
let divReference = document.querySelector("div");


// console.log(inputNomeReference, inputSobreNomeReference, submit, pReference);

submit.addEventListener("click", function(event){
    event.preventDefault()
})


submit.addEventListener("click", function() {
    let nome = inputNomeReference.value;
    let sobreNome = inputSobreNomeReference.value;
    let nomeCompleto = nome + " " + sobreNome;
    
    divReference.innerHTML = `<p>${nomeCompleto}<p>`;
    divReference.innerHTML += `<p>${nomeCompleto.trim()}<p>`;
    divReference.innerHTML += `<p>${nomeCompleto.toLowerCase()}<p>`;
    divReference.innerHTML += `<p>${nomeCompleto.toUpperCase()}<p>`;
    divReference.innerHTML += `<p>${nome.concat(sobreNome)}<p>`;
    divReference.innerHTML += `<p>${nomeCompleto.replace(/a/g, "@").replace(/e/g, "3")}<p>`;

})


