const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Devs = require('../models/Devs');
const Techs = require('../models/Techs');
const Languages = require('../models/Languages');

const connection = new Sequelize(dbConfig);

Devs.init(connection);
Techs.init(connection);
Languages.init(connection);

Techs.associate(connection.models);
Devs.associate(connection.models);
Languages.associate(connection.models);


module.exports = connection;
