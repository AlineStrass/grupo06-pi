const db = require('../database/models'); 

const HomeController = {
    index: (req, res) => {
        return res.render('home')
    }
}

module.exports = HomeController;