const fs = require('fs')

function logSite(req, res, next){
    fs.appendFileSync('log.txt', "O usuario entrtou na url: " + req.url)

    next();

}

module.exports = logSite