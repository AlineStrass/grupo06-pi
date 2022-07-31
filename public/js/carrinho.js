function carrinho() {
    const chaves = Object.keys(localStorage);

    console.log("valores das chavess:", chaves)
    const tamanhoArray = chaves.length
    console.log(tamanhoArray)

    let chavesValores = [];
    for (let i = 0; i < chaves.length; i++) {
        let chave = chaves[i]
        console.log("chave:", chave)
        valorStorage = (localStorage.getItem(chave))
        valorParaConversao = valorStorage.replace(",", ".").replace("R$", "");
        valor = parseFloat(valorParaConversao)
        console.log("type of do valor individual:", typeof (valor), valor)
        quantidade = 1;
        totalDoItem = valor * quantidade
        console.log("total dos itens inicio:", typeof (totalDoItem), totalDoItem)
        chavesValores.push({ chave, valor, quantidade, totalDoItem })
    }
    console.log("chave e valores do for:", chavesValores)

    let tabela = document.getElementById('infosProdutos');

    for (let i = 0; i < chavesValores.length; i++) {
        let tr = document.createElement('tr');
        tabela.appendChild(tr);

        let thChave = document.createElement('th');
        thChave.innerHTML = chavesValores[i].chave;
        thChave.setAttribute("name", "nomeProduto");

        let thValor = document.createElement('th');
        let formatarValor = chavesValores[i].valor;
        thValor.innerHTML = "R$ " + formatarValor.toFixed(2);
        thValor.setAttribute("name", "valor");
       
        let quantidadeItens = document.createElement('th')
        quantidadeItens.innerHTML = chavesValores[i].quantidade;
        quantidadeItens.id = "qnt" + i;
        quantidadeItens.setAttribute("name", "quantidade");

        let botaoMenos = document.createElement('button');
        botaoMenos.innerHTML = "-";
        botaoMenos.style.width = "20px";
        botaoMenos.addEventListener("click", function () {
            let qnt = chavesValores[i].quantidade;
            if (qnt >= 1) {
                //faz o calculo de diminuir a quantidade no array
                chavesValores[i].quantidade = qnt - 1
                console.log("botão menos chaves valores:::", chavesValores)
                let idQnt = "qnt" + i;

                //modifica na tela o valor da quantidade
                let alteraQnt = document.getElementById(idQnt);
                alteraQnt.innerHTML = chavesValores[i].quantidade;

                //modifica na tela o valor do total do item
                let tt = chavesValores[i].totalDoItem;
                chavesValores[i].totalDoItem = tt - chavesValores[i].valor;
                let idTotal = "totalItem" + i;
                //resultado do total com a diminuição de 1 unidade
                let alteraTotal = document.getElementById(idTotal);
                let formataDiminuir = chavesValores[i].totalDoItem;
                alteraTotal.innerHTML = "R$ " + formataDiminuir.toFixed(2)

                somaTotalCarrinho()
            }
        })

        let botaoMais = document.createElement('button');
        botaoMais.innerHTML = "+";
        botaoMais.style.width = "20px";
        botaoMais.addEventListener("click", function () {
            let qnt = chavesValores[i].quantidade;
            console.log("tyoeof do + :", typeof (qnt), qnt)

            //faz o calculo de somar a quantidade no array
            chavesValores[i].quantidade = qnt + 1;
            console.log("botão mais chaves valores:::", chavesValores)
            let idQnt = "qnt" + i;

            //modifica na tela o valor da quantidade
            let alteraQnt = document.getElementById(idQnt);
            alteraQnt.innerHTML = chavesValores[i].quantidade;

            //modifica na tela o valor do total do item
            let tt = chavesValores[i].totalDoItem;
            chavesValores[i].totalDoItem = tt + chavesValores[i].valor;
            let idTotal = "totalItem" + i;
            //resultado do total com a diminuição de 1 unidade
            let alteraTotal = document.getElementById(idTotal);
            let formataSomar = chavesValores[i].totalDoItem;
            alteraTotal.innerHTML = "R$ " + formataSomar.toFixed(2);

            somaTotalCarrinho()
        })


        let totalItem = document.createElement('th');
        totalItem.id = "totalItem" + i;
        let formataValor = chavesValores[i].totalDoItem;
        totalItem.innerHTML = "R$ " + formataValor.toFixed(2);
        totalItem.setAttribute("name", "totalItem");
        

        tr.appendChild(thChave);
        tr.appendChild(thValor);
        tr.appendChild(quantidadeItens);
        tr.appendChild(botaoMenos);
        tr.appendChild(botaoMais);
        tr.appendChild(totalItem);

    }

    function somaTotalCarrinho() {

        let somaCarrinho = 0;

        for (let i = 0; i < chavesValores.length; i++) {
            let subtotal = chavesValores[i].totalDoItem;
            console.log("valor:", typeof (subtotal), subtotal)
            console.log("somaCarrinho:", somaCarrinho)

            somaCarrinho += subtotal
        }

        let totalGeralCarrinho = document.querySelector('.totalGeralCarrinho');
        totalGeralCarrinho.innerHTML = "R$ " + somaCarrinho.toFixed(2)
        totalGeralCarrinho.setAttribute("name", "totalGeralCarrinho");


        // let tr = document.createElement('tr');
        // tabela.appendChild(tr);

        // let total = document.createElement('th');
        // total.innerHTML = "Total: ";

        // let soma = document.createElement('th');
        // soma.innerHTML = somaCarrinho.toFixed(2);

        // tr.appendChild(total);
        // tr.appendChild(soma);
        console.log("soma:", somaCarrinho)
    }
    somaTotalCarrinho()

    
    let finalizarCompra = document.getElementById('finalizarCompra').addEventListener("click", function () {
        console.log('clicou')
        console.log("aqui o finalzer carrinho", chavesValores)
        let settings = {
            "method": "POST",
            "headers": {"content-type": "application/JSON"},
            "body": JSON.stringify(chavesValores)
        }
        fetch("http://localhost:3300/salvaCompra", settings)
            .then((response)=>{
                return response.json()
            })
            .then((informacoes)=>{
                console.log("aqui as informações",informacoes)
            })

            localStorage.clear();
    })

}

// .toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})