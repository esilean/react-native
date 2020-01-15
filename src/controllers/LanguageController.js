const Languages = require('../models/Languages');
const Devs = require('../models/Devs');

module.exports = {
    async index(request, response) {

        const { dev_id } = request.params;

        // const dev = await Devs.findByPk(dev_id, {
        //     include: { association: 'languages'}
        // });

        // Nao retorna tabela intermediaria Devs_Langauges
        const dev = await Devs.findByPk(dev_id, {
            include: { association: 'languages', through: { attributes: [] } }
        });


        return response.json(dev.languages);
    },
    async store(request, response) {

        const { dev_id } = request.params;
        const { name } = request.body;
        console.log(name);

        const dev = await Devs.findByPk(dev_id);
        if (!dev) {
            return response.status(400).json({ error: 'Dev not found' });
        }

        const [language] = await Languages.findOrCreate({
            where: { name }
        });

        await dev.addLanguage(language);

        return response.json(language);
    },
    async delete(request, response) {
        const { dev_id } = request.params;
        const { name } = request.body;
        console.log(name);

        const dev = await Devs.findByPk(dev_id);
        if (!dev) {
            return response.status(400).json({ error: 'Dev not found' });
        }

        const language = await Languages.findOne({
            where: { name }
        });

        await dev.removeLanguage(language);

        return response.json();

    },
}