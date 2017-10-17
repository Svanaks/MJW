const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const users = require('./src/users.js');
const port = Number(process.env.PORT || 5000);

// Init App
const app = express();

app.use(bodyParser.urlencoded({
	extended: true
}));
app.enable('trust proxy');

// Load View Engine
app.set('views', path.join(__dirname, '/public/templates'));
app.set('view engine', 'jade');
app.engine('jade', require('jade').__express);

// We set a public folder
app.use(express.static(path.join(__dirname, 'public')));

var io = require('socket.io').listen(app.listen(port));
console.log('Listening on port: '+port);

var sendChatsToClient = function(socket,room) {
	if (room in users.roomList) {
		var chats = users.roomList[room].chats;
		socket.emit('chat:previous',chats);
	}
};

io.sockets.on('connection', function(socket){

	// Connection and Disconnection handling
	socket.emit('status',{connected:'true'});

	socket.on('register',function(userDetail){
		socket.join(userDetail.room);
		users.setSocketId(userDetail.username,socket.id);
		// users.roomList[userDetail.room].paper = new paper.PaperScope();
		sendChatsToClient(socket,userDetail.room);
		io.sockets.emit('user:list',users.getUsernamesList(userDetail.room));
		console.log('Registered: '+userDetail.username+', '+socket.id);
	});

	socket.on('disconnect', function () {
		if(users.removeUser(socket.id)){
			console.log(socket.id + ' disconnected');
			io.sockets.emit('user:list',users.getUsernamesList());
		}
	});

	// Chat messages handling
	socket.on('chat:send', function (data){
		users.addChatToRoom(data.room,data);
		io.sockets.in(data.room).emit('chat:send', data);
	});

	// Canvas messages handling
	socket.on('drawing:location',function(data){
		io.sockets.in(data.room).emit('drawing:location', data)
	});
  	socket.on('drawing:start',function (data) {
  		io.sockets.in(data.room).emit('drawing:start',data);
  	});
  	socket.on('drawing:progress',function (data) {
  		io.sockets.in(data.room).emit('drawing:progress',data);
  	});
});

app.get('/',function(req,res){
	console.log(req.ip+" opened the site");
	// We render the login template with a custom message (here null)
	res.render('login.jade',{msg:''});
});

app.get('/monitor',function(req,res) {
	console.log(req.ip+" is monitoring");
	// We render the monitoring template with users datas
	res.render('monitor.jade',{roomList:users.roomList,userList:users.userList});
});

app.post('/canvas',function(req,res,next){
	console.log("Got by POST from "+req.body.username+' '+req.body.room+' '+req.ip);
	if (!users.addNewUser(req.body.username,req.body.room,req.ip)) {
		res.render('login.jade',{msg:'Username already taken'});
	} else {
		// users.setSocketId();
		res.render('canvas.jade',{username:req.body.username,room:req.body.room});
	}
});
