const db = require('../database/models');


const CarrinhoController = {
    index: (req, res) => {
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
        return res.render('carrinho')
    },




    finalizar: (req, res) => {
        return res.render('finalizar')
    },
    obrigado: (req, res) => {
        return res.render('obrigado')
    }

}

module.exports = CarrinhoController;