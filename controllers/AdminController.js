//const { Admin } = require('../models');

const AdminController = {
    index: (req, res) => {
        return res.render('admin')
    },

}

module.exports = AdminController;