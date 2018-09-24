
import Vue from 'vue';

window._ = require('lodash');
//window.Popper = require('popper.js').default;

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

window.Vue = Vue;
try {
    window.$ = window.jQuery = require('jquery');

    require('bootstrap');
} catch (e) {}

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

let token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

import Echo from 'laravel-echo'

window.Pusher = require('pusher-js');

window.Echo = new Echo({
     broadcaster: 'pusher',
     key: 'f4e14530aedbfaf9a062',
     cluster: 'ap2',
     encrypted: true
}, function(e) {
	console.log("connection created");
});

window.Echo.channel('my-channel')
.listen('my-event', (e) => {
    console.log('Got event...');
    console.log(e);
});

/*Vue.use(require('vue-pusher'), {
    api_key: 'f4e14530aedbfaf9a062',
    options: {
        cluster: 'ap2',
        encrypted: true,
    }
});*/