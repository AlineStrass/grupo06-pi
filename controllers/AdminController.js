/*const db = require('../database/models/index.js'); ----- Error: Cannot find module '../config/database' */
const AdminController = {
    index: (req, res) => {
        return res.render('admin')
    }
}

module.exports = AdminController;

