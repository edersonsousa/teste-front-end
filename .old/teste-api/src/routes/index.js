/** arquivo:/routes/index.js
 *  descrição: Arquivo responsável ppela chamada da api na aplicação do lado do Back - End*
 *  data: 31/10/2020 - 01:58
 *  autor: Ed
 */
const express = require('express');

const router = express.Router();

router.get('/api', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'Seja bem-vindo(a) a API Node.js + Mongo',
    version: '1.0.0'
  });
});

module.exports = router;