module.exports = {
    server: 'TRADER',
    dialect: 'mssql',
    database: 'Trader',
    username: 'sa',
    password: '123456',
    authentication: {
        type: 'default',
        options: {
            userName: 'sa',
            password: '123456'
        }
    },
    options: {
        database: 'Trader',
        rowCollectionOnDone: true,
        useColumnNames: false,
        encrypt: false,
    },
    define: {
        timestamps: true,
        underscored: true,
        freezeTableName: true,
    }
};