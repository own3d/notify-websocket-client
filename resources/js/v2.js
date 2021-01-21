import { io } from 'socket.io-client';

const socket = io('https://socket-hel1-1.own3d.dev', {
    withCredentials: true,
});
//serverid=edge-1
socket.on("connect", () => {
    console.log(socket.id);
});

socket.on("hi", (data) => {
    console.log(data);
});