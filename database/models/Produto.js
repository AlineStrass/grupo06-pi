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
    }, {

        tableName: 'produtos',
        timestamps: false

    });


    Produto.associate = (listaModels) => {
        Produto.belongsTo(listaModels, {
            foreignKey: 'categorias_id',
            as: "categoria"
        })
    }

    return Produto;

};
