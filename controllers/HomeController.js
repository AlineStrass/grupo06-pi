/*const db = require('./database/models/index.js'); */

const HomeController = {
    index: (req, res) => {
        return res.render('home')
    }
}

module.exports = HomeController;