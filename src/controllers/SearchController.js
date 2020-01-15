const Devs = require('../models/Devs');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    async index(request, response) {
        const { longitude, latitude, techs } = request.query;

        techsArray = parseStringAsArray(techs);

        const devs = await Devs.findAll( );



        return response.json(devs);
    },
}