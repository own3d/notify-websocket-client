import { io } from 'socket.io-client';

const socket = io('http://127.0.0.1:3000');

socket.on("connect", () => {
    console.log(socket.id); // x8WIv7-mJelg7on_ALbx
    setInterval(() => socket.emit('hi', {'test': 234}), 10);
});

socket.on("hi", (data) => {
    console.log(data);
});