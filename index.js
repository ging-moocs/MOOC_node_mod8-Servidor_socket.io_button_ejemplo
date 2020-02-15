var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require("path");
app.use(express.static(path.join(__dirname, "public")));

io.on('connection', function(socket){
    io.emit('new_connection');
    socket.on('disconnect', function(msg){
        io.emit('new_disconnection');
    });
    socket.on('click', function(time){
        io.emit('new_click', time);
    });
});

http.listen(3000);