function carrinho () {
    
    const chaves = Object.keys(localStorage);

    console.log("valores das chavess:", chaves)
    const tamanhoArray = chaves.length
    console.log(tamanhoArray)

    let chavesValores = [];
    for (let i=0; i < chaves.length; i++){
        let chave = chaves[i]
        console.log("chave:", chave)
        valorParaConversao = (localStorage.getItem(chave))
        valor = parseFloat(valorParaConversao.replace(",", ".").replace("R$", "")).toFixed(2);
        quantidade = 3;
        totalDoItem = valor * quantidade
        console.log("total dos itens inicio:", typeof(totalDoItem), totalDoItem)
        chavesValores.push({chave,valor, quantidade, totalDoItem})
    }
    console.log("chave e valores do for:", chavesValores)

    let tabela = document.getElementById('infosProdutos');
    

    for(let i = 0; i < chavesValores.length; i++){
        let tr = document.createElement('tr');
        tabela.appendChild(tr);

        let thChave = document.createElement('th');
        thChave.innerHTML=chavesValores[i].chave;

        let thValor = document.createElement('th');
        thValor.innerHTML=chavesValores[i].valor;

        let quantidadeItens = document.createElement('th')
        quantidadeItens.innerHTML = chavesValores[i].quantidade;
        quantidadeItens.id = "qnt" + i

        let botaoMenos = document.createElement('button');
        botaoMenos.innerHTML = "-";
        botaoMenos.style.width = "20px";
        botaoMenos.addEventListener("click", function(){
            let qnt = chavesValores[i].quantidade;
            if(qnt >= 0){
                chavesValores[i].quantidade = qnt - 1
                console.log("botão menos chaves valores:::",chavesValores)
                let idQnt = "qnt" + i;
                let alteraQnt = document.getElementById(idQnt);
                alteraQnt.innerHTML = chavesValores[i].quantidade;

                let tt = chavesValores[i].totalDoItem;
                chavesValores[i].totalDoItem = tt - chavesValores[i].valor;
                let idTotal = "totalItem" + i;
                let alteraTotal = document.getElementById(idTotal);
                alteraTotal.innerHTML = chavesValores[i].totalDoItem;
            }
        })



        let botaoMais = document.createElement('button');
        botaoMais.innerHTML = "+";
        botaoMais.style.width = "20px";
        

        let totalItem = document.createElement('th');
        totalItem.id = "totalItem" + i
        totalItem.innerHTML = chavesValores[i].totalDoItem;

        tr.appendChild(thChave);
        tr.appendChild(thValor);
        tr.appendChild(quantidadeItens);
        tr.appendChild(botaoMenos);
        tr.appendChild(botaoMais);
        tr.appendChild(totalItem);

    }

    


    let somaCarrinho = 0;

    for(let i=0; i< chavesValores.length; i++){
        let subtotal = chavesValores[i].totalDoItem;
        console.log("valor:", typeof(subtotal), subtotal)  
        console.log("somaCarrinho:", somaCarrinho)

        somaCarrinho += subtotal
    }

    let tr = document.createElement('tr');
    tabela.appendChild(tr);

    let total = document.createElement('th');
    total.innerHTML="Total: ";

    let soma = document.createElement('th');
    soma.innerHTML = somaCarrinho.toFixed(2);

    tr.appendChild(total);
    tr.appendChild(soma);
    console.log("soma:",somaCarrinho)
}

// .toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})