module.exports = (sequelize, DataType) =>{
    const Cliente = sequelize.define('Cliente', {
   id: {
               type:DataType.INTEGER,
               primaryKey: true,
               autoIncrement: true
   },
   nomeCompleto:{
       type: DataType.STRING,
       allowNull: true,
   },
   foto:DataType.STRING,

   email: {
       type:DataType.STRING,
       allowNull: true,
   },
   telefone: {
       type:DataType.STRING,
       allowNull: true,
   },
   sexo:DataType.STRING,
   
   dataDeNascimento: {
       type:DataType.DATE,
       allowNull: true,
   },
   cpf: {
       type:DataType.STRING,
       allowNull: true,
   },
   senha: {
       type:DataType.STRING,
       allowNull: true,
    }})
   }
   
   tableName = 'cliente',
   timestamp = false