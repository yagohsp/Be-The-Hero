const express = require('express');

const SessionController = require('./controllers/SessionController');
const OngController = require('./controllers/OngController');
const OngProfileController = require('./controllers/OngProfileController');
const IncidentController = require('./controllers/IncidentController');

const routes = express.Router();

routes
.post('/session', SessionController.create);

routes
.post('/ongs', OngController.create)
.get('/ongs', OngController.index);

routes
.get('/profile', OngProfileController.index);

routes
.post('/incidents', IncidentController.create)
.get('/incidents', IncidentController.index)
.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;