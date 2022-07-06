const db = require('../database/models'); 
const { Admin } = require('../database/models/Admin');


const AdminController = {
    index: (req, res) => {
        return res.render('admin/admin')
    },
    
    adminLogin: (req, res) => {
        return res.render('admin/adminLogin')
    },

    adminProdutos: (req, res) => {
        return res.render('admin/adminProdutos')
    },

    adminUsuarios: (req, res) => { 
        return res.render('admin/adminUsuarios')
    },


    /*getAdmin: async req, res => 
        let admins = await Admin.findAll

        console.logadmins
        //deveria aparecer no terminal os dados cadastrados na tabela, mas dá erro
    */

}

module.exports = AdminController;
