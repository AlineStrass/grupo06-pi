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

        pedidos_id: { /* (manter _id?) */
            type: DataType.INTEGER
        },
        produtos_id: { /* (manter _id?) */
            type: DataType.INTEGER,
        }
    },
        {
            tableName: 'itensPedido',
            timestamps: false
        });

    ItemPedido.associate = (ListaDeModelos) => {
        ItemPedido.belongsTo(listaDeModelos.Pedido, {
            foreignKey: 'pedidos_id',
            as: 'pedidos'
        })
    };

    ItemPedido.associate = (ListaDeModelos) => {
        ItemPedido.belongsTo(listaDeModelos.Produto, {
            foreignKey: 'produtos_id',
            as: 'produtos'
        });

    };

    return ItemPedido;
}
