const { Admin } = require('../database/models/Admin');

const AdminController = {
    index: (req, res) => {
        return res.render('admin')
    },
    getAdmin: async (req, res) => {
        let admins = await Admin.findAll()

        console.log(admins)
    }

}

module.exports = AdminController;