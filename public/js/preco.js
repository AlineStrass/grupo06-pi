let preco = document.getElementById('precoProduto');
// const valor = preco

let formatar = new Intl.NumberFormat('pt-BR', {
    style: "currency", 
    currency: 'BRL',
    minimumFractionDigits: 2
});

preco.innerHTML = formatar.format(preco);

console.log("oi")
console.log("aqui preço:", preco)
// console.log("aqui preço:", valor)


/* <script type="text/javascript" src="/js/preco.js"></script> */
// toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})