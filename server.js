const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/send', (req, res) => {
    console.log(req.body);      // your JSON
    io.emit('hi', req.body);
    res.send(req.body);    // echo the result back
});

const server = app.listen(3000, () => {
    console.log('listening on *:3000');
});

const io = require('socket.io')(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
        allowedHeaders: ["my-custom-header"],
        credentials: true
    }
});

const redis = require('socket.io-redis');
io.adapter(redis({ host: '10.1.0.2', port: 6379 }));

io.on('connection', (socket) => {
    console.log('a user connected');
});
