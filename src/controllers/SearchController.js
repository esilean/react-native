const Op = require('sequelize').Op;
const Devs = require('../models/Devs');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    async index(request, response) {
        const { longitude, latitude, techs } = request.query;

        techsArray = parseStringAsArray(techs);
        console.log(techsArray);

        const devs = await Devs.findAll({
            include: { association: 'techs', required: true, },
            where: {
                '$techs.tech$': {
                    [Op.in]: techsArray
                },
                // '$devs.latitude$': {
                //     [Op.eq]: '12'
                // },
            },
           
        });

        return response.json(devs);
    },
}