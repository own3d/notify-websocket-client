import Echo from "laravel-echo";

window.Pusher = require('pusher-js');

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: 'eyvet88xc7py4smk',
    wsHost: 'notifications-backend.own3d.tv',
    wsPort: 6001,
    wssHost: 'notifications-backend.own3d.tv',
    wssPort: 443,
    forceTLS: true,
    enableStats: false,
    enabledTransports: ['ws', 'wss'],
});

window.Echo
    .channel(`users.1`)
    .listen('ActivityCreated', (event) => {
        console.log(event);
    })
    .listen('ConfigsUpdated', (event) => {
        console.log(event);
    });