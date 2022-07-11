
let botaoComprar = document.querySelector('.botao-produto-interno').addEventListener("click", function(){
    let nomeProduto = document.getElementById('nomeProduto').innerText
    let precoProduto = document.getElementById('price').innerText
    //localStorage.clear();
    console.log(nomeProduto, precoProduto)

    localStorage.setItem(nomeProduto,precoProduto) 
    //localStorage.setItem("Latinha","50,00")
    


    //carrinho
    const keys = Object.keys(localStorage);
    console.log("array com todas as chaves:",keys);
    const key0 = keys[0];
    const testeBuscarProduto0 = localStorage.getItem(key0);
    console.log('valores:', values)
    console.log("chave:", key0, "valor:", testeBuscarProduto0)
    //depois fazer um for dentro da pg carrinho, percorrendo as chaves e buscando os valores
});

