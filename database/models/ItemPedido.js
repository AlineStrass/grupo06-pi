const Pedido = require("./Pedido");

module.exports = (sequelize, DataType) => {
    const ItemPedido = sequelize.define('ItemPedido', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        quantidade: DataType.INTEGER,
        valor: DataType.FLOAT,
        produtos_id: DataType.INTEGER,
        pedidos_id: DataType.INTEGER,
        
        pedidos_id:{ /* (manter _id?) */
            type:DataType.INTEGER},
        
        produtos_id:{ /* (manter _id?) */
            type:DataType.INTEGER,}
    },
    {   
    
        tableName : 'itensPedido',
        timestamps : false
    
});

Pedido.associate = (ListaDeModelos) => {
    Pedido.belongsTo(listaDeModelos.Pedido, {
        foreignKey : 'pedidos_id', /* (manter _id?) */
        as:'pedidos'
})};

Produto.associate = (ListaDeModelos) => {
        Produto.belongsTo(listaDeModelos.Produto, {
            foreignKey : 'produtos_id', /* (manter _id?) */
            as:'produtos'
        });
    

return ItemPedido;

};

}
