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
        clientes_id:{
            type:DataType.INTEGER,

    },
},{   
    
        tableName : 'pedidos',
        timestamps : false
    
});

    Pedido.associate = (listaDeModelos) => {
        Pedido.belongsTo(listaDeModelos.Cliente, {
            foreignKey : 'clientes_id', 
            as:'clientes'
    })
    
        Pedido.hasMany(listaDeModelos.ItemPedido, {
            foreignKey: 'pedidos_id',
            as: "ItemPedido"
    })
    }
        
    return Pedido;
    
    }