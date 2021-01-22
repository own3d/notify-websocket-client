require('dotenv').config();

const express = require('express');
const app = express();
const basicAuth = require('express-basic-auth');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const auth = basicAuth({
    users: {'own3d-socket': process.env.AUTH_PASSWORD},
});

// Health check
app.head('/health', function (req, res) {
    res.sendStatus(200);
});

app.post('/emit', auth, (req, res) => {
    console.log(req.body);      // your JSON
    io.in(req.body.room).emit(req.body.event, req.body.data);
    res.send(req.body);    // echo the result back
});

const server = app.listen(3000, () => {
    console.log('listening on *:3000');
});

const io = require('socket.io')(server, {
    cors: {
        origin: true,
        credentials: true,
        methods: ["GET", "POST"]
    }
});

const redis = require('socket.io-redis');
io.adapter(redis({host: '10.1.0.2', port: 6379}));

// handle incoming connections from clients
io.on('connection', (socket) => {
    console.log('a user connected');
    // once a client has connected, we expect to get a ping from them saying what room they want to join
    socket.on('room', function(room) {
        socket.join(room);
    });
});