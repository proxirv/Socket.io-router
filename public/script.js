const socket = io();

socket.on('mensaje', function (data) {
	console.log(data);
	alert(data);
});

socket.on('recoger', function (data) {
	console.log('NUEVA CONEXION: ',data);
});

function prueba(){
	const url = 'http://localhost:4040/api/practicafuncion';
	fetch(
      url,
		{
			method: 'POST',
			headers:{
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*'
			}
		}
	).then(
		(res) => res.json()
	).then(
		(response) => {
			console.log('regreso el rest del servidor:',response.msj);
		}
	).catch(
		(error) => { 
			console.log('ERROR: '+error);
		}
	);
};