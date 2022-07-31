const AdminAutenticacao = (req, res, next)=>{
    // if("adminEncontrado" in req.session){
    //     next();
    if ("logado" in req.session && req.session.logado != ""){
        next();
    }else{
        res.redirect("/admin/login")
    }
}


module.exports = AdminAutenticacao;