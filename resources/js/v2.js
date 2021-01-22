import { io } from 'socket.io-client';

const socket = io('https://socket-hel1-1.own3d.dev', {
    withCredentials: true,
});

socket.on("connect", () => {
    console.log(socket.id);
    socket.emit('room', "twitch.106415581");
});

socket.on('notify', (data) => {
    switch (data.subscription.type) {
        case 'alert.raw':
            console.log(data.event);
            break;
        case 'alert.update':
            console.log(data.event);
            break;
        default:
            console.log('unknown type', data);
    }
});