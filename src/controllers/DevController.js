const Devs = require('../models/Devs');
const axios = require('axios');

module.exports = {
    async index(request, response) {
        const devs = await Devs.findAll();
        return response.json(devs);
    },
    async store(request, response) {
        //const { name, github_username, bio, avatar_url } = request.body;
        const { github_username, longitude, latitude } = request.body;

        let dev = await Devs.findOne({ github_username });

        if (!dev) {
            const resp = await axios.get(`https://api.github.com/users/${github_username}`);
            //console.log(resp.data);
            const { name = login, bio, avatar_url } = resp.data;

            dev = await Devs.create({ name, github_username, bio, avatar_url, longitude, latitude });
        }

        return response.json(dev);
    },

    async update(request, response) {
        const { github_username } = request.params;
        const { name } = request.body;

        console.log(github_username + " - " + name);

        await Devs.update({
            name,
        }, {
            where: {
                github_username
            }
        });

        let dev = await Devs.findOne({ github_username });

        return response.json(dev);

    },
    async destroy(request, response) {
        const { github_username } = request.params;
        //console.log(github_username);

        await Devs.destroy({ where: { github_username } });

        return response.json();
    },
}