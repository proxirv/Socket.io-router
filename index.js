const express = require('express');
const restApi = express();
const cors = require('cors');
const server = require('http').createServer(restApi);
const rutas = require('./src/routes/Routes.js');
const io = require('./src/socket/SocketManager.js');
io.attach(server);

restApi.use(express.json());
restApi.use(express.static('public'));
restApi.use(cors());
restApi.options('*', cors());

server.listen(4040, () => console.log('Listening server in port 4040'));

restApi.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

restApi.use('/api',rutas);

//module.exports = {restApi:restApi, server: server};