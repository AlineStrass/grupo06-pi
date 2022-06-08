module.exports = (sequelize, DataType) => {
    const Pedido = sequelize.define('Pedido', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        data: DataType.DATE,
        status: DataType.STRING,
        clientes_id: DataType.INTEGER,
        clientes_id:{ /* (manter _id?) */
            type:DataType.INTEGER,

    },
},{   
    
        tableName : 'pedidos',
        timestamps : false
    
});

    Pedido.associate = (ListaDeModelos) => {
        Pedido.belongsTo(listaDeModelos.Cliente, {
            foreignKey : 'clientes_id', /* (manter _id?) */
            as:'clientes'
        })
    }
    return Pedido;
    
    };