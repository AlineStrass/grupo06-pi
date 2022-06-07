module.exports = (sequelize, DataType) => {
    const Admin = sequelize.define('Admin', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataType.STRING,
            allowNull: true,
        },
        senha: {
            type: DataType.INTEGER,
            allowNull: true,
        },
    },
        {   
    
            tableName : 'categorias',
            timestamps : false
        
});

    return Admin;

};

