/** arquivo:server.js
 *  descrição: Arquivo responsável por fazer a conexão com "server.js" *
 *  data: 31/10/2020 - 01:58
 *  autor: Ed
 */
const express = require('express');
const cors = require('cors');

const app = express();

// ==> Rotas da API (Employee):
const index = require('./routes/index');
const employeeRoute = require('./routes/employee.routes');
//app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());
app.use(bodyParser.json());
app.use(index);
app.use('/api/', employeeRoute);

module.exports = app;
