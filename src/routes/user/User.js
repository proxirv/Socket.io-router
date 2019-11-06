var io = require('../../socket/SocketManager');
var socket = require('../../socket/SocketManager');

var RouterUser = function(){

  this.practicafuncion = function (req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    console.log('probando entrar por rest y que salga un mensaje por socket');
    res.send({
      status:'Aprobado',
      msj:'Enviado por rest'
    });
    //io.sockets.emit('mensaje','**MENSAJESERVIDORPORSOCKET**');
    socket.broadcast.emit('mensaje','**MENSAJESERVIDORPORSOCKET**');
  };
}

module.exports = function(){
  var instancia = new RouterUser();
  return instancia;
};