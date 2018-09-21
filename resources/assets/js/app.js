require('./bootstrap');

import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes.js';

window.Vue = require('vue');
Vue.use(VueRouter);

//Vue.component('message-component', require('./components/MessageComponent.vue'));
Vue.component('chat-form', require('./components/ChatForm.vue'));

//window.messageEvent = new Vue();
const router = new VueRouter({
    routes
});
new Vue({ router }).$mount('#app')

