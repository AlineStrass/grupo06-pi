const AdminAutenticacao = (req, res, next)=>{
    if("adminEncontrado" in req.session){
        next();
    }else{
        res.redirect("/admin/login")
    }
}

module.exports = AdminAutenticacao;