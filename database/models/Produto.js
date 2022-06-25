module.exports = (sequelize, DataType) => {
    const Produto = sequelize.define('Produto', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: DataType.STRING,
        preco: DataType.FLOAT,
        descricao: DataType.TEXT,
        foto: DataType.STRING,
        categorias_id: DataType.INTEGER,
        categorias_id: {
            type: DataType.INTEGER,
        }
    }, {
        tableName: 'produtos',
        timestamps: false
    });

    Produto.associate = (listaDeModelos) => {
        Produto.belongsTo(listaDeModelos.Categoria, {
            foreignKey: 'categorias_id',
            as: 'categoria'
        })
        Produto.hasMany(listaDeModelos.ItemPedido, {
            foreignKey: 'produtos_id',
            as: "ItemPedido"
        })
    }

    return Produto;

}
