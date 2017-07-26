import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './app.vue';

Vue.config.debug = true;

Vue.use(VueResource);

new Vue(App);
