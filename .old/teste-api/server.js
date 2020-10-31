/** arquivo:server.js
 *  descrição: Arquivo responsável por toda execução do Back - End *
 *  data: 31/10/2020 - 01:58
 *  autor: Ed
 */
const app = require('./src/app');

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Aplicação sendo executada na porta:', port);
});
