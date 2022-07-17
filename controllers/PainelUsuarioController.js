const db = require('../database/models');

const PainelUsuarioController = {
    index: async (req, res) => {
        if (req.session.logado === true) {
            const detalhesCliente = await db.Cliente.findByPk(req.session.idUsuario, { include: ["enderecos"] });
            res.render('painelUsuario', { Cliente: detalhesCliente })
        } else {
            res.render('login')
        }
    },

    //página com erro - não está funcionando
    editarCadastro: async (req, res) =>{
        const { id } = req.params;
        if (req.session.logado === true) {
        // const cliente = await db.Cliente.findByPk(id)
        const cliente = await db.Cliente.findByPk(req.session.idUsuario, { include: ["enderecos"] });
        console.log(cliente)
        res.render('editarPainelUsuario', { cliente })
        }else{
            console.log("erro")
        }
    },
    
    // não testei pq a edtar cadastr não stá funcionando
    // acaoEditarCadastro: async (req, res) => {
    //     const { id } = req.params;
    //     const { nomeCompleto, email, telefone, cep, rua, numero, complemento, bairro, cidade, estado } = req.body;
    //     const { senha } = bcrypt.hashSync(req.body.senha);
    //     const resultado = await db.Cliente.update({
    //         nomeCompleto,
    //         email,
    //         telefone,
    //         senha,
    //         cep,
    //         rua,
    //         numero,
    //         complemento,
    //         bairro,
    //         cidade,
    //         estado
    //     },
    //         {
    //             where: { id: id }
    //         })
    //     console.log(resultado)
    //     // mostra [1] para ok e [0] para erro
    //     res.redirect('/painelUsuario')
    // },

    //não esta deletando por causa do vinculo com a tabela de endereços
    deletarCadastro: async (req, res) => {
        const {id} = req.params;
        const resultado = await db.Cliente.destroy(
            { where:{id: id}        },
            {onDelete: 'CASCADE'},
            { include: ["enderecos"] },
        )
        console.log(resultado)
        res.redirect('/')
    
    },
}


module.exports = PainelUsuarioController;