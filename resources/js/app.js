import Echo from "laravel-echo"

window.Pusher = require('pusher-js');

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: 'eyvet88xc7py4smk',
    wsHost: 'pusher.notifications-backend.own3d.tv',
    wsPort: 443,
    forceTLS: false,
    disableStats: true,
});

window.Echo
    .channel(`users.1`)
    .listen('ActivityCreated', (event) => {
        console.log(event);
    })
    .listen('ConfigsUpdated', (event) => {
        console.log(event);
    });