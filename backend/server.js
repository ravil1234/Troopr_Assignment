const express = require('express');
const app = express();
const port = process.env.PORT || 8080;


// mongoose instance connection url connection
require('./config/local')();

const middlewares=require('./api/middlewares/index')
middlewares(app)

app.get('/', (req, res) => {
  res.send('Done');
});

const routes = require('./api/routes/userRoutes');
routes(app);

app.listen(port, () => {
  console.log('Node.js + MongoDB RESTful API server started on: ' + port);
});
