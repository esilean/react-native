const Devs = require('../models/Devs');
const Techs = require('../models/Techs');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    async index(request, response) {
        const { dev_id } = request.params;

        const dev = await Devs.findByPk(dev_id, {
            include: { association: 'techs' }
        });

        if (!dev) {
            return response.status(400).json({ error: 'Dev not found' });
        }

        return response.json(dev.techs);
    },
    async store(request, response) {

        const { dev_id } = request.params;
        const { tech } = request.body;
        //console.log(dev_id);

        const dev = await Devs.findByPk(dev_id);
        if (!dev) {
            return response.status(400).json({ error: 'Dev not found' });
        }

        const techArray = parseStringAsArray(tech);
        //console.log(techArray);

        var techsAssociated = [];
        for (var i = 0; i < techArray.length; i++) {

            const techE = await Techs.findOne({ where: { tech: techArray[i] } });
            if (!techE) {
                var techAss = {
                    dev_id,
                    tech: techArray[i],
                };
                techsAssociated.push(techAss);
            }
        }
        //console.log(techsAssociated);

        const techs = await Techs.bulkCreate(techsAssociated, { returning: true });

        return response.json(techs);
    },
}