module.exports = (sequelize, DataType) =>{
    const Pedido= sequelize.define('Pedido', {
   id: {
               type:DataType.INTEGER,
               primaryKey: true,
               autoIncrement: true
   },
   data:DataType.DATE,
   status:DataType.STRING,
   clientes_id:DataType.INTEGER,
    })
   }
   
   tableName = 'pedido',
   timestamp = false