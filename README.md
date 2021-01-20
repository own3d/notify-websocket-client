# OWN3D Notify Websocket Client Example

This project includes a small example to receive OWN3D alerts from our notifications backend through websockets. This package is for demonstration purposes only.

## Development Usage

Open `public/index.html` in a web browser. And run the npm scripts to build the `app.js`. 

```bash
npm install
npm run watch
```

## Example

```javascript
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
```