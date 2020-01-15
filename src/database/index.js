const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Devs = require('../models/Devs');
const Techs = require('../models/Techs');

const connection = new Sequelize(dbConfig);

Devs.init(connection);
Techs.init(connection);

Techs.associate(connection.models);
Devs.associate(connection.models);


module.exports = connection;
