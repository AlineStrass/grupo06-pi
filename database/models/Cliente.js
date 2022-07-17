module.exports = (sequelize, DataType) => {
    const Cliente = sequelize.define('Cliente', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        onDelete: 'CASCADE',
        nomeCompleto: {
            type: DataType.STRING,
            allowNull: true,
        },
        email: {
            type: DataType.STRING,
            allowNull: true,
        },
        telefone: {
            type: DataType.STRING,
            allowNull: true,
        },
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
        timestamps: false,
        onDelete: 'CASCADE',
    });

    Cliente.associate = (listaDeModelos) => {
        Cliente.hasMany(listaDeModelos.Endereco, {
            onDelete: 'CASCADE',
            foreignKey: 'clientes_id',
            as: "enderecos"
        })
    }

    return Cliente;
};

