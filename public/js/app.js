

let botaoComprar = document.querySelector('.botao-produto-interno').addEventListener("click", function(){
    let nomeProduto = document.getElementById('nomeProduto').innerText
    let precoProduto = document.getElementById('price').innerText
    console.log(nomeProduto, precoProduto)
    
    localStorage.clear();
    localStorage.setItem(nomeProduto,precoProduto) 

    localStorage.setItem("Latinha","50.00")

    // const chaves = Object.keys(localStorage);

    // console.log("valores das chavess:", chaves)
    // const tamanhoArray = chaves.length
    // console.log(tamanhoArray)

    // let chavesValores = [];
    // for (let i=0; i < chaves.length; i++){
    //     let chave = chaves[i]
    //     console.log("chave:", chave)
    //     valor = (localStorage.getItem(chave))
    //     chavesValores.push({chave,valor})
    // }
    // console.log("chave e valores do for:", chavesValores)




    
});



