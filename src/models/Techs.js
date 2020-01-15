const { Model, DataTypes } = require('sequelize');

class Techs extends Model {
    static init(connection) {
        super.init({
            tech: DataTypes.STRING,
        }, {
            sequelize: connection
        })
    }

    static associate(models) {
        this.belongsTo(models.Devs, {
            foreignKey: 'dev_id', as: 'dev',
        });
    }
}

module.exports = Techs