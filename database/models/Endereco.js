module.exports = (sequelize, DataType) => {
    const Endereco = sequelize.define('Endereco', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        rua: {
            type: DataType.STRING,
            allowNull: true,
        },
        numero: {
            type: DataType.STRING,
            allowNull: true,
        },
        bairro: {
            type: DataType.STRING,
            allowNull: true,
        },
        complemento: DataType.STRING,

        cidade: {
            type: DataType.STRING,
            allowNull: true,
        },
        estado: {
            type: DataType.STRING,
            allowNull: true,
        },
        cep: {
            type: DataType.STRING,
            allowNull: true,
        },
        clientes_id: DataType.INTEGER,
    }, {

        tableName: 'enderecos',
        timestamps: false

    });

    Endereco.associate = (listaModels) => {
        Endereco.belongsTo(listaModels.Cliente, {
            foreignKey: 'clientes_id',
            as: "cliente"
        })
    }

    return Endereco;

};
