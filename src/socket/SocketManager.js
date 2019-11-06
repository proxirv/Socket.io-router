const io = require('socket.io')();

io.on('connection', function (socket) {
    console.log('NUEVA CONEXION: ',socket.id);
    socket.emit('recoger',socket.id);
});

module.exports = io;