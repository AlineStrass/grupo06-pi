module.exports = (sequelize, DataType) => {
    const Categoria = sequelize.define('Categoria', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        categoria: DataType.STRING,
    },
        {
            tableName: 'categorias',
            timestamps: false
        });

    Categoria.associate = (listaDeModelos) => {
        Categoria.hasMany(listaDeModelos.Produto, {
            foreignKey: 'categorias_id',
            as: "produtos"
        })
    }

    return Categoria;
};
