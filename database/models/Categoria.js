module.exports = (sequelize, DataType) =>{
    const Categoria = sequelize.define('Categoria', {
   id: {
               type:DataType.INTEGER,
               primaryKey: true,
               autoIncrement: true
   },
   categoria:DataType.STRING,
   
    })
   }
   
   tableName = 'categoria',
   timestamp = false