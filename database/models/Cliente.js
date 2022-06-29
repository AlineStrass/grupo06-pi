module.exports = (sequelize, DataType) => {
    const Cliente = sequelize.define('Cliente', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nomeCompleto: {
            type: DataType.STRING,
            allowNull: true,
        },
        foto: DataType.STRING,

        email: {
            type: DataType.STRING,
            allowNull: true,
        },
        telefone: {
            type: DataType.STRING,
            allowNull: true,
        },
        sexo: DataType.STRING,

        datanascimento: {
            type: DataType.DATE,
            allowNull: true,
        },
        cpf: {
            type: DataType.STRING,
            allowNull: true,
        },
        senha: {
            type: DataType.STRING(100),
            allowNull: true,
        },
    },
    {
        tableName: 'clientes',
        timestamps: false
    });

    Cliente.associate = (listaDeModelos) => {
        Cliente.hasMany(listaDeModelos.Endereco, {
            foreignKey: 'clientes_id',
            as: "enderecos"
        })
    }

    return Cliente;
};

