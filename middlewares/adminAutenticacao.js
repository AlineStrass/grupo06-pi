function AdminAutenticacao(req, res, next){
    if("usuarioAdmin" in req.session){
        next();
    }else{
        res.redirect("/admin/login")
    }
}

module.exports = AdminAutenticacao;