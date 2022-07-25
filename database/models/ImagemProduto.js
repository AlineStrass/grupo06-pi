module.exports = (sequelize, DataType) => {
    const ImagemProduto = sequelize.define('ImagemProduto', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        imagem: DataType.STRING,
        produtos_id: DataType.INTEGER,
    }, {
        tableName: 'imagensProdutos',
        timestamps: false
    });

    // ImagemProduto.associate = (listaDeModelos) => {
    //     ImagemProduto.hasMany(listaDeModelos.Produto, {
    //     foreignKey: 'produtos_id',
    //     as: 'imagens'
    // })
    // }
   /* ImagemProduto.associate = (listaDeModelos) => {
        ImagemProduto.belongsTo(listaDeModelos.Produto, {
            foreignKey: 'produtos_id',
            as: 'imagem'
        })
    }*/

    return ImagemProduto;
}
