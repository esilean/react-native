const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');
const TechController = require('./controllers/TechController');
const LanguageController = require('./controllers/LanguageController');
const ReportController = require('./controllers/ReportController');

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

routes.get('/devs/:dev_id/languages', LanguageController.index);
routes.post('/devs/:dev_id/languages', LanguageController.store);
routes.delete('/devs/:dev_id/languages', LanguageController.delete);

routes.get('/report', ReportController.show);

routes.get('/search', SearchController.index);




module.exports = routes;