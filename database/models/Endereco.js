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
        clientes_id:{ 
            type:DataType.INTEGER,}

    },{  
    
        tableName : 'enderecos',
        timestamps : false
    
    });

    return Endereco;
    
};