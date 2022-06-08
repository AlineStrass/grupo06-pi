const ProdutoController = {
    criarProduto: (req, res) => {
         res.send('Criando um produto');
    },
    deletarProduto:(req, res)=>{
const {id} = req.params;

res.send("Deletando o prodtudo com id: "+ id);
    }
}

module.exports = ProdutoController