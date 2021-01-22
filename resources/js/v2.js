import { io } from 'socket.io-client';

const socket = io('https://socket-hel1-1.own3d.dev', {
    withCredentials: true,
});

socket.on("connect", () => {
    console.log(socket.id);
});

socket.on("user.12123", (data) => {
    console.log(data);
});