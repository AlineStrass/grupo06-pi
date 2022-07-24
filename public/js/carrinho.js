function carrinho () {
    // var paragrafo = document.querySelector("#viewSessionSotorage");
    // paragrafo.textContent =  localStorage.getItem('valueText');
    const chaves = Object.keys(localStorage);

    console.log("valores das chavess:", chaves)
    const tamanhoArray = chaves.length
    console.log(tamanhoArray)

    let chavesValores = [];
    for (let i=0; i < chaves.length; i++){
        let chave = chaves[i]
        console.log("chave:", chave)
        valor = (localStorage.getItem(chave))
        chavesValores.push({chave,valor})
    }
    console.log("chave e valores do for:", chavesValores)


    let tabela = document.getElementById('infosProdutos');
    
    for(let i = 0; i < chavesValores.length; i++){
        console.log(i)
        console.log("chave:", chavesValores[i].chave)
        console.log("valor:", chavesValores[i].valor)
        let tr = document.createElement('tr');
        tabela.appendChild(tr);

        let thChave = document.createElement('th');
        thChave.innerHTML=chavesValores[i].chave;

        let thValor = document.createElement('th');
        thValor.innerHTML=chavesValores[i].valor;
        
        tr.appendChild(thChave);
        tr.appendChild(thValor);
    }
}