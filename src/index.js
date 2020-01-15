const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes')

require('./database')

const app = express();

//app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(routes);

app.listen(3333);