const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');
const TechController = require('./controllers/TechController');

const routes = Router();

routes.get('/', (request, response) => {
    return response.json({ message: 'GET: Hello from Arandelle' })
});

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.delete('/devs/:github_username', DevController.destroy);
routes.put('/devs/:github_username', DevController.update);

routes.get('/devs/:dev_id/techs', TechController.index);
routes.post('/devs/:dev_id/techs', TechController.store);

routes.get('/search', SearchController.index);




module.exports = routes;