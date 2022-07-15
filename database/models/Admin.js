module.exports = (sequelize, DataType) => {
    const Admin = sequelize.define('Admin', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataType.STRING(100),
            allowNull: true,
        },
        senha: {
            type: DataType.INTEGER(300),
            allowNull: true,
        },
    },
        {
            tableName : 'admin',
            timestamps : false
});
    return Admin;
};

