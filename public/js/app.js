let botaoComprar = document.querySelector('.botao-produto-interno').addEventListener("click", function(){
    let nomeProduto = document.getElementById('nomeProduto').innerText
    let precoProduto = document.getElementById('price').innerText
    console.log(nomeProduto, precoProduto)
    
    // localStorage.clear();
    localStorage.setItem(nomeProduto,precoProduto) 



});



