let tituloReference = document.querySelector('#titulo');
let descricaoReference = document.querySelector('#descricao');
let precoReference = document.querySelector('#preco');
let imgUrlReference = document.querySelector('#imgUrl');
let containerReference = document.querySelector('.container');
let btnReference = document.querySelector('#envia');


let itens = []


btnReference.addEventListener('click', function() {
    if(tituloReference.value === '') return alert("Por favor, preencha todos os campos!")
    else if(descricaoReference.value === '') return alert("Por favor, preencha todos os campos!")
    else if(precoReference.value === '') return alert("Por favor, preencha todos os campos!")
    else if(imgUrlReference.value === '') return alert("Por favor, preencha todos os campos!")

    if(window.confirm(`Criar o item ${tituloReference.value}?`)){
        let item = { 
            titulo: tituloReference.value,
            descricao: descricaoReference.value,
            preco: precoReference.value,
            img: imgUrlReference.value
            }

        itens.push(item)

        for(post of itens){
            containerReference.innerHTML +=    `
            <div class="item">
                <img src=${post.img}> 
                <div class="card-content">
                    <h2>${post.titulo}</h2>
                    <p>
                    ${post.descricao} 
                    </p>
                    <button class='btn-item'>R$ ${post.preco}</button>
                </div>
            </div> 
            `
            // -- Limpando o array de itens e os inputs --
            itens = []
            tituloReference.value = '';
            descricaoReference.value = '';
            precoReference.value = '';
            imgUrlReference.value = '';

        }

    }
})

btnReference.addEventListener("click", function(event){
    event.preventDefault()
  });



