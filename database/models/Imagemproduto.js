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

    

    return ImagemProduto;

}