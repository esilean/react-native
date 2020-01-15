const { Model, DataTypes } = require('sequelize');

class Languages extends Model {
    static init(connection) {
        super.init({
            name: DataTypes.STRING,
        }, {
            sequelize: connection
        });
    }

    static associate(models) {
        this.belongsToMany(models.Devs, { foreignKey: 'language_id', through: 'devs_languages', as: 'devs' });
    }
}

module.exports = Languages