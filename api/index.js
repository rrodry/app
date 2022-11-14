const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { Pais , Region } = require('./src/db');
const  axios  = require('axios')

conn.sync({ force: true }).then(() => {
  getGenders()
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  })
});
