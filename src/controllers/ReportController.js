const { Op } = require('sequelize');
const Devs = require('../models/Devs');


module.exports = {
    async show(request, response) {

        // encontrrar usuarios que terminar com a
        // entendam de react
        // falam ingles

        const devs = await Devs.findAll({
            attributes: ['name', 'avatar_url', 'longitude', 'latitude'],
            where: {
                name: {
                    [Op.like]: '%a'
                }
            },
            include: [
                {
                    association: 'techs',
                    where: {
                        tech: {
                            [Op.like]: 'React%'
                        }
                    }
                },
                {
                    association: 'languages',
                    required: false,
                    where: {
                        name: 'English'
                    }
                }

            ],
        });

        return response.json(devs);
    }
}