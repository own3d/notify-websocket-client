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

Pusher.log = (msg) => {
    console.log(msg);
};

window.Echo.connector.pusher.connection.bind('connected', function() {
    console.log('disconnected', 'do nothing');
});

window.Echo.connector.pusher.connection.bind('disconnected', function() {
    console.log('disconnected', 'do something');
});

window.Echo.connector.pusher.connection.bind('error', function(error) {
    console.error('connection error', error)
});

window.Echo.connector.pusher.connection.bind('state_change', function(states) {
    // states = {previous: 'oldState', current: 'newState'}
    console.log("Channels current state is " + states.current);
});