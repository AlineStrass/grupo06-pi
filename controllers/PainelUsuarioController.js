const Sequelize = require('sequelize');
const config = require('../database/config/config');
const db = require('../database/models');
const bcrypt = require('bcryptjs');

const PainelUsuarioController = {
    index: async (req, res) => {
        if (req.session.logado === true) {
            const detalhesCliente = await db.Cliente.findByPk(req.session.idUsuario, { include: ["enderecos"]});
            res.render('painelUsuario', { Cliente: detalhesCliente })
        } else {
            res.render('login')
        }
    },

    //formulário de edição de cadastro
    editarCadastro: async (req, res) =>{
        const { id } = req.params;
        const cliente = await db.Cliente.findByPk(id, { include: ["enderecos"] });
       
        res.render('editarPainelUsuario', { 
            Cliente: cliente, 
        })
    },
    
    // função que salva as infos do cliente
    acaoEditarCadastro: async (req, res) => {
        const { id } = req.params;
        const { nomeCompleto, email, telefone, senha, cep, rua, numero, complemento, bairro, cidade, estado } = req.body;
        // console.log("aqui o ID:" , id)
        // console.log("senha:",senha)
        // console.log("infos cliente:", nomeCompleto, email, telefone, senha, cep, rua, numero, complemento, bairro, cidade, estado)
        const resultado = await db.Cliente.update(
            {
            nomeCompleto: nomeCompleto,
            email: email,
            telefone: telefone,
            senha: bcrypt.hashSync(req.body.senha),
        },
            {
                where: { id: id }
            },
        )
        const resultEndereco = await db.Endereco.update({ 
            cep: cep,
            rua: rua,
            numero: numero,
            complemento: complemento,
            bairro: bairro,
            cidade: cidade,
            estado: estado,
        },
            {
                where: { clientes_id: id }
            },
        )
        console.log(resultEndereco)
        console.log(resultado)
        // mostra [1] para ok e [0] para erro
        res.redirect('/painelUsuario')
    },

    //ação deletar cadastro de cliente
    deletarCadastro: async (req, res) => {
    console.log("entrou deletar cadastro")
        const {id} = req.params;

        await db.Endereco.destroy({where: {clientes_id: id}})
        // console.log("aqui é o id:", id)

        const resultado = await db.Cliente.destroy({ where:{id: id} })
        // console.log("aqui é o resultado:", resultado)
        req.session.logado = false
        res.redirect('/')
    },
}


module.exports = PainelUsuarioController;