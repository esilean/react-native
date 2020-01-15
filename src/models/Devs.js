const { Model, DataTypes } = require('sequelize');

class Devs extends Model {
    static init(connection) {
        super.init({
            name: DataTypes.STRING,
            github_username: DataTypes.STRING,
            bio: DataTypes.STRING,
            avatar_url: DataTypes.STRING,
            longitude: DataTypes.DOUBLE,
            latitude: DataTypes.DOUBLE
        }, {
            sequelize: connection
        })
    }

    static associate(models) {
        this.hasMany(models.Techs, { foreignKey: 'dev_id', as: 'techs' });
        this.belongsToMany(models.Languages, { foreignKey: 'dev_id', through: 'devs_languages', as: 'languages'});
    }
}

module.exports = Devs